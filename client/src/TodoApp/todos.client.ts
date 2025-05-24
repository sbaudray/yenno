import { fakeTiming } from '../misc'
import type { Todo, TodoList } from './todos.model'

const todos = [{ content: 'Jambon beurre' }]

async function readTodos(): Promise<TodoList> {
  return fakeTiming().then(() => todos)
}

async function addTodo(todo: Todo): Promise<Todo> {
  return fakeTiming().then(() => todo)
}

export { readTodos, addTodo }
