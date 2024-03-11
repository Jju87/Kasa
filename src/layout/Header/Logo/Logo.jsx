import kasaLogo from '../../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import './Logo';
function Logo () {
    return (
        <Link to="/" >
            <svg>
                <use xlinkHref={kasaLogo + "#logo"}></use>
            </svg> 
        </Link>
    )
}
export default Logo;
export {kasaLogo};