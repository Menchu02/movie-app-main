import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieService from '../../apiService/movieService';
import styles from './movieDetails.module.css';

export default function MovieDetails() {
  let { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    movieService.getById(id).then((res) => setMovie(res));
  }, [id]);

  return (
    <div className={styles.movieContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.imgDetails} src={movie.img} />
      </div>
      <div className={styles.movieInfo}>
        <h2 className={styles.movieName}>{movie.name}</h2>
        <h3 className={styles.movieDirector}>Director: {movie.director}</h3>
        <h3 className={styles.movieYear}>Año: {movie.year}</h3>
        <h4 className={styles.movieGenre}>Género: {movie.genre}</h4>
        <h3>Sinopsis:</h3>
        <p className={styles.movieSinopsis}>{movie.sinopsis}</p>
      </div>
    </div>
  );
}
