import React,{useState} from 'react'
import Add_Expense from './Add_Expense'

function Expense_Tracker() {

    const [expenses,setExpenses] = useState([])
    const handleAddExpense = (expense)=>(
        setExpenses((prevExpense)=>[...prevExpense,expense])
    )
    console.log(expenses)


  return (
    <div className='bg-white m-4 p-2 rounded-lg text-center'>
        <h1 className='text-[28px]'>Expense Tracker</h1>
        <Add_Expense onAddExpense={handleAddExpense} />
        <div className="bg-white ">
          <ul className=''>
            {expenses.map((expense,index)=>(
              <li key={index} className=''>
                {expense.amount} - {expense.tag}
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Expense_Tracker