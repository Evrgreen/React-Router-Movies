import React from 'react';
import {Link} from "react-router-dom";


export default function MovieCard (movie) {
  console.log(movie)
  const { title, director, metascore, stars, id } = movie.data;
  return (
    <Link to={`movies/${id}`} style={{ textDecoration: 'none' }}>
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
    </Link>
  );
}
