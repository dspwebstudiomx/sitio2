
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
                        <button className="button button--black" type="button">Sobre Mi</button>
                        <button className="button button--white" type="button">Portafolio</button>
                    </div>

                </div>
                <div className="hero_space"></div>
            </div>
        </section>
    )
}

export default Hero