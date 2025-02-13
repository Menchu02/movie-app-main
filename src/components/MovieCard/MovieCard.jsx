import React from 'react'
import styles from './movieCard.module.css'
import { TiDeleteOutline } from 'react-icons/ti'
import { CgEditMarkup } from 'react-icons/cg'
import { BsFillHeartFill, BsHeart } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function MovieCard({ item, deleteById, handlerFavorite }) {
  let handlerDelete = () => {
    deleteById(item.id)
  }
  return (
    <div className={styles.cardContainer}>
      <div className={styles.movieImgContainer}>
        <Link to={`/movies/${item.id}`}>
          <img src={item.img} className={styles.cardImage} />
        </Link>
      </div>
      {/* <p className={styles.cardTitle}>{item.name}</p>
        <p>{item.id}</p> */}
      <TiDeleteOutline onClick={handlerDelete} className={styles.deleteIcon} />
      <Link to={`/edit/${item.id}`}>
        <CgEditMarkup className={styles.editIcon} />
      </Link>
      {item.isFavorite ? (
        <BsFillHeartFill
          onClick={() => handlerFavorite(item)}
          className={styles.favoriteIcon}
        />
      ) : (
        <BsHeart
          onClick={() => handlerFavorite(item)}
          className={styles.favoriteIcon}
        />
      )}
    </div>
  )
}
