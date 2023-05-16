import './footer.scss'
import logo from '../../assets/logo-footer.png'

export default function Footer(){
    return (
        <footer className='footer'>
            <img src={logo} alt="Kasa - agence de location d'appartements entre particuliers"/>
            <p className='footer_coryright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}