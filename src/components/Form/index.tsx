import { useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import styles from './styles.module.css'

export const Form = () => {
  const [newTodo, setNewTodo] = useState('')

  const isFormInvalid = !newTodo.length

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isFormInvalid) return
  }

  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <input
        required
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder='Adicione uma nova tarefa'
      />
      <button type='submit' disabled={isFormInvalid}>
        Criar <PlusCircle size={16} />
      </button>
    </form>
  )
}
