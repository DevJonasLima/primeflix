import axios from 'axios';

// BASE da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=fcd6af69e5e5441ef82f1bd8da8b9bf9&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});


export default api;