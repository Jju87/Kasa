import { useState } from "react";
import '../Collapse/Collapse.scss';
import arrow from '../../assets/images/vectorHaut.svg';

function Collapse({ text, title }) {
    // Utilise le hook useState pour gérer l'état de l'élément Collapse et la classe CSS
    const [isCollapsed, setIsCollapsed] = useState(true);

    // Crée une fonction pour basculer l'état de l'élément Collapse et mettre à jour la classe CSS
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    // Détermine la classe CSS en fonction de l'état
    const contentClass = isCollapsed ? "hidden" : "visible";
    const buttonImgClass = !isCollapsed ? "rotate" : ""; 

    // Renvoie un élément Collapse avec un bouton pour basculer l'état de l'élément et un élément p pour afficher le contenu
    return (
        <article className="collapse-container">
            <button onClick={toggleCollapse}>{title} <img className={buttonImgClass} src={arrow} alt="white arrow"></img></button>
            {/* Utilise la classe CSS déterminée dynamiquement */}
            <div className={`collapse-content ${contentClass}`}>
                {text}
            </div>
        </article>
    );
}

export default Collapse;
