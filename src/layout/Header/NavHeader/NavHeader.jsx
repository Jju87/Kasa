import { Link } from "react-router-dom";

function NavHeader() {
  return (
    <nav>
        <ul className="">
            <li ><Link to="/">Acceuil</Link></li>
            <li><Link to="/a-propos">A propos</Link></li>

        </ul>
    </nav>
  );
}

export default NavHeader;