import SingleArticle from '../SingleArticle';
import './Article.css';
import data from '../../articlesData.json';
// import test from '../../'

const Article = () => {
  return (
    <section className="article-container">
      <p>our artciles</p>
      <div className='article-wrapper'>
        {
          data.map((item, index) => (
            <SingleArticle 
              key={index}
              title={item.title}
              image={item.image}
              date={item.date}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Article