import { Check, Trash } from 'phosphor-react'
import { Todo, useTodoContext } from '../../../contexts'
import styles from './styles.module.css'

type TodoItemProps = Todo

export const TodoItem = ({ id, done, description }: TodoItemProps) => {
  const { toggleTodoDone, removeTodo } = useTodoContext()

  return (
    <li className={styles.item}>
      <button
        type='button'
        className={`${styles.checkbox} ${done && styles.checked}`}
        onClick={() => toggleTodoDone(id)}
      >
        {done && <Check size={12} />}
      </button>

      <p className={done ? styles.done : ''}>{description}</p>

      <button
        type='button'
        className={styles.trash}
        onClick={() => removeTodo(id)}
      >
        <Trash size={20} />
      </button>
    </li>
  )
}
