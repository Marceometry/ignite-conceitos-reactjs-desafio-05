import { useRef, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import { useTodoContext } from '../../contexts'
import styles from './styles.module.css'

export const Form = () => {
  const { addTodo } = useTodoContext()
  const [newTodo, setNewTodo] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const isFormInvalid = !newTodo

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isFormInvalid) return
    addTodo(newTodo)
    setNewTodo('')
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <input
        required
        ref={inputRef}
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
