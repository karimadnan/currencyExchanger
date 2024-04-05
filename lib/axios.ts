import { BASE_API_URL } from "@currency-exchanger/config/app";
import axios from "axios";


const axiosInstance = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
})

export default axiosInstance