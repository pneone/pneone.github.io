import React from 'react'
import styles from './TasksCard.module.scss'
import Button from '../UI/Button/Button'

function TasksCard() {

    const task = {
        title: 'Перегляд фільмів',
        progress: '4/6год переглянуто',
        icon: 'fa-solid fa-trophy'
    }

    return (
        <div className={styles.taskCard}>
            <div className={styles.icon}><i className={task.icon}></i></div>

            <p className={styles.taskTitle}>{task.title && task.title}</p>
            <p className={styles.taskProgress}>{task.progress && task.progress}</p>

            <Button contentType='text' data='Переглянути завдання' bgColor='#829BB0'/>
        </div>
    )
}

export default TasksCard