import PropTypes from "prop-types";
const NewsItem = ({article})=>{
    const {author, description, title ,urlImage} = article;
    return(
        <div className="newsItem">
            <div className="newsCard">
                <h1>{title}</h1>
                <h5>{author}</h5>
                {urlImage && <img src={urlImage} alt="news image" />}
                <p>{description}</p>
            </div>
        </div>
    )
};

NewsItem.propTypes = {
    article: PropTypes.object.isRequired,
  };
export default NewsItem;