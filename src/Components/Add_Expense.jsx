import React, {useState} from 'react'


function Add_Expense({onAddExpense}) {

    const [amount, setAmount] = useState();
    const [tag, setTag] = useState('')

    function handleSubmit(){
        if(!amount || !tag) return;

        onAddExpense({amount,tag})
        setAmount('');
        setTag('')
    }

    console.log(amount)
    console.log(tag)
    

  return (
    <div className='flex flex-col items-center justify-center border-black'>
        <div className="flex flex-row">
            <input type="number" placeholder='Amount' value={amount} onChange={(e)=> setAmount(e.target.value)} className='bg-white color-white outline-none m-4 p-2 rounded-md' />
            <input type="text" placeholder='Tag' value={tag} onChange={(e)=> setTag(e.target.value)} className='bg-white color-white outline-none m-4 p-2 rounded-md' />
        </div>

        <div className="">
            <button className='bg-white m-4 p-2 rounded-sm' onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Add_Expense