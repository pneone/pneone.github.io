import React from 'react'
import styles from './Header.module.scss'
import Search from '../Search/Search'
import HeaderProfile from '../HeaderProfile/HeaderProfile'

export default function Header({colors}) {
  return (
    <header className={styles.header}>
      <Search placeholder='Search' icon='fa-solid fa-magnifying-glass'/>
      <HeaderProfile colors={colors}/>
    </header>
  )
}
