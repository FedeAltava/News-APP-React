import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
const NewsDetail = ({articles})=>{
    const {newsId} = useParams();
    if (!Array.isArray(articles)) {
        return <div>Cargando...</div>;
      }
    const article = articles.find((item)=> item.id === parseInt(newsId));
    const { author, description, title, urlToImage, publishedAt, content } = article;
    if (!article) {
        return <div>Artículo no encontrado</div>; 
      }
    return(
        <div className="newsItem">
        {urlToImage && (
          
            <div className="newsCard">
                <h5>{publishedAt}</h5>
              <h2>{title}</h2>
              <h5>{author}</h5>
              <p>{description}</p>
              <img src={urlToImage} alt="news image" />
              <p>{content}</p>
            </div>
        )}
      </div>
    )

}
NewsDetail.propTypes = {
  articles: PropTypes.array.isRequired,
};
export default NewsDetail