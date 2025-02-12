import PropTypes from "prop-types";
import "./NewsItem.css";
import { Link } from "react-router-dom";
const NewsItem = ({ article, id }) => {
  const { author, description, title, urlToImage } = article;

  return (
    <div className="newsItem">
      {urlToImage && (
        <Link to={id?`/NewsDetail/${id}`:"#"}>
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
