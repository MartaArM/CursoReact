import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

const {VITE_API_URL} = getEnvVariables();

const calendarApi = axios.create({
    baseURL: VITE_API_URL
});

// Interceptor que se ejecuta cuando se hace una petición
// Lo utilizamos para meter el token en los headers de la petición
calendarApi.interceptors.request.use (config => {

    config.headers = {
        ...config.headers, // Headers que podían estar ahí 
        'x-token': localStorage.getItem('token')
    }

    return config;
})

export default calendarApi;