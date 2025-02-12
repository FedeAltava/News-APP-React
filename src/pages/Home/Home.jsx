
import NewsList from '../../components/NewsList/NewsList';
import PropTypes from "prop-types";

const Home =({news})=>{
  

    return(
        <>
            <NewsList news={news}/>
        </>

    )
}
Home.propTypes = {
  news: PropTypes.array,
};
export default Home;