import styles from './app.module.css'
import { Header, Main } from './components'

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  )
}
