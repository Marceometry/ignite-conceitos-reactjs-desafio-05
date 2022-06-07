import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'

export type Todo = {
  id: number
  done: boolean
  description: string
}

export type TodoContextData = {
  todoList: Todo[]
  setTodoList: (todoList: Todo[]) => void
  addTodo: (description: string) => void
  removeTodo: (id: number) => void
  toggleTodoDone: (id: number) => void
  finishedTodoCount: number
}

export type TodoContextProviderProps = {
  children: ReactNode
}

export const TodoContext = createContext({} as TodoContextData)

export function TodoContextProvider({ children }: TodoContextProviderProps) {
  const [finishedTodoCount, setFinishedTodoCount] = useState(0)
  const [todoList, setTodoList] = useState<Todo[]>([])

  const addTodo = (description: string) => {
    setTodoList((oldState) => {
      const newTodo = {
        description,
        done: false,
        id: oldState.length + 1,
      }
      return [...oldState, newTodo]
    })
  }

  const removeTodo = (id: number) => {
    setTodoList((oldState) => oldState.filter((item) => item.id !== id))
  }

  const toggleTodoDone = (id: number) => {
    setTodoList((oldState) =>
      oldState.map((item) => {
        if (item.id !== id) return item
        return { ...item, done: !item.done }
      })
    )
  }

  useEffect(() => {
    setFinishedTodoCount(todoList.filter((item) => item.done).length)
  }, [todoList])

  return (
    <TodoContext.Provider
      value={{
        todoList,
        setTodoList,
        addTodo,
        removeTodo,
        toggleTodoDone,
        finishedTodoCount,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export const useTodoContext = () => useContext(TodoContext)
