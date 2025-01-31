import NewsItem from "../NewsItem/NewsItem";
import PropTypes from "prop-types";
const NewsList = ({ news }) => {
  return (
    <div>
      {news.map((article, index) => {
        <NewsItem key={index} article={article}/>;
      })}
    </div>
  );
};
//add props validation
NewsList.propTypes = {
    news: PropTypes.array.isRequired,
  };
export default NewsList;
