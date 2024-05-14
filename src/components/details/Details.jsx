import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import data from '../../data/data.json';
import Collapse from '../collapse/Collapse.jsx';
import Rating from "../rating/Rating.jsx";
import Carrousel from '../carrousel/Carrousel.jsx';

function Details() {
    // Avec useParams on recupere l'id dans l'url de la route definie pour le composant Details.jsx
    const { id } = useParams();
    const currentCard = data.find((card) => card.id === id);
    
    if (currentCard === undefined) {
        return <Navigate to="*" />;
      }
    
      const rating = currentCard.rating

    const name = currentCard.host.name.split(' ');



    return (
        <div className="details">
            
            <Carrousel pictures={currentCard.pictures} />
                {/* <img src="../../src/assets/images/ImgCarrousel.jpg" alt="" /> */}


            <div className="apartment__infos">
                <div className="apartment__title__infos">
                    <div className="apartment__title">
                        <h1>{currentCard.title}</h1>
                        <h2>{currentCard.location}</h2>
                    </div>
                    <div className="apartment__tags">
                        {currentCard.tags.map((tag, index) => {
                            return (
                                <button className="apartment__tag" key={index}>{tag}</button>
                            )
                        })}
                    </div>
                </div>


                <div className="apartment__host">

                    <div className="apartment__host__infos">
                        <div className="host__name">
                            <span className="host-lastname">{name[0]}</span>
                            <span className="host-firstname">{name[1]}</span>
                        </div>
                        <div className="apartment__badge"><img src={currentCard.host.picture} alt="" /></div>
                    </div>

                    <div className="apartment__stars">
                        <Rating rating={rating} />
                    </div>
                </div>

            </div>


            <div className="apartment__collapses">
                <div className="apartment__description">
                    <Collapse name='Description' description={currentCard.description} />
                </div>
                <div className="apartment__equipment">
                    <Collapse name='Équipements' data={currentCard.equipments} />
                </div>
            </div>

        </div>
    );
}

export default Details;