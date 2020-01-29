import React, { useState, useEffect } from 'react';
import MovieCard from "./MovieCard";
import axios from 'axios';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  console.log(movie)
 
  useEffect(() => {
    console.log()
    const id = props.match.params.movieID;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  return(
    <>
    <MovieCard data={movie}/>
      <div className="save-button">Save</div>
    </>
  )
}

export default Movie;
