import { useState, useEffect } from 'react';
import {fetchNews} from '../../Services/NewsApi'


const Home =()=>{
    const {news, setNews} = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getNews = async () => {
          const articles = await fetchNews();
          setNews(articles);
          setLoading(false);
        };
    
        getNews();
      }, []);

    if (loading) {
        return <div>Cargando noticias...</div>;
      }
    return(
        <>
            <p>Hello World!</p>
        </>

    )
}

export default Home;