import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import bannerHome from "../../assets/images/bg-banner_forest.png";
import "../Home/Home.scss";
import Card from "../../components/Card/Card";

function Home() {
    // Utilise le hook useEffect pour mettre à jour le titre de l'onglet
    useEffect(() => {
        document.title = `Acceuil - Kasa`;
    }, []);

    // Génération du useState avec la valeur initiale null
    const [data, setData] = useState([]);

    // Utilise le hook useEffect pour récupérer les données de l'API
    useEffect(() => {
        const fetchData = async () => {
            // Simule une requête vers une API avec process.env.PUBLIC_URL
            const response = await fetch(
                process.env.PUBLIC_URL + "/rentals.json"
            );
            const jsonResponse = await response.json();
            // Met à jour de l'état avec les données de l'API
            setData(jsonResponse);
        };
        // Appel de la fonction fetchData
        fetchData();
    }, []);

    return (
        <div className="home-container">
            <div className="banner-home">
                <img src={bannerHome} alt="Vue sur une forêt" />
            </div>
            <section className="cards-gallery">
                {data.map((rental,) => {
                    return (
                        <Link
                            to={`/Fiche-Logement/${rental.id}`}
                            key={rental.id}
                        >
                            <Card cover={rental.cover} title={rental.title} />
                        </Link>
                    );
                })}
            </section>
        </div>
    );
}

export default Home;