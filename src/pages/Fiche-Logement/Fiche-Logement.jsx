import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Fiche-Logement.scss";
import Carousel from "../../components/Carousel/Carousel";
import Content from "../../components/Content/Content";
function FicheLogement() {
    // Utilise le hook useEffect pour mettre à jour le titre de l'onglet
    useEffect(() => {
        document.title = `Fiche Logement`;
    }, []);

    const [data, setData] = useState([]);

    // Utilise le hook useEffect pour récupérer les données de l'API
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                process.env.PUBLIC_URL + "/rentals.json"
            );
            const jsonData = await response.json();
            setData(jsonData);
        };
        fetchData();
    }, []);

    // Utilise le hook useParams pour récupérer l'ID de l'URL
    const { id } = useParams();
    // Filtrer les données pour ne récupérer que la location correspondant à l'ID avec find en spécifiant que 
    // l'ID doit être une chaîne de caractères car les id contiennent des lettres et des chiffres
    const findRentalByID = data.find((item) => String(item.id) === String(id));
    
    // Utilise le hook useNavigate pour naviguer vers une autre page
    const navigate = useNavigate();

    // Utilise le hook useEffect pour mettre à jour le titre de l'onglet avec l'ID de la location
    // et naviguer vers la page d'erreur si findRentalByID est false
    useEffect(() => {
        if (data.length > 0) {
            if (findRentalByID) {
                document.title = `Fiche Logement - ${findRentalByID.id}`;
            } else {
                navigate("*");
            }
        }
    }, [id, navigate, data]);

    return (
        <section className="fiche-logement-container">
            {findRentalByID && (
                <Fragment>
                    <Carousel pictures={findRentalByID.pictures} />
                    <Content
                        titleDescription={findRentalByID.title}
                        titleLocation={findRentalByID.location}
                        hostName={findRentalByID.host.name}
                        hostPicture={findRentalByID.host.picture}
                        rentalTags={findRentalByID.tags}
                        rentalRating={findRentalByID.rating}
                        rentalDesctiption={findRentalByID.description}
                        rentalEquipment={findRentalByID.equipments}
                    />
                </Fragment>
            )}
        </section>
    );
}

export default FicheLogement;

