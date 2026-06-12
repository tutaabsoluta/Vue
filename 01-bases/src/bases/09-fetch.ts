import type { GIFResponse } from "../interfaces/gif.response";

// const apiKey = process.env.GIPHY_SECRET_KEY;
const apiKey = import.meta.env.VITE_GIPHY_SECRET_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

fetch(url)
    .then((res) => res.json())
    .then(( body: GIFResponse ) => {
        console.log(body.data.images.original.url)
    })
    .catch((err) => {
        console.log(err)
    })

