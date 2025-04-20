// import toast, { Toaster } from 'react-hot-toast';
// import { useEffect, useState } from "react"
// // import { getMovies } from "../../movies-api"
// import Loader from "../../components/Loader/Loader";
// import MovieList from "../../components/MovieList/MovieList"
// import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "./HomePage.module.css"
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <main className={css.homeContainer}>
      <section className={css.introSection}>
        <h1>Apprennez le français <br/>avec GREN!</h1>
        <p>
          Une plateforme interactive pour les Ukrainiens <br/> qui veulent apprendre le français facilement et avec plaisir.
        </p>
      </section>

      <div className={css.sectionContainer}>
        <section className={css.sectionBlock}>
          <h2>📘 Grammaire</h2>
          <p>
            Une section dédiée aux règles essentielles de la grammaire française. Théorie claire, 
            exemples pratiques et exercices interactifs pour renforcer vos connaissances
          </p>
          <NavLink to="/grammaire" className={css.btn}>Découvrir</NavLink>
      </section>

      <section className={css.sectionBlock}>
        <h2>🎧 Écouter</h2>
        <p>
          Améliorez votre compréhension orale grâce à des enregistrements, des dialogues, 
          et des activités audio conçus spécialement pour les francophones débutants et intermédiaires
          </p>
          <NavLink to="/ecouter" className={css.btn}>Découvrir</NavLink>
      </section>
       <section className={css.sectionBlock}>
          <h2>🇺🇦🇫🇷 Culture</h2>
          <p>
            Plongez dans le monde francophone: traditions, fêtes, géographie, cuisine et faits intéressants
            sur les pays francophones pour enrichir votre apprentissage
            </p>
            <NavLink to="/culture" className={css.btn}>Découvrir</NavLink>
        </section>

      <section className={css.sectionBlock}>
        <h2>🎲 Jouer</h2>
        <p>
          Découvrez nos jeux linguistiques pour pratiquer le vocabulaire et la grammaire et pour améliorer votre compréhension du français tout en vous divertissant
          </p>
          <NavLink to="/jouer" className={css.btn}>Découvrir</NavLink>
      </section>

      
      </div>
    </main>
  )
}