import { useState, useEffect } from 'react';
import {fetchNews} from '../../Services/NewsApi'
import NewsList from '../../components/NewsList/NewsList';


const Home =()=>{
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getNews = async () => {
          const articles = await fetchNews();
          setNews(articles);
          setLoading(false);
        };
    
        getNews();
        
      }, []);
      console.log(news)
      
    if (loading) {
        return <div>Cargando noticias...</div>;
      }

    return(
        <>
            <NewsList news={news}/>
        </>

    )
}

export default Home;