import { useEffect, useState } from 'react';
import {fetchNews} from './Services/NewsApi';
import './App.css'
import NavBar from './components/Navbar/Navbar';
import Category from './pages/Category/Category'
import Home from './pages/Home/Home'
import NewsDetail from './pages/NewsDetail/NewsDetail'
import {  Routes, Route } from "react-router-dom";
function App() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const fetchedArticles = await fetchNews();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    getNews();
  }, []);

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home news={articles}/>}/>
      <Route path="/Category/:categorysName" element={<Category />}/>
      <Route path="/NewsDetail/:newsId" element={<NewsDetail articles ={articles}/>}/>
      <Route path="*" element={<Home />}/>
    </Routes>
    </>
  )
}

export default App
