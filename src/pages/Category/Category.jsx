import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import NewsList from "../../components/NewsList/NewsList";
import { fetchNewsCategory } from "../../Services/CategoryNewsApi";

const Category =()=>{
    const [news, setNews] = useState([]); // Estado para almacenar las noticias
    const [isLoading, setIsLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null); // Estado de error
    const { categorysName } = useParams();
    useEffect(() => {
      const loadNews = async () => {
          setIsLoading(true);
          setError(null);
          try{
            const articles = await fetchNewsCategory(categorysName);
            setNews(articles);
          }catch(error){
            setError(error);
            console.error('Error en la petición:', error);
          }finally{
            setIsLoading(false);
          }
      }
      loadNews();
    }, [categorysName]);
    return (
      <>
        <h1>Category: {categorysName}</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!isLoading && !error && <NewsList news={news} />}
      </>
    );
  };
  Category.propTypes = {
    news: PropTypes.array,
  };

export default Category;