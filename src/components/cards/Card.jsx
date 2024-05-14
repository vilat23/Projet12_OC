import propTypes from "prop-types";
import { Link } from "react-router-dom";
 

function Card({data}) {
    return (

        // On boucle dans data de data.json et on créé une card pour chaque élément avec ses attributs 
        data.map((card) => (
            
            <Link to={`/details/${card.id}`} className="cards-thumbs" key={card.id}>
                <img src={card.cover} alt={card.title} />
                <div className="overlay"></div>
                <h3>{card.title}</h3>
            </Link>
        ))
    );
}

Card.propTypes = {
    data: propTypes.array.isRequired
}  

export default Card;