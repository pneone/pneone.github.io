import React, { useState } from 'react'

export default function NavbarLink({item, styles}) {

    const [isActive, setIsActive ] = useState(false);

    return (
        <li className={`${styles.navbarLink} ${isActive && styles.activeTab}`}>
            <a href={item.link} onClick={(e) => {
                e.preventDefault();
                setIsActive((isActive) => !isActive);
            }}>
                <i className={item.icon}></i>
                <span>{item.title}</span>
            </a>
        </li>
    )
}
