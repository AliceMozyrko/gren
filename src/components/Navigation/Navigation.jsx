import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import clsx from "clsx";
import css from "./Navigation.module.css"

const makeLinkClass = ({isActive}) => {
    return clsx(css.link, isActive && css.active)
}
    
export default function Navigation() {
  return (
    <header>
      <div className={css.maindiv}>
        <NavLink to="/">
          <img src={logo} alt="Gren Logo" width={100} height={100} className={css.logo}/>
        </NavLink>
        <nav className={css.container}>
          <NavLink to="/" className={makeLinkClass}>Home</NavLink>
          <NavLink to="/grammaire" className={makeLinkClass}>Grammaire</NavLink>
          <NavLink to="/ecouter" className={makeLinkClass}>Écouter</NavLink>
          <NavLink to="/culture" className={makeLinkClass}>Culture</NavLink>
          <NavLink to="/jouer" className={makeLinkClass}>Jouer</NavLink>
        </nav>
      </div>
    </header>
  )
}
  
