import React from 'react'
import styles from './deleteToast.module.css'

function DeleteToast() {
  return (
    <div className={styles.deleteToastContainer}>
      <p>La pelicula ha sido borrada</p>
    </div>
  )
}

export default DeleteToast
