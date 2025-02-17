import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
const NewsDetail = ({ articles }) => {
  const { newsId } = useParams();
  if (!Array.isArray(articles)|| articles.length === 0) {
    return <div>Cargando...</div>;
  }
  console.log(articles);
  const article = articles.find((item) => item.title === newsId);
  const { author, description, title, urlToImage, publishedAt, content } =
    article;
  if (!article) {
    return <div>Artículo no encontrado</div>;
  }
  return (
    <div className="newsItem">
      {urlToImage && (
        <div className="newsCard">
          <h5>{publishedAt}</h5>
          <h5> Author: {author}</h5>
          <h2>{title}</h2>
          <p>{description}</p>
          <img src={urlToImage} alt="news image" />
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};
NewsDetail.propTypes = {
  articles: PropTypes.array.isRequired,
};
export default NewsDetail;
