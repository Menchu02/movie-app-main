import React from 'react';
import styles from './navbar.module.css';
import { CgMenuRound } from 'react-icons/cg';
import logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const handlerHamburgerMenu = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={styles.headerContainer}>
      <nav className={styles.navContainer}>
        <div className={styles.navLogoContainer}>
          <Link to={'/'}>
            <img className={styles.navLogo} src={logo} />
          </Link>
          <h1 className={styles.navTitle}>MovieApp</h1>
        </div>

        <ul
          className={
            isVisible ? styles.navLinksVisible : styles.navLinksInvisible
          }
        >
          <li>
            <Link id={styles.homeLink} to={'/'}>
              Inicio
            </Link>
          </li>
          <li>
            <Link id={styles.formLink} to={'movies/form/'}>
              Crear
            </Link>
          </li>
          <li>
            <Link id={styles.favoriteLink} to={'favoriteMovies/'}>
              Mis Favoritas
            </Link>
          </li>
        </ul>
        <CgMenuRound
          onClick={handlerHamburgerMenu}
          className={styles.navMenu}
        />
      </nav>
    </div>
  );
}

// import React from 'react';
// import styles from './navbar.module.css';
// import { CgMenuRound } from 'react-icons/cg';
// import logo from '../../assets/Logo.png';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   return (
//     <div>
//       <nav className={styles.navContainer}>
//         <div className={styles.navLogoContainer}>
//           <img className={styles.navLogo} src={logo} />
//         </div>
//         <h1 className={styles.navTitle}>MovieApp</h1>
//         <Link to={'movies/form/'}>Crear</Link>
//         <CgMenuRound className={styles.navMenu} />
//       </nav>
//     </div>
//   );
// }
