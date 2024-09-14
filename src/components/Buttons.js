import React from 'react'

const Buttons = () => {
    const arr=["All","Music","live","cricket","Telugu cinema","olympics","Festivals","war","Russia","USA","masters in australia","technology"]
  return (
    <div>
        {arr.map(a=>(<button className='text-sm bg-gray-500 px-4 rounded-lg py-2 text-white mr-3 mt-2'>{a}</button>))}
    
    </div>
  )
}

export default Buttons
