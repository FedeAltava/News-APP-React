import PropTypes from "prop-types";
const NewsItem = ({article})=>{
    const { author, description, title ,urlToImage } = article;
    console.log(article)
    return(
        <div className="newsItem">
            <div className="newsCard">
                <h1>{title}</h1>
                <h5>{author}</h5>
                {urlToImage && <img src={urlToImage} alt="news image" />}
                <p>{description}</p>
            </div>
        </div>
    )
};

NewsItem.propTypes = {
    article: PropTypes.object.isRequired,
  };
export default NewsItem;