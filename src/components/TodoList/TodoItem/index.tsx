import { Trash } from 'phosphor-react'
import styles from './styles.module.css'

type TodoItemProps = any

export const TodoItem = ({}: TodoItemProps) => {
  return (
    <li className={styles.item}>
      <button type='button' className={styles.checkbox}></button>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button type='button' className={styles.trash}>
        <Trash size={20} />
      </button>
    </li>
  )
}
