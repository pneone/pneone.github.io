import React from 'react'
import styles from './TasksCard.module.scss'
import Button from '../UI/Button/Button'

function TasksCard({activeColor}) {

    const task = {
        title: 'Перегляд фільмів',
        progress: '4/6год переглянуто',
        icon: 'fa-solid fa-trophy'
    }
    
    return (
        <div className={styles.taskCard} style={{background: activeColor.accentColor}} >
            <div style={{background: activeColor.btnColorSidebar}} className={styles.icon}><i className={task.icon}></i></div>

            <p style={{color: activeColor.textColor}} className={styles.taskTitle}>{task.title && task.title}</p>
            <p className={styles.taskProgress}>{task.progress && task.progress}</p>

            <Button contentType='text' data='Переглянути завдання' bgColor={activeColor.btnColorSidebar}/>
        </div>
    )
}

export default TasksCard