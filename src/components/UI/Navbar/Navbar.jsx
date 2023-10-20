import React, { useState } from 'react'
import styles from './Navbar.module.scss'
import NavbarLink from './NavbarLink/NavbarLink'

export default function Navbar({navTitle, navLinks, activeColor}) {

  
  return (
    <nav className={styles.navbar}>

        {navTitle && <p className={styles.navbarTitle}>{navTitle}</p>}

        {navLinks && 
          <ul className={styles.navbarLinks}>

            {navLinks.map((item, index) => <NavbarLink key={index} activeColor={activeColor} item={item} styles={styles}/>)}

          </ul>}

    </nav>
  )
}
