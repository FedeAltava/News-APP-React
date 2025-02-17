import "./Home.css";
import NewsList from '../../components/NewsList/NewsList';
import PropTypes from "prop-types";
const Home =({news})=>{

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
