import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

    const { id } = useParams();
    const findRentalByID = data.find((item) => String(item.id) === String(id));
    // console.log('Found rental:', findRentalByID);
    // console.log('ID from URL:', id);
    // console.log('Data:', data);
    useEffect(() => {
        if (findRentalByID) {
            document.title = `Fiche Logement - ${findRentalByID.id}`;
        }
    }, [findRentalByID]);

    return (
        <section className="fiche-logement-container">
            {findRentalByID && (
                <Fragment>
                    <Carousel pictures={findRentalByID.pictures} />
                    <Content
                        titleDescription={findRentalByID.title}
                        titleLocation = {findRentalByID.location}
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

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./Fiche-Logement.scss";
// import Carousel from "../../components/Carousel/Carousel";

// function FicheLogement() {
//     const { id } = useParams();
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(
//                 process.env.PUBLIC_URL + "/rentals.json"
//             );
//             const jsonData = await response.json();
//             setData(jsonData);
//         };
//         fetchData();
//     }, []);

//     useEffect(() => {
//         document.title = `Fiche Logement - ${id}`;
//     }, [id]);

//     // Filtrer les données pour ne récupérer que la location correspondant à l'ID dans l'URL
//     const rental = data.find(item => item.id === id);

//     return (
//         <section className="fiche-logement-container">
//             {rental && (
//                 <>
//                     <Carousel pictures={rental.pictures} />
//                     <div className="fiche-logement-content">
//                         <h1>{rental.title}</h1>
//                         <p>{rental.location}</p>
//                         <p>{rental.description}</p>
//                         <p>ceci est l'id {rental.id}</p>
//                     </div>
//                 </>
//             )}
//         </section>
//     );
// }

// export default FicheLogement;
