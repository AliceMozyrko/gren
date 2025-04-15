// import toast, { Toaster } from 'react-hot-toast';
// import { useEffect, useState } from "react"
// // import { getMovies } from "../../movies-api"
// import Loader from "../../components/Loader/Loader";
// import MovieList from "../../components/MovieList/MovieList"
// import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import css from "./HomePage.module.css"

export default function Home() {
  return (
    <main className={css.homeContainer}>
      <section className={css.introSection}>
        <h1>Bienvenue sur GREN !</h1>
        <p className={css.descrip}>
          Nous sommes une équipe de développeurs ukrainiens passionnés de langues
          et de technologies. Nous avons créé <strong>GREN</strong> comme une plateforme interactive
          pour aider les apprenants ukrainiens à explorer et à maîtriser la langue française
          de manière simple, ludique et efficace.
        </p>
      </section>

      <section className={css.sectionBlock}>
        <h2>📘 Grammaire</h2>
        <p>
          Une section dédiée aux règles essentielles de la grammaire française. Théorie claire, 
          exemples pratiques et exercices interactifs pour renforcer vos connaissances.
        </p>
      </section>

      <section className={css.sectionBlock}>
        <h2>🎧 Écouter</h2>
        <p>
          Améliorez votre compréhension orale grâce à des enregistrements, des dialogues, 
          et des activités audio conçus spécialement pour les francophones débutants et intermédiaires.
        </p>
      </section>

      <section className={css.sectionBlock}>
        <h2>🎲 Jouer</h2>
        <p>
          Apprenez en vous amusant ! Découvrez nos jeux linguistiques, quiz et mini-défis
          pour pratiquer le vocabulaire, les verbes et plus encore.
        </p>
      </section>

      <section className={css.sectionBlock}>
        <h2>🇺🇦🇫🇷 Culture</h2>
        <p>
          Plongez dans le monde francophone : traditions, fêtes, géographie, cuisine et faits intéressants
          sur les pays francophones pour enrichir votre apprentissage.
        </p>
      </section>
    </main>
  )
  // const [movies, setMovies] = useState([])
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   async function fetchMovies() {
  //     try {
  //       setLoading(true);
  //       setError(false);
  //       const data = await getMovies()
  //       setMovies(data)
  //     } catch (error) {
  //       toast.error("Please, try to reload this page!")
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchMovies()
  // }, [])

  // return (
  //   <div className={css.container}>
  //     <h2 className={css.title}>Trending today</h2>
  //     {loading && <Loader />}
  //     {error && <ErrorMessage/>}
  //     {movies.length > 0 && <MovieList movies={movies}/> }
  //     <Toaster position="top-right"/>
  //   </div>
    
  // )
  
}