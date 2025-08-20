import axios from "axios";
const local = 'http://localhost:8001'
const production = 'http://localhost:6001'
let api_url = ''
let mode = "pro"
if (mode === "pro") {
    api_url = production
} else {
    api_url = local
}



const api = axios.create({
    baseURL: `${api_url}/api`
})

export default api