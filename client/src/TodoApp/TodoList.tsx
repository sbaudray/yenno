import { TodoItem } from './TodoItem'
import { useTodos } from './todos.hook'

function TodoList() {
  const { todos } = useTodos()

  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.content} todo={todo} />
      })}
    </ul>
  )
}

export { TodoList }
