import Logo from "./Logo/Logo";
import NavHeader from "./NavHeader/NavHeader";
import './Header.scss';

function Header() {
    return (
        <header>
            <Logo />
            <NavHeader />
        </header>
    );
}
export default Header;
