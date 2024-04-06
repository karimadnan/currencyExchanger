export interface ListQuotesResponse {
    success: boolean
    symbols: Record<string, string>
}

export interface ExchangeRateParams {
    from: string
    to: string
    amount: string
}

export interface ExchangeRateResponse {
    query: ExchangeRateParams
    info: { timestamp: number, rate: number }
    date: string
    result: number
}