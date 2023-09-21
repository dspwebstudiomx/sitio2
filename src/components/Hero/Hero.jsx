import { Link } from "react-scroll"

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__data">
                    <h1 className="hero__title">Hola Mundo</h1>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi in error atque provident laboriosam eligendi dolorem dolore consequatur nam? At!</p>
                    <br />
                    <div className="hero__button__section">
                        <Link activeClass="active" to="Servicios" spy={true} smooth={true} offset={0} duration={500} className='button button--black'>Servicios</Link>
                        <Link activeClass="active" to="Portafolio" spy={true} smooth={true} offset={0} duration={500} className='button button--white'>Portafolio</Link>
                    </div>

                </div>
                <div className="hero_space"></div>
            </div>
        </section>
    )
}

export default Hero