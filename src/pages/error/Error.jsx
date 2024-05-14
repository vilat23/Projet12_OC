
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="Error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
  );
}
export default Error;