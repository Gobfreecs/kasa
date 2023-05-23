import './card.scss'
import { Link } from 'react-router-dom'

export default function Card({ id, title, cover }) {

    return (
        // eslint-disable-next-line no-template-curly-in-string
        <Link to={`/accomodation/${id}`} className='gallery_card'>
            <img src={cover} alt={title} />
            <h3>{title}</h3>
        </Link>
    )
}