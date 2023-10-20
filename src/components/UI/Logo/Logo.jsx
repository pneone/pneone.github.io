import React from 'react'
import styles from './Logo.module.scss'

export default function Logo({logoSrc}) {
  return (
    <div className={styles.logo}>
        <a href="/">
            <img src={logoSrc} alt="mainCharacter" />
        </a>
    </div>
  )
}
