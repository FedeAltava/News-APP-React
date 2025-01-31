import NewsItem from "../NewsItem/NewsItem";
import PropTypes from "prop-types";
import "./NewsList.css"
const NewsList = ({ news }) => {
  return (
    <div className="newsList">
      <h1>Your News</h1>
      {news.map((article, index) => (
        <NewsItem key={index} article={article}/>
      ))}
    </div>
  );
};
//add props validation
NewsList.propTypes = {
    news: PropTypes.array.isRequired,
  };
export default NewsList;
