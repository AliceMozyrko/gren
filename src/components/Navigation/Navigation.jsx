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
        <img src={logo} alt="Gren Logo" width={80} height={80} className={css.logo}/>
        <nav className={css.container}>
          <NavLink to="/" className={makeLinkClass}>Home</NavLink>
          <NavLink to="/grammaire" className={makeLinkClass}>Grammaire</NavLink>
          <NavLink to="/ecouter" className={makeLinkClass}>Écouter</NavLink>
          <NavLink to="/culture" className={makeLinkClass}>Culture</NavLink>
        </nav>
      </div>
    </header>
  )
}
  
