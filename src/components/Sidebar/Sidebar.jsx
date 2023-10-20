import React from 'react'
import styles from './Sidebar.module.scss'
import Logo from '../UI/Logo/Logo'
import Navbar from '../UI/Navbar/Navbar'
import TasksCard from '../TasksCard/TasksCard';
import ThemeSwitcher from '../UI/ThemeSwitcher/ThemeSwitcher';

export default function Sidebar({ isDark, isDarkSet, colors}) {

  const menuLinks = [
    {
      title: 'Головна',
      link: '/',
      icon: 'fa-solid fa-house'
    },
    {
      title: 'Фільми',
      link: '/films',
      icon: 'fa-solid fa-film'
    },
    {
      title: 'Серіали',
      link: '/series',
      icon: 'fa-solid fa-clapperboard'
    },
    {
      title: 'Улюблені',
      link: '/favorite',
      icon: 'fa-solid fa-star'
    },
    {
      title: 'Досягнення',
      link: '/achievement',
      icon: 'fa-solid fa-list-check'
    }
  ];
  
  const optionsLinks = [
    {
      title: 'Налаштування',
      link: '/settings',
      icon: 'fa-solid fa-gear'
    },
    {
      title: 'Вийти',
      link: '/logout',
      icon: 'fa-solid fa-arrow-right-from-bracket'
    },
  ];

  function test(item){
    isDarkSet(item);
  }

  return (
    <div className={styles.appSidebar} style={{borderRight: `1px ${colors.borderColor} solid`}}>
        <ThemeSwitcher isDark={isDark} testF={test} />
        <Logo logoSrc={colors.logoSrc}/>
        <Navbar activeColor={colors} navTitle={'Меню'} navLinks={menuLinks}/>
        <Navbar activeColor={colors} navTitle={'Опції'}  navLinks={optionsLinks}/>
        <TasksCard activeColor={colors}/>
    </div>
  )
}
