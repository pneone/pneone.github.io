import React from 'react'
import styles from './Logo.module.scss'

export default function Logo() {
  return (
    <div className={styles.logo}>
        <a href="/">
            <img src="./assets/images/mainCharacter.svg" alt="mainCharacter" />
        </a>
    </div>
  )
}
