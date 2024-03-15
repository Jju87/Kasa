import { Link } from "react-router-dom";

function NavHeader() {
  return (
    <nav>
        <ul className="">
            <li ><Link to="/">Accueil</Link></li>
            <li><Link to="/a-propos">A propos</Link></li>

        </ul>
    </nav>
  );
}

export default NavHeader;