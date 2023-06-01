import Task from '../Task/Task'
import styles from './Tasks.module.css'

export default function Tasks() {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <h2>Tarefas criadas</h2>
          <span>0</span>
        </div>
        <div>
          <h2 className={styles.textPurple}>Concluídas</h2>
          <span>0</span>
        </div>
      </header>
      <main className={styles.taskList}>
        <Task />
        <Task />
      </main>
    </section>
  )
}