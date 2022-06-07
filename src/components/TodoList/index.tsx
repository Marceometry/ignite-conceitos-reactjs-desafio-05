import clipboardImg from '../../assets/clipboard.png'
import { TodoItem } from './TodoItem'
import styles from './styles.module.css'

export const TodoList = () => {
  const list = ['', '', '']

  return (
    <div className={styles.todoList}>
      <header>
        <div>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>

        <div>
          <strong className={styles.finished}>Concluídas</strong>
          <span>0 {!!list.length && `de ${list.length}`}</span>
        </div>
      </header>

      {!list.length ? (
        <div className={styles.emptyList}>
          <img src={clipboardImg} alt='Ícone de tarefa' />
          <div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      ) : (
        <ul>
          {list.map((item) => (
            <TodoItem {...item} />
          ))}
        </ul>
      )}
    </div>
  )
}
