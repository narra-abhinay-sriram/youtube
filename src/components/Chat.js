import React from 'react'

const Chat = ({name,comment}) => {
  return (
    <div className='flex items-center '>
      <img className='h-6'
      alt='icon'src='https://imgs.search.brave.com/pZ2DKWjtw7hzsB-caM9l5n5xAr6aaH4tXxJAIMSHK5s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk4LzcyLzQz/LzM2MF9GXzQ5ODcy/NDMyM19Gb25BeThM/WVlmRDFCVUMwYmNL/NTZhb1l3dUxISjJH/ZS5qcGc'/>
      <span className='font-bold m-1'>{name}</span>
      <p className='break-all '>{comment}</p>
    </div>
  )
}

export default Chat
