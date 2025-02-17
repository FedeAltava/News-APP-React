import PropTypes from "prop-types";
import "./NewsItem.css";
import { Link } from "react-router-dom";
const NewsItem = ({ article }) => {
  const { author, description, title, urlToImage } = article;
  console.log(article);
  return (
    <div className="newsItem">
      {urlToImage && (
        <Link to={title?`/NewsDetail/${title}`:"#"}>
          <div className="newsCard">
            <h2>{title}</h2>
            <h5>{author}</h5>
            <img src={urlToImage} alt="news image" />
            <p>{description}</p>
          </div>
        </Link>
      )}
    </div>
  );
};

NewsItem.propTypes = {
  article: PropTypes.object.isRequired,
  id: PropTypes.number,
};
export default NewsItem;
