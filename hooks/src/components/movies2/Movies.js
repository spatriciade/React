import { useState } from "react";
import "./Movies.css";
import movies from "../../db2/movies.json";
import MoviesWrapper from "./MoviesWrapper";
import MoviesMain from "./MoviesMain";
import Cards from "./Cards";
import MoviesAction from "./MoviesActions"

function Movies() {
  const [moviesList, setMoviesList] = useState(movies);
  const [fadeIn, setFadeIn] = useState(true);
  const changeVisibility = (toShow) => {
    setFadeIn(false);
    setTimeout(() => {
      setFadeIn(true);
      setMoviesList(toShow);
    }, 500);
  };

  const filterComedy = () => {
    let comedyMovies = movies.filter((movie) => {
      return movie.genre.includes("Comedy");
    });
    changeVisibility(comedyMovies);
  };
  const filterDrama = () => {
    let dramaMovies = movies.filter((movie) => {
      return movie.genre.includes("Drama");
    });
    changeVisibility(dramaMovies);
  };
  const noFilter = () => {
    changeVisibility(movies);
  };

  return (
    <MoviesMain>
      <MoviesAction onFilterComedy={filterComedy} onFilterDrama={filterDrama} onNoFilter={noFilter} />
        <MoviesWrapper>
          {moviesList.map((movie) => (
            <Cards key={movie.id} movie={movie} fadeIn={fadeIn} />
          ))}
        </MoviesWrapper>
    </MoviesMain>
  );
}

export default Movies;

// <ul>
//   {movies.map((film) => (
//     <li>
//       <strong>Title: </strong>
//       {film.title},<strong>Genre: </strong>
//       {film.genre}
//     </li>
//   ))}
// </ul>