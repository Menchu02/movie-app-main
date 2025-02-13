import React, { useState, useEffect } from "react";
import movieService from "../../apiService/movieService";
import MovieCard from "../../components/MovieCard/MovieCard";
import film_spinner from "../../assets/film_spinner.png";
import styles from "../../components/movieList/movieList.module.css";

export default function FavoriteMovies() {
  const [favorite, setFavorite] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    movieService.getFavorite().then((data) => {
      setFavorite(data);
      setIsLoading(false);
    });
  }, []);
  const deleteById = async (idToDelete) => {
    await movieService.deleteById(idToDelete);
    let newData = favorite.filter((movie) => movie.id !== idToDelete);
    setFavorite(newData);
  };
  let idToDelete = "";
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const showDeleteModal = (id) => {
    setIsDeleteMode(true);
    idToDelete = id;
    console.log(idToDelete);
  };

  const handlerFavorite = (movie) => {
    let editMovie = { ...movie, isFavorite: !movie.isFavorite };
    let newState = favorite.map((item) =>
      item.id === editMovie.id ? editMovie : item
    );
    movieService
      .toggleFavorite(movie.id, { isFavorite: !movie.isFavorite })
      .then(() => setFavorite(newState))
      .catch((error) => console.log(error));
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
          ""
        )}
      </div>
      <div className={styles.movieList}>
        {favorite.map((item) => (
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
