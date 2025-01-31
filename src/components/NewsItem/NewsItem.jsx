import PropTypes from "prop-types";
import "./NewsItem.css";
const NewsItem = ({article})=>{
    const { author, description, title ,urlToImage } = article;

    return(
        <div className="newsItem">
           {urlToImage &&<div className="newsCard">
                <h2>{title}</h2>
                <h5>{author}</h5>
                <img src={urlToImage} alt="news image" />
                <p>{description}</p>
            </div>} 
        </div>
    )
};

NewsItem.propTypes = {
    article: PropTypes.object.isRequired,
  };
export default NewsItem;