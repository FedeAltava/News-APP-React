import NewsItem from "../NewsItem/NewsItem";
import PropTypes from "prop-types";
import "./NewsList.css"
const NewsList = ({ news }) => {
  return (
    
    <div className="newsList">   
      {news.map((article, index) => (
        <NewsItem key={index} article={article} id={index}/>
        
      ))}
    </div>
  );
};
//add props validation
NewsList.propTypes = {
    news: PropTypes.array.isRequired,
  };
export default NewsList;
