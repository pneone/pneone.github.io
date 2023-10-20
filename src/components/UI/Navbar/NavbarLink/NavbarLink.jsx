import React, { useState } from 'react'

export default function NavbarLink({item, styles, activeColor}) {

    const [isActive, setIsActive ] = useState(false);

    let stylesInline = {};

    if(isActive){
        stylesInline = {color: activeColor.textColor};
    }

    return (
        <li 
        style={stylesInline}
        className={`${styles.navbarLink} ${isActive && styles.activeTab}`}>
            <a href={item.link} onClick={(e) => {
                e.preventDefault();
                setIsActive((isActive) => !isActive);
            }}>
                <i className={item.icon}></i>
                <span >{item.title}</span>
            </a>
        </li>
    )
}
