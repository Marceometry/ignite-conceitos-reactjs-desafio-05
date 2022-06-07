import styles from './app.module.css'
import { Form, Header, TodoList } from './components'
import { TodoContextProvider } from './contexts'

export const App = () => {
  return (
    <TodoContextProvider>
      <div className={styles.app}>
        <Header />

        <main className={styles.main}>
          <Form />
          <TodoList />
        </main>
      </div>
    </TodoContextProvider>
  )
}
