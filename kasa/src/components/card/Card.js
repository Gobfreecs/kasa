import './card.scss'


export default function Card({ id, title, cover }) {

    return (
        <link to={'/accomodation/${id}'} className='gallery_card'>
            <img src={cover} alt={title} />
            <h3>{title}</h3>
        </link>
    )
}