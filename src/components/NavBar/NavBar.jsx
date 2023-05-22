// modules
import { NavLink } from "react-router-dom";

//css
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <nav className={`${styles.navBar}`}>
      <NavLink to='/AD&D1e' className={`${styles.navLink}`}>AD&D 1e</NavLink>
      <NavLink to='/HeroesOnJourneys' className={`${styles.navLink}`}>  Heroes on Journeys</NavLink>
    </nav>
  );
}

export default NavBar;