// services/newsApi.js
const API_KEY = import.meta.env.VITE_NEWS_API_KEY; // Accede a la variable de entorno
const BASE_URL = 'https://newsapi.org/v2/everything';

export const fetchNews = async (query = 'Apple', from = '2025-01-30', sortBy = 'popularity') => {
  const url = `${BASE_URL}?q=${query}&from=${from}&sortBy=${sortBy}&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error al obtener las noticias');
    }
    const data = await response.json();
    return data.articles; // Retorna solo los artículos
  } catch (error) {
    console.error('Error en la petición:', error);
    return []; // Retorna un array vacío en caso de error
  }
};