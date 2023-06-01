import { PlusCircle } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" />
      <form className={styles.taskForm}>
        <input placeholder='Adicione uma nova tarefa'>
        </input>
        <button>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </header>
  )
}