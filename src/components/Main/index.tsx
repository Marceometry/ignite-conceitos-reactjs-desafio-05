import { Form, TodoList } from '..'
import styles from './styles.module.css'

export const Main = () => {
  return (
    <main className={styles.main}>
      <Form />
      <TodoList />
    </main>
  )
}
