import { useEffect, useState } from 'react'
import { readTodos } from './todos.client'
import type { TodoList } from './todos.model'

function useTodos() {
  const [todos, setTodos] = useState<TodoList>([])

  useEffect(() => {
    readTodos().then((todos) => setTodos(todos))
  })

  return {
    todos,
  }
}

export { useTodos }
