/* eslint-disable react/prop-types */
import './CardPhotoWithTitle.css'

const CardPhotoWithTitle = ({ title, hyperlink, backgroundImage }) => {
    return (
        <article id={title} className='CardPhotoWithTitle__article'>
            <a className='CardPhotoWithTitle__cardLink' href={hyperlink} target="_blank" rel="noopener noreferrer">
                <div>
                    <img className='CardPhotoWithTitle__image' src={backgroundImage} alt={title} />
                    <h1 className='CardPhotoWithTitle__title'>{title}</h1>
                </div>
            </a>
        </article>
    )
}

export default CardPhotoWithTitle