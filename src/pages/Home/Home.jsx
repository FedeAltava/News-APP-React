import "./Home.css";
import NewsList from '../../components/NewsList/NewsList';
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
const Home =({news})=>{
    const [category,setCategory] = useState("")
    const {categoryName} = useParams();
    useEffect(()=>{
        setCategory(categoryName)
    },[categoryName])
    return(
        <>
        <h1>Your International News</h1>
            <NewsList news={news}/>
        </>

    )
}
Home.propTypes = {
  news: PropTypes.array,
};
export default Home;