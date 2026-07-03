import axios from 'axios';
import type { GIFResponse } from '../interfaces/gif.response';


const apiKey = import.meta.env.VITE_GIPHY_SECRET_KEY;

const giphyApi = axios.create({
    baseURL: `https://api.giphy.com/v1/gifs`,
    params: {
        api_key: apiKey,
    },
});

giphyApi.get<GIFResponse>('/random')
    .then(resp => console.log(resp.data.data.images.downsized.url))
    .catch(err => err)