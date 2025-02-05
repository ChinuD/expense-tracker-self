import React,{useState} from 'react'
import Add_Expense from './Add_Expense'

function Expense_Tracker() {

    const [expenses,setExpenses] = useState([])
    const handleAddExpense = (expense)=>(
        setExpenses((prevExpense)=>[...prevExpense,expense])
    )
    const [totalExpense,setTotalExpense] = useState()
    console.log(expenses)

  return (
    <div className='bg-white m-4 p-2 rounded-lg text-center shadow-2xl'>
        <h1 className='text-[28px]'>Expense Tracker</h1>
        <Add_Expense onAddExpense={handleAddExpense} />
        <div className="bg-white rounded-2xl ">
          <table className='w-[80%] border rounded-sm mb-4 mx-auto'>
            {expenses.map((expense,index)=>(
              <tr className='border rounded-sm' key={index}>
                <th className='border '>{expense.amount}</th>
                <td className='border  px-2 text-start '>{expense.tag}</td>
                <td className='border-none'>
                <button className='bg-amber-50 ' onClick={() => setExpenses(expenses.filter((_, i) => i !== index))}>
                  delete</button>
                </td>
              </tr>
            ))}
          </table>
        {expenses.length>0 && 
        <p className='border border-black w-[200px] p-2 m-auto rounded-md text-amber-400'>
          Total Expense : {expenses.reduce((total,expense)=>total+Number(expense.amount),0)}
        </p>}
        </div>
    </div>
  )
}

export default Expense_Tracker