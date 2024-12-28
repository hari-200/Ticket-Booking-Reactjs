import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  
  const movies = [
    { id: 1, title: "Movie 1", image: "path/to/movie1.jpg" },
    { id: 2, title: "Movie 2", image: "path/to/movie2.jpg" },
    { id: 3, title: "Movie 3", image: "path/to/movie3.jpg" },
  ];

  const theatres = [
    { id: 1, name: "Theatre 1" },
    { id: 2, name: "Theatre 2" },
    { id: 3, name: "Theatre 3" },
  ];

  return (
    <div>
      <h2>Search Results for: {query}</h2>
      <div>
        <h3>Movies</h3>
        <div className="movie-list">
          {movies.map(movie => (
            <div key={movie.id} className="movie-item">
              <img src={movie.image} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Theatres</h3>
        <ul>
          {theatres.map(theatre => (
            <li key={theatre.id}>{theatre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchResults;
