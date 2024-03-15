import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import '../Content/Content.scss';


function Rating ({rentalRating}){
 return(
    <div className="fiche-logement-content__who--rating">
    {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        console.log("voici le score:" + rentalRating)

        return (
            <FontAwesomeIcon
            key={i}
            className="icon"
            icon={faStar}
            color={ratingValue <= rentalRating ? '#ff6060' : '#e5e5e5'}
        />
           
        );
    })}
</div>
 )
}
export default Rating;