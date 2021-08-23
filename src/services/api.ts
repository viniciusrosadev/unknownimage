import axios from "axios";

export const apiUnsplash = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_UNSPLASH,
    headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_API_UNSPLASH_ACESSKEY}`
    }
})
