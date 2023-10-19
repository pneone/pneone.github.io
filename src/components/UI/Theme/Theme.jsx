import React from 'react'

import styles from './Theme.module.scss'

export default function Theme({bgColor, isActive}) {
  return (
    
    <div 
      style={{background: bgColor}}
      className={`${styles.themeColor} ${isActive ? styles.themeColorActive : ''}`}>
    </div>
  )
}  