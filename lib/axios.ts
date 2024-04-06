import { BASE_API_URL } from "@currency-exchanger/config/app";
import axios from "axios";


const axiosInstance = axios.create({
    baseURL: `https://${BASE_API_URL}`,
    headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': BASE_API_URL
    }
})

export default axiosInstance