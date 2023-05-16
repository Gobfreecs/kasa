import './navbar.scss'
import { Link } from 'react-router-dom'

export default function navbar() {
    const currentRoute = window.location.pathname;

    return(
        <nav className='nav'>
            <ul className='nav-list'>
                <li className={currentRoute === '/' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link to='/'>
                        Accueil
                    </Link>
                </li>
                <li className={currentRoute === '/about' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/about'>
                        A propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}