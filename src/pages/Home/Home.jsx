import { Link } from "react-router-dom";
import { useEffect } from 'react';
import bannerHome from '../../assets/images/bg-banner_forest.png'
import '../Home/Home.scss';


function Home() {
    const LocationNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // Utilise le hook useEffect pour mettre à jour le titre de l'onglet
    useEffect(() => {
      document.title = `Acceuil - Kasa`;
    }, []);
  return (
    <div className="home-container">
      <div className="banner-home">
        <img src={bannerHome} alt="Vue sur une forêt" />
      </div>
      <h1>Home</h1>
      <article>
        <Link to={`/fiche-logement/${LocationNumber[0]}`}>
            Ici il y aura les cards des logements
        </Link>
        <Link to={`/fiche-logement/${LocationNumber[1]}`}>
            Ici il y aura les cards des logements
        </Link>
      
      </article>

    </div>
  );
}

export default Home;
