import css from "./ErrorMessage.module.css"
export default function ErrorMessage() {
  return (
    <p className={css.errorTxt}>Une erreur s&apos;est produite...</p>
  )
}