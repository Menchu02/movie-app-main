import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import movieService from "../../apiService/movieService";
import styles from "./formPages.module.css";

const initMovie = {
  name: "",
  img: "https://pharmamex.com/images/default.png",
  isFavorite: false,
};

export default function FormPages() {
  let { id } = useParams();
  const [isEditMode, setIsEditMode] = useState(false);
  const [newMovie, setNewMovie] = useState(initMovie);
  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      movieService.getById(id).then((res) => {
        setNewMovie(res);
        setIsEditMode(true);
      });
    }
  }, [id]);

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    newMovie[name] = value;
    setNewMovie({ ...newMovie });
    console.log(newMovie);
  };

  // const handleTitleOnChange = (e) => {
  //   console.log(e.target.name);
  //   const temp = { ...newMovie, name: e.target.value };
  //   setNewMovie(temp);
  // };

  // const handleImgOnChange = (e) => {
  //   console.log(e.target.value);
  //   const temp = { ...newMovie, img: e.target.value };
  //   setNewMovie(temp);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await movieService.create(newMovie);
    navigator("/");
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    await movieService.editById(id, newMovie);
    navigator("/");
    console.log(e);
  };

  return (
    <div>
      <form
        className={styles.form}
        onSubmit={isEditMode ? handleEdit : handleSubmit}
      >
        <div className={styles.formImgContainer}>
          <img
            className={styles.formImg}
            src={newMovie.img}
            alt={newMovie.name}
          />
        </div>
        <section className={styles.textInputsContainer}>
          <textarea
            value={newMovie.img}
            onChange={handleOnChange}
            className={styles.urlInput}
            type="textarea"
            name="img"
            placeholder="introduce url"
          />
          <input
            value={newMovie.name}
            onChange={handleOnChange}
            className={styles.nameInput}
            type="text"
            name="name"
            placeholder="movie name"
          />

          <input
            value={newMovie.director}
            onChange={handleOnChange}
            className={styles.nameInput}
            type="text"
            name="director"
            placeholder="director"
          />
          <input
            value={newMovie.year}
            onChange={handleOnChange}
            className={styles.nameInput}
            type="text"
            name="year"
            placeholder="year"
          />

          <input
            value={newMovie.genre}
            onChange={handleOnChange}
            className={styles.nameInput}
            type="text"
            name="genre"
            placeholder="genre"
          />
          <textarea
            value={newMovie.sinopsis}
            onChange={handleOnChange}
            className={styles.sinopsisInput}
            type="textarea"
            name="sinopsis"
            placeholder="sinopsis"
          />
          {/* <input
            value={newMovie.sinopsis}
            onChange={handleOnChange}
            className={styles.nameInput}
            type='text'
            name='sinopsis'
            placeholder='Sinopsis'
          /> */}

          <button className={styles.submitButton} type="submit">
            {isEditMode ? "Editar" : "Crear"}
          </button>
        </section>
      </form>
    </div>
  );
}
// import React from "react";
// import styles from "./formPages.module.css";

// export default function FormPages() {
//   return (
//     <div>
//       <form className={styles.form}>
//         <div className={styles.formImgContainer}>
//           <img
//             className={styles.formImg}
//             src="https://pharmamex.com/images/default.png"
//             alt="movie"
//           />
//         </div>
//         <section className={styles.textInputsContainer}>
//           <input
//             className={styles.nameInput}
//             type="text"
//             name="title"
//             placeholder="movie name"
//           />
//           <textarea
//             className={styles.urlInput}
//             type="textarea"
//             name="img"
//             placeholder="introduce url"
//           />
//           <button className={styles.submitButton} type="submit">
//             Crear
//           </button>
//         </section>
//       </form>
//     </div>
//   );
// }
