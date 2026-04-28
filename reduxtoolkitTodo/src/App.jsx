import { useState } from 'react'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Learn about Redux Toolkit</h1>
        <AddTodos />
        <Todos />
      </div>
    </div>
  )
}

export default App
