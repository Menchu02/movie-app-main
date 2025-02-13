import React from 'react';
import styles from './searchBar.module.css';

export default function SearchBar({ filterByName, input }) {
  return (
    <div className={styles.searchBarContainer}>
      <input
        onChange={filterByName}
        className={styles.searchInput}
        value={input}
      />
    </div>
  );
}
