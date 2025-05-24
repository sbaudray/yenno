import type { Todo } from './todos.model'

interface Props {
  todo: Todo
}

function TodoItem({ todo }: Props) {
  return <li>{todo.content}</li>
}

export { TodoItem }
