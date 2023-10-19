import React from 'react'

import styles from './Theme.module.scss'

export default function ThemeDark({isActive}) {
  return (
    <div 
      style={{background: isActive ? '#1A1B20' : '#F6F8FF'}}
      className={` ${ styles.themeColorActiveLong}`}>
    </div>
  )
}  