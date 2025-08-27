import React, { useState } from "react";
import moviesData from "../db/movies.json";
import "./Movies.css";

function Movies() {
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  const filterByGenre = (genre) => {
    if (genre === "all") {
      setFilteredMovies(moviesData);
    } else {
      setFilteredMovies(
        moviesData.filter((movie) => movie.genre.includes(genre))
      );
    }
  };

  return (
    <div>
      <h2>Choose your Movie!</h2>
      <div>
        <button className="button button-all" onClick={() => filterByGenre("all")}>
          All
        </button>
        <button className="button button-comedy" onClick={() => filterByGenre("Comedy")}>
          Comedy
        </button>
        <button className="button button-drama" onClick={() => filterByGenre("Drama")}>
          Drama
        </button>
        <button className="button button-action" onClick={() => filterByGenre("Action")}>
          Action
        </button>
        <button className="button button-adventure" onClick={() => filterByGenre("Adventure")}>
          Adventure
        </button>
        <button className="button button-thriller" onClick={() => filterByGenre("Thriller")}>
          Thriller
        </button>
        <button className="button button-documentary" onClick={() => filterByGenre("Documentary")}>
          Documentary
        </button>
        <button className="button button-fantasy" onClick={() => filterByGenre("Fantasy")}>
          Fantasy
        </button>
        <button className="button button-sci-fi" onClick={() => filterByGenre("Sci-Fi")}>
          Sci-Fi
        </button>
      </div>

      <ul className="movie-list">
        {filteredMovies.map((movie) => (
          <li key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <div className="movie-title">{movie.title}</div>
            <div className="movie-genre">{movie.genre}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;


