import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

import logo from '../../assets/logo.svg'
import styles from './Header.module.css'

interface Props {
  onAddTask: (taskTitle: string) => void
}

export default function Header({ onAddTask }: Props) {

  const [title, setTitle] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" />
      <form className={styles.taskForm} onSubmit={handleSubmit}>
        <input
          placeholder='Adicione uma nova tarefa'
          onChange={onChangeTitle}
          value={title}
        >
        </input>
        <button>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </header>
  )
}