

// async transforma la funcion, en una funcion que retorna una promesa

import type { GIFResponse } from "../interfaces/gif.response"
import { giphyApi } from "./10-axios"

// permite correr codigo de forma asincrona de forma sincrona
export const getImage = async () => {

    try {
        const resp = await giphyApi.get<GIFResponse>('/random')
    
        return resp.data.data.images.downsized_large.url
        
    } catch (error) {
        console.log(error)
    }
}

export const getImagePromise = () => {
    return new Promise( resolve => {
        resolve('mi-url.jpg')
    })
}

(async() => {
    getImage()
})()