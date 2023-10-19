import React from 'react'
import styles from './Button.module.scss'


function Button({data, bgColor, contentType}) {

  let inlineStyles = {
    background: bgColor,
  };
  
  if(contentType == 'icon' ){
    inlineStyles.fontSize = '25px';
  }

  return (
    <a href='/' style={inlineStyles} className={styles.button}>{contentType == 'text' ? data : <i className={data}></i>}</a>
  )
}

export default Button