import PropTypes from "prop-types";
const NewsItem = ({index, article})=>{
    console.log(article)
    return(
        <div className="newsItem">
            <div className="newsCard">
                <h1>Titulo</h1>
                <h5>Autor</h5>
                <img src="" alt="" />
                <p>Descripcion</p>
            </div>
        </div>
    )
};

NewsItem.propTypes = {
    article: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
  };
export default NewsItem;