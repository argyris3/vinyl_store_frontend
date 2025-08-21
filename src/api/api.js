import axios from 'axios';
const local = 'http://localhost:8001'
const production = 'https://vinyl-store-backend-k4g7.onrender.com';
let api_url = '';
let mode = 'pro ';
if (mode === 'pro') {
  api_url = production;
} else {
  api_url = local;
}

const api = axios.create({
  baseURL: `${api_url}/api`,
});

export default api;
