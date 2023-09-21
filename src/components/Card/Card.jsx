import { BiSearchAlt } from 'react-icons/bi';
import './card.css'

const Card = () => {
    return (
        <article className="card">
            {/* <img className="card__img" src={reactLogo} alt="placeholder" /> */}
            <h2 className="card__title">Título</h2>
            <p className="card__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ipsam asperiores ipsum deserunt. Sit, voluptatem!</p>
            <a href="http://google.com" rel="noopener noreferrer" target="_blank" >
                <button className="button button--black">
                    <BiSearchAlt className='button__svg' />
                    <span className='button__title'>Mas Información</span>
                </button>
            </a>
        </article>
    )
}

export default Card