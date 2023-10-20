import React from 'react'
import styles from './Search.module.scss'

function Search({placeholder, icon}) {
  return (
    <div className={styles.inputWrapper}>
        <i className={icon}></i>
        <input type="text" placeholder={placeholder} />
        <span className={styles.loader}></span>
    </div>
  )
}

export default Search