import axios from "axios";
const local = 'http://localhost:8765'
const production = ''
const api = axios.create({
    baseURL : `${local}/`
})

export default api