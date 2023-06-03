import { ITask } from '../../App'
import Task from '../Task/Task'
import styles from './Tasks.module.css'
import { ClipboardText } from 'phosphor-react'

interface Props {
  tasks: ITask[],
  onDelete: (taskId: string) => void,
  onComplete: (taskId: string) => void,
}

export default function Tasks({ tasks, onDelete, onComplete }: Props) {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <h2>Tarefas criadas</h2>
          <span>{tasks.length}</span>
        </div>
        <div>
          <h2 className={styles.textPurple}>Concluídas</h2>
          <span>{tasks.filter((task) => task.isCompleted).length}</span>
        </div>
      </header>
      <main className={styles.taskList}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.emptyTasks}>
            <ClipboardText size={56} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </main>
    </section>
  )
}