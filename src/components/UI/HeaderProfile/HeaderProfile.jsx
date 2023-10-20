import React from 'react'

import styles from './HeaderProfile.module.scss'

function HeaderProfile({avatarSrc='https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg', name='Ramona F.', lvl=12, colors}) {
  return (
    <div className={styles.headerProfile}>

        <div className={styles.avatarWrapper} >
            <img src={avatarSrc} alt={name} />
        </div>

        <div className={styles.infoPart}>
            <p className={styles.name} style={{color: colors.textColor}}>{name}</p>
            <p className={styles.lvl}>Level {lvl}</p>
        </div>

    </div>
  )
}

export default HeaderProfile