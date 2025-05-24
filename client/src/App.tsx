import './App.css'
import { lazy } from 'react'

const TodoApp = lazy(() => import('./TodoApp/TodoApp'))

function App() {
  return (
    <>
      <header>Yenno - Todo</header>
      <hr />
      <main>
        <section>
          <TodoApp />
        </section>
      </main>
      <footer>
        <button>+</button>
      </footer>
    </>
  )
}

export default App
