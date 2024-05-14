import logoKasa from "/src/assets/images/logo.png"
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <NavLink to="/" >
        <img src={logoKasa} alt="Logo kasa" className="logo" />
      </NavLink>
      <nav className="navbar">
        <ul>
          {/* On utilise NavLink au lieu de Link pour pouvoir définir l'état du lien et changer sa classe en "active" ou "" */}
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} >
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/apropos" className={({ isActive }) => isActive ? "active" : ""}>
            <li>A Propos</li>
          </NavLink>

        </ul>
      </nav>
    </div>
  );
};

export default Header;