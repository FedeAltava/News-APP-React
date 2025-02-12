

import './App.css'
import NavBar from './components/Navbar/Navbar';
import Category from './pages/Category/Category'
import Home from './pages/Home/Home'
import NewsDetail from './pages/NewsDetail/NewsDetail'
import {  Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Category/:id" element={<Category />}/>
      <Route path="/NewsDetail/:id" element={<NewsDetail />}/>
      <Route path="*" element={<Home />}/>
    </Routes>
    </>
  )
}

export default App
