import { getExchangeRate } from "../api"

interface ConversionResultProps {
    fromCurrency: string
    toCurrency: string
    listQuotes: Record<string, string>
    amount: string
}

export default async function({ fromCurrency, toCurrency, amount, listQuotes }: ConversionResultProps) {
    if (!fromCurrency || !toCurrency || !amount) return null

    const getConversionRate = await getExchangeRate({ 
        from: fromCurrency, 
        to: toCurrency, 
        amount
    })

    const [fromCurrenyName, toCurrencyName] = [listQuotes[fromCurrency], listQuotes[toCurrency]]

    const conversionString = `${amount} ${fromCurrenyName} equals ${String(getConversionRate.data.result)} ${toCurrencyName}`
    return conversionString
}