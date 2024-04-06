import axios from "@currency-exchanger/lib/axios"
import { ExchangeRateParams, ExchangeRateResponse, ListQuotesResponse } from "./types"
import { AxiosResponse } from "axios"

export const getListOfQuotes = async () => {
    const response: AxiosResponse<ListQuotesResponse, unknown> = await axios.get('/symbols')
    return response
}

export const getExchangeRate = async ({ from, to, amount }: ExchangeRateParams) => {
    const response: AxiosResponse<ExchangeRateResponse, unknown> = 
        await axios.get('/convert', { params: { from, to, amount } });
    return response
}