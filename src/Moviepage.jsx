import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const movieData = {
  chennai: [
    { id: 1, title: "Movie 1", image: "movie1.jpg", description: "Action Movie" },
    { id: 2, title: "Movie 2", image: "movie2.jpg", description: "Comedy Movie" },
    { id: 3, title: "Movie 3", image: "movie3.jpg", description: "Romantic Movie" },
  ],
  bangalore: [
    { id: 4, title: "Movie 4", image: "movie4.jpg", description: "Thriller Movie" },
    { id: 5, title: "Movie 5", image: "movie5.jpg", description: "Horror Movie" },
  ],
};

function MoviePage() {
  const { city } = useParams();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    if (movieData[city]) {
      setMovies(movieData[city]);
    } else {
      setMovies([]);
    }
  }, [city]);

  return (
    <div>
      <h1>Movies in {city}</h1>
      <div className="movie-list">
        {movies.length === 0 ? (
          <p>No movies available in this city.</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card" onClick={() => navigate(`/movie/${movie.id}`)}>
              <img src={movie.image} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MoviePage;
