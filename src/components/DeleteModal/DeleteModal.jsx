import React from 'react'
import styles from './deleteModal.module.css'

function DeleteModal({deleteById, idToDelete, showDeleteModal, hideDeleteModal, isDeleteMode}) {
  return (
    <div className={ isDeleteMode? styles.DeleteModalContainer : styles.DeleteModalContainerHidden }>
      <div className={ styles.ModalTextContainer}>
        <h4 className= { styles.ModalText }>Está seguro que quiere eliminar la película?</h4>
      </div>
      <div className={styles.ModalButtons}>
        <button onClick={()=>hideDeleteModal()} className={ styles.cancelButton }>Cancelar</button>
        <button onClick={()=>showDeleteModal(idToDelete)} className={ styles.confirmButton }>Confirmar</button>
      </div>
    </div>
  )
}

export default DeleteModal
