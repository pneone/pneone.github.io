import React from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import styles from './ThemeSwitcher.module.scss'

export default function ThemeSwitcher({isDark, testF}) {
    const [isDarkMode, setDarkMode] = React.useState(isDark);

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
        testF(!isDarkMode);
    };


    return (
        <div className={styles.themeSwitcher}>
            <DarkModeSwitch
                style={{ width: '2rem', height: '2rem' }}
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={120}
                moonColor='#F6F8FF'
                sunColor='#304455'

            />
        </div>
    )
}
