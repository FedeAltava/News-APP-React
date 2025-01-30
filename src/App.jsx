

import './App.css'
import Category from './pages/Category/Category'
import Home from './pages/Home/Home'
import NewsDetail from './pages/NewsDetail/NewsDetail'
import {  Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Category" element={<Category />}/>
      <Route path="/NewsDetail" element={<NewsDetail />}/>
    </Routes>
    </>
  )
}

export default App
