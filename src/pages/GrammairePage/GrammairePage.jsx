import frogDeveloper from "../../assets/images/develop.gif"
import css from "./GrammairePage.module.css"

export default function GrammairePage() {
      return (
          <div>
            <img src={frogDeveloper} alt="frogdeveloper" className={css.frogIcon} />
            <p className={css.txt}>Oups... GREN est encore en développement !</p>
          </div>
        )

}
