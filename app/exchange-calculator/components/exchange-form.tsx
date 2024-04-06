'use client'

import { 
    Button,
    Input,
    Label,
    SkeletonLoader, 
} from "@currency-exchanger/lib/ui"
import SwapIcon from '../../../public/icons/swap-icon.svg'
import { Suspense, useRef, useState } from "react"
import CurrencySelect from "./currency-select"
import { useDebounce } from "@currency-exchanger/lib/util"
import Skeleton from "./exchange-skeleton"
import ConversionResult from "./conversion-result"
import locale from "@currency-exchanger/lib/locale.json"
import { 
    CONVERT_DEBOUNCE_MILLISECONDS, 
    DEFAULT_AMOUNT,
    DEFAULT_CURRENCIES } 
from "../config"


interface ExchangeFormProps {
    listQuotes: Record<string, string>
}

export default function({ listQuotes }: ExchangeFormProps) {
    const [selectedCurrencies, setSelectedCurrencies] = useState(DEFAULT_CURRENCIES)
    const [exchangeAmount, setExchangeAmount] = useState(DEFAULT_AMOUNT)
    const amountInputRef = useRef<HTMLInputElement>(null)
    const debounceOnAmountchange = useDebounce()

    const { fromCurrency, toCurrency } = selectedCurrencies

    const symbols = Object.keys(listQuotes)

    function swapCurrencies() {
        if (fromCurrency && toCurrency) {
            setSelectedCurrencies((prevValues) => ({ 
                fromCurrency: prevValues.toCurrency, 
                toCurrency: prevValues.fromCurrency 
            }))
        }
    }

    function resetForm() {
        setSelectedCurrencies(DEFAULT_CURRENCIES)
        setExchangeAmount(DEFAULT_AMOUNT)
        if (amountInputRef.current instanceof HTMLInputElement) {
            amountInputRef.current.value = DEFAULT_AMOUNT
        }
    }

    function calculateExchangeRate(value: string) {
        if (value) {
            debounceOnAmountchange(async () => {  
                setExchangeAmount(value)
            }, CONVERT_DEBOUNCE_MILLISECONDS)
        }
    }
    
    return (
        <Skeleton 
            amount={
                <>
                    <Label htmlFor="amount">{locale.amount}</Label>
                    <Input
                        ref={amountInputRef}
                        defaultValue={DEFAULT_AMOUNT}
                        type="number" 
                        id="amount" 
                        min={0.1}
                        step={0.1}
                        placeholder="0.0"
                        onChange={(event) => calculateExchangeRate(event.target.value)}
                    />
                </>
            } 
            selectFrom={
                <>
                    <Label htmlFor="from">{locale.from}</Label>
                    <CurrencySelect
                        name="from-currency"
                        value={fromCurrency}
                        options={symbols}
                        disabledValue={toCurrency}
                        onValueChange={(value) => 
                            setSelectedCurrencies((prevSelected) => ({ 
                                ...prevSelected, fromCurrency: value
                             }))
                        }
                    />
                </>
            }
            swapButton={
                <Button 
                    variant='outline'
                    size='icon'
                    className="mt-5"
                    onClick={() => swapCurrencies()}
                    disabled={!fromCurrency || !toCurrency}
                >
                    <SwapIcon className='fill-blue-500' />
                </Button>
            }
            selectTo={
                <>
                    <Label htmlFor="to">{locale.to}</Label>
                    <CurrencySelect
                        name="to-currency"
                        value={toCurrency}
                        options={symbols}
                        disabledValue={fromCurrency}
                        onValueChange={(value) => 
                            setSelectedCurrencies((prevSelected) => ({ 
                                ...prevSelected, toCurrency: value 
                            }))
                        }
                    />
                </>
            }
            footer={
                <>
                    <Button onClick={() => resetForm()}>
                        {locale.reset}
                    </Button>
                    <Suspense fallback={<SkeletonLoader className="h-4 w-full mt-4" />}>
                        <ConversionResult 
                            listQuotes={listQuotes} 
                            fromCurrency={fromCurrency} 
                            toCurrency={toCurrency}
                            amount={exchangeAmount} 
                        />
                    </Suspense>
                </>
            }
        />
    )
}