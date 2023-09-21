/* eslint-disable react/prop-types */
import './section.css'

export default function Section({ id, title, contenedor, children }) {
    return (
        <section id={id} className='section'>
            <h2 className='section__title'>{title}</h2>
            <div className={contenedor}>
                {children}
            </div>
        </section >
    )
}