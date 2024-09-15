import React from 'react'

const Buttons = () => {
    const arr=["All","Music","live","cricket","Telugu cinema","olympics","Festivals","war","Russia","USA","masters in australia","technology"]
  return (
    <div className='  mb-'>
        {arr.map(a=>(<button key={a}className='text-sm bg-gray-400 px-4 rounded-lg py-2 text-black mr-3 mt-2'>{a}</button>))}
    
    </div>
  )
}

export default Buttons
