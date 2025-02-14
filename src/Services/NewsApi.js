import axios from 'axios';

const API_KEY = 'eda15dc73d78452783019e2dbfb9f410'; // API Key
const BASE_URL = 'https://newsapi.org/v2/everything';

export const fetchNews = async (query = 'Apple', from = '2025-01-30', sortBy = 'popularity') => {
  const url = `${BASE_URL}?q=${query}&from=${from}&sortBy=${sortBy}&apiKey=${API_KEY}`;

  try {
    const response = await axios.get(url);
    return response.data.articles; 
  } catch (error) {
    console.error('Error en la petición:', error);
    return [];
  }
};