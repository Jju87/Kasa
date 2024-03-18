import  '../Card/Card.scss'

function Card({ cover, title }) {
    return (
        <article className="cards-gallery__card" >
            <img className='cards-gallery__card--cover' src={cover} alt={title} />
            <span className='cards-gallery__card--title'>{title}</span>
        </article>
    );
}

export default Card;
