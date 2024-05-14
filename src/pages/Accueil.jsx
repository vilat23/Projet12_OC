import Hero from '/src/components/hero/Hero.jsx';
import Card from '/src/components/cards/Card.jsx';
import data from '../data/data.json';
import bannerImg from "/src/assets/images/accueilBanner.png";
function Accueil() {
  return (

    <div className="homepage">
      <div className="homepage__banner">
        <Hero
          title="Chez vous, partout et ailleurs"
          src={bannerImg}
          alt="Image d'un paysage"
        />
        </div>
        <div className='cards'>
          {/* On ajoute une prop data au composant Card pour l'utiliser dans Card.jsx */}
          <Card data={data} />
        </div>
    </div>
  )
}

export default Accueil;