import { useState } from 'react';
import PropTypes from 'prop-types';

// Import des images des fleches
import arrowRight from '../../assets/images/arrowRight.png';
import arrowLeft from '../../assets/images/arrowLeft.png';

function Carrousel({ pictures }) {
    // Déclare une nouvelle variable d'état, que nous appellerons « currentImg »
    //   On initialise l'état local de currentImg à 0 à l'aide du hook usestate
    const [currentImg, setCurrentImg] = useState(0);


    // Au clic sur la flèche de gauche, affiche le slide précédent
    const prevSlide = () => {
        setCurrentImg(currentImg === 0 ? pictures.length - 1 : currentImg - 1);
    }
    //   On indique que si currentImg = 0(donc 1ere image), on affiche le dernier slide
    //   Sinon on affiche le slide precedent en decrementant de 1


    // Au clic sur la flèche de droite, affiche le slide suivant
    const nextSlide = () => {
        setCurrentImg(currentImg === pictures.length - 1 ? 0 : currentImg + 1);
    }
    //   On indique que si currentImg = -1(donc derniere image), on affiche la 1ere image
    //   Sinon on affiche le slide suivant en incrementant de 1

    return (
        <div className="carrousel">

            {pictures.length > 1 && (
                <div className="carrousel__arrows">
                    <img src={arrowLeft} alt="fleche gauche" className="arrowLeft" onClick={prevSlide} />
                    <img src={arrowRight} alt="fleche droite" className="arrowRight" onClick={nextSlide} />
                </div>
            )}
            <div className="carrousel__imgs">
                <img src={pictures[currentImg]} alt={`Image n°${currentImg + 1}`} />
            </div>

            <div className="carrousel_count">
                {/* Affichage du compteur en bas du carrousel */}
                {/* pictures.length > 1 pour afficher seulement si il y as plusieurs image */}
                <span>
                    {pictures.length > 1 ? `${currentImg + 1}/${pictures.length}` : ""}
                </span>
            </div>

        </div>
    )


}

Carrousel.propTypes = {
    pictures: PropTypes.array,
};








export default Carrousel;