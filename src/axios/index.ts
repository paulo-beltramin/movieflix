import axios from "axios"

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "0687589f4ddca5801245a52b31fcbb81",
        language: 'pt-BR'
    }

})
export {
 
    api
}