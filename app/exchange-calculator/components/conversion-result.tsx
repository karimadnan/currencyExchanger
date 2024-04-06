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

    const conversionResult = String(getConversionRate.data.result)

    const conversionString = `${amount} ${listQuotes[fromCurrency]} equals ${conversionResult} ${listQuotes[toCurrency]}`
    return conversionString
}