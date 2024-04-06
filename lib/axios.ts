import { BASE_API_URL } from "@currency-exchanger/config/app";
import axios from "axios";


const axiosInstance = axios.create({
    baseURL: `https://${BASE_API_URL}`,
    headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
    }
})

export default axiosInstance