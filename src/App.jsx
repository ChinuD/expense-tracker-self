import { useState } from 'react'
import './App.css'
import Add_Expense from './Components/Add_Expense'
import Expense_Tracker from './Components/Expense_Tracker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-purple-300 w-screen h-screen flex items-center justify-center flex-col">
        <Expense_Tracker/>
      </div>
    </>
  )
}

export default App
