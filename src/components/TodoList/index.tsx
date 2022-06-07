import clipboardImg from '../../assets/clipboard.png'
import { TodoItem } from './TodoItem'
import styles from './styles.module.css'
import { useTodoContext } from '../../contexts'

export const TodoList = () => {
  const { todoList, finishedTodoCount } = useTodoContext()

  return (
    <div className={styles.todoList}>
      <header>
        <div>
          <strong>Tarefas criadas</strong>
          <span>{todoList.length}</span>
        </div>

        <div>
          <strong className={styles.finished}>Concluídas</strong>
          <span>
            {finishedTodoCount} {!!todoList.length && `de ${todoList.length}`}
          </span>
        </div>
      </header>

      {!todoList.length ? (
        <div className={styles.emptyList}>
          <img src={clipboardImg} alt='Ícone de tarefa' />
          <div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      ) : (
        <ul>
          {todoList.map((item) => (
            <TodoItem {...item} />
          ))}
        </ul>
      )}
    </div>
  )
}
