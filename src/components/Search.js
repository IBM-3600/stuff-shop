import React from 'react'
import styles from '../styles/global.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
function Search() {
  return (
    <div>
      <span>
        <input type='text' className={styles.searchInput}/>
        <button className={styles.searchIconBtn}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon}/>
        </button>
      </span>
    </div>
  )
}

export default Search
