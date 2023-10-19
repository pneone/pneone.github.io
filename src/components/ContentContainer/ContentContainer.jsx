import React from 'react'
import styles from './ContentContainer.module.scss'

export default function ContentContainer({children}) {
  return (
    <section className={styles.appContent}>{children}</section>
  )
}
