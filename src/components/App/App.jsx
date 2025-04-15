import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import css from "./App.module.css"

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"))
const GrammairePage = lazy(() => import("../../pages/GrammairePage/GrammairePage"))
const EcouterPage = lazy(() => import("../../pages/EcouterPage/EcouterPage"))
const CulturePage = lazy(() => import("../../pages/CulturePage/CulturePage"))
const TheoriePage = lazy(() => import("../../pages/TheoriePage/TheoriePage"))
const TheorieId = lazy(() => import("../TheorieId/TheorieId"))
const ExercicesPage = lazy(() => import("../../pages/ExercicesPage/ExercicesPage"))
const ExerciseId = lazy(() => import("../ExerciseId/ExerciseId"))
const JouerPage = lazy(() => import("../../pages/JouerPage/JouerPage"))
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"))

export default function App() {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={<p>Page loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/grammaire" element={<GrammairePage />}>
            <Route path="theorie" element={<TheoriePage />}>
              <Route path=":theorieId" element={<TheorieId />} />
            </Route>

            <Route path="exercices" element={<ExercicesPage />}>
              <Route path=":exerciseId" element={<ExerciseId />} />
            </Route>
          </Route>

          <Route path="/ecouter" element={<EcouterPage />} />
          <Route path="/culture" element={<CulturePage />} />
          <Route path="/jouer" element={<JouerPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}