import frogDeveloper from "../../assets/images/develop.gif"
import css from "./CulturePage.module.css"

export default function CulturePage() {
  return (
    <div>
      <img src={frogDeveloper} alt="frogdeveloper" className={css.frogIcon} />
      <p className={css.txt}>Oups... GREN est encore en développement !</p>
    </div>
  )
}