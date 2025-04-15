import css from "./NotFoundPage.module.css"
import { NavLink } from "react-router-dom";
import clsx from "clsx";

 const makeLinkClass = ({isActive}) => {
    return clsx(css.link, isActive && css.active)
  }
    
export default function NotFoundPage() {

  return (
    <div className={css.notFoundTxt}>
      <p >Oups... Page non trouvée</p>
       <NavLink to="/" className={makeLinkClass}>Revenir à la page d&apos;accueil</NavLink>
    </div>
    
  )
}