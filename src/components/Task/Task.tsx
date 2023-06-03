import { ITask } from '../../App'
import styles from './Task.module.css'
import { Trash } from 'phosphor-react'
import VerifyIcon from '../../assets/verify.svg'

interface Props {
  task: ITask,
  onDelete: (taskId: string) => void,
  onComplete: (taskId: string) => void,
}

export default function Task({ task, onDelete, onComplete }: Props) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <img src={VerifyIcon} /> : <div />}
      </button>
      <p className={task.isCompleted ? styles.textCompleted : ''}>{task.title}</p>
      <button
        className={styles.deleteButton}
        onClick={() => onDelete(task.id)}
      >
        <Trash size={24} />
      </button>
    </div>
  )
}