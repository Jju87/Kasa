import "./Content.scss";
import Collapse from "../Collapse/Collapse";
import Rating from "../Rating/Rating";

function Content({
    titleDescription,
    titleLocation,
    hostName,
    hostPicture,
    rentalTags,
    rentalRating,
    rentalDesctiption,
    rentalEquipment,
}) {
    return (
        <div className="fiche-logement-content">
            <h1 className="fiche-logement-content__title">
                {titleDescription}
            </h1>
            <span className="fiche-logement-content__subtitle">
                {titleLocation}
            </span>

            <div className="fiche-logement-content__tags">
                {rentalTags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>
            <div className="fiche-logement-content__who">
                <div className="fiche-logement-content__who--host">
                    <span>{hostName}</span>
                    <img src={hostPicture} alt="host-avatar" />
                </div>
                <Rating rentalRating={rentalRating} />
            </div>
            <section className="fiche-logement-content__collapses">
                <Collapse
                    className="fiche-logement-content__collapses--description"
                    title={<h2>Description</h2>}
                    text={<p>{rentalDesctiption}</p>}
                />
                <Collapse
                    className="fiche-logement-content__collapses--equipments"
                    title={<h2>Equipements</h2>}
                    text={
                        <ul>
                            {rentalEquipment.map((equipment) => (
                                <li key={equipment}>{equipment}</li>
                            ))}
                        </ul>
                    }
                />
            </section>
        </div>
    );
}

export default Content;
