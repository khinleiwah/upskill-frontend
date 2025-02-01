import axios from "axios";
// const local = 'http://localhost:8765'
// const production = ''

// const categoryUrl = 'http://44.198.179.107:8100'
// const productUrl = 'http://34.203.247.42:8200'

const categoryUrl = 'http://54.221.112.85:8100'
const productUrl = 'http://3.235.134.236:8200'

export const productApi = axios.create({
    baseURL : `${productUrl}/`
})

export const categoryApi = axios.create({
    baseURL : `${categoryUrl}/`
})

// export default api