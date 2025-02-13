import React, { useEffect, useState } from 'react';

import styles from './movieList.module.css';
import movieService from '../../apiService/movieService';
import MovieCard from '../MovieCard/MovieCard';
// import DeleteToast from '../DeleteToast/DeleteToast';
// import DeleteModal from '../DeleteModal/DeleteModal';
import SearchBar from '../SearchBar/SearchBar';
import film_spinner from '../../assets/film_spinner.png';

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState('');

  useEffect(() => {
    movieService.getAll(input).then((data) => {
      setMovies(data);
      setIsLoading(false);
    });
  }, [input]);

  const filterByName = (e) => {
    let name = e.target.value;
    console.log(name);
    setInput(name);
  };

  const deleteById = async (idToDelete) => {
    await movieService.deleteById(idToDelete);
    let newData = movies.filter((movie) => movie.id !== idToDelete);
    setMovies(newData);
  };
  let idToDelete = '';
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const showDeleteModal = (id) => {
    setIsDeleteMode(true);
    idToDelete = id;
    console.log(idToDelete);
  };

  // funcion que crea un objeto nuevo (editMovie)que tiene el contenido
  // del objeto original, pero remplaza la propiedad isFavorite por su opuesto
  const handlerFavorite = (movie) => {
    let editMovie = { ...movie, isFavorite: !movie.isFavorite };

    // crea un nuevo estado donde mapea todos los objetos, pero remplazando el objeto a remplazar por editMovie
    let newState = movies.map((item) =>
      item.id === editMovie.id ? editMovie : item
    );

    // llama al método movieService, utilizando el parámetro id, remplazando el valor de isFavorite por su opuesto
    movieService
      .toggleFavorite(movie.id, { isFavorite: !movie.isFavorite })
      .then(() => setMovies(newState))
      .catch((error) => console.log(error));
  };

  const hideDeleteModal = () => {
    setIsDeleteMode(false);
  };

  return (
    <div>
      <div className={styles.spinnerContainer}>
        {isLoading ? (
          <div>
            <img className={styles.spinner} src={film_spinner}></img>
            <p className={styles.loadingText}>Cargando...</p>
          </div>
        ) : (
          ''
        )}
      </div>
      {/* <div className={styles.searchBarContainer}>
        <input
          onChange={filterByName}
          className={styles.searchInput}
          type='text'
          value={input}
        />
        <button className={styles.searchButton}>Buscar</button>
      </div> */}
      <SearchBar filterByName={filterByName} input={input} />
      <div className={styles.movieList}>
        {movies.map((item) => (
          <MovieCard
            key={item.id}
            item={item}
            showDeleteModal={showDeleteModal}
            deleteById={deleteById}
            handlerFavorite={handlerFavorite}
          />
        ))}
      </div>
      <div className={styles.popups}>
        {/* <DeleteModal
          isDeleteMode={isDeleteMode}
          showDeleteModal={showDeleteModal}
          hideDeleteModal={hideDeleteModal}
        ></DeleteModal>
        <DeleteToast></DeleteToast> */}
      </div>
    </div>
  );
}

// <div>
// <Navbar />
// <ul className={styles.movieList}>
//   {movies.map((item) => (
//     <li key={item.id}><MovieCard /></li>

//   ))}
// </ul>

// <Footer />
// </div>
