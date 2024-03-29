import React from 'react'
import styles from '../styles/global.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Search from './Search'
function Head() {
  return (
    <div className={styles.head}>Head
    <Search/>
    <button className={styles.menu}>
    <FontAwesomeIcon icon={faBars} />
    </button>
    </div>
    
  )
}

export default Head