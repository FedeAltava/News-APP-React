import axios from "axios";
const API_KEY = 'eda15dc73d78452783019e2dbfb9f410'; // API Key

const BASE_URL = 'https://newsapi.org/v2/top-headlines';
export const fetchNewsCategory = async (category) =>{
    try{
        const response = await axios.get(`${BASE_URL}?country=us&category=${category}&apiKey=${API_KEY}`); 
        return response.data.articles;
    }catch(error){
        console.error('Error en la petición:', error);
        return [];
    }
}