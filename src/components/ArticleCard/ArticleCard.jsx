import './articleCard.css'
import { BiSearchAlt } from 'react-icons/bi';

const ArticleCard = () => {
    return (
        <article className="article animate__animated animate__bounceIn">
            <div className="article__content">
                {/* <h2 className="card__title">Título</h2> */}
                <h2 className="article__title">Título</h2>
                <p className="article__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ipsam asperiores ipsum deserunt. Sit, voluptatem!</p>
                <a href="http://google.com" rel="noopener noreferrer" target="_blank" >
                    <button className="button button--black">
                        <BiSearchAlt className='button__svg' />
                        <span className='button__title'>Mas Información</span>
                    </button>
                </a>
            </div>
            <div className="article__space"></div>
        </article>
    )
}

export default ArticleCard