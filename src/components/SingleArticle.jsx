import '../components/Article/Article.css';

const SingleArticle = ({title, image, date }) => {
  return (
    <div className="single-item">
      <img src={image} alt={title}/>
      <p>{title}</p>
      <p>{date}</p>
    </div>
  )
}

export default SingleArticle