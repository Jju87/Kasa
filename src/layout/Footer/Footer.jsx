import {kasaLogo} from '../Header/Logo/Logo';
import '../Footer/Footer.scss';

function Footer(){
    return (
        <footer>
            <svg className='white-logo'>
                <use xlinkHref={kasaLogo + "#logo"}></use>
            </svg>
            <p>
            © 2024 Kasa. Copyright Julien Gardier
            </p>
        </footer>
    )
}

export default Footer;