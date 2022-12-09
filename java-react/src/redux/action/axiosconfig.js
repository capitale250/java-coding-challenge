import axios from 'axios'
// import dotenv from "dotenv";
// dotenv.config();
const backendUrl = process.env.REACT_APP_BACKEND_URL
console.log(backendUrl)
const config = axios.create({
    baseURL:backendUrl 
})
// config.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default config;