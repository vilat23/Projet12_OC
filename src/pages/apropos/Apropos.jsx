import Collapse from '../../components/collapse/Collapse.jsx';
import Hero from '/src/components/hero/Hero.jsx';
import aproposImg from "/src/assets/images/aproposBanner.jpg";
function Apropos() {
  return (
    <div className="apropos">
      <Hero
        src={aproposImg}
        alt="Image d'un paysage"
      />

      <div className='apropos__collapses'>
            <Collapse 
            name ="Fiabilité" 
            description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes."
            />
            <Collapse 
            name ="Respect"
            description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
            perturbation du voisinage entraînera une exclusion de notre plateforme.."
            />
            <Collapse 
            name ="Service"
            description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
            perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Collapse 
            name ="Sécurité"
            description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
            correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
            locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
            également des ateliers sur la sécurité domestique pour nos hôtes."
            />
        </div>
    </div>
  );
}
  
  export default Apropos;