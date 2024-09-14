import React from 'react'

const Sidebar = () => {
  return (
    <div className='ml-2 mt-2 border border-gray-500 w-[150px] py-2 text-md px-1 shadow-md shadow-gray-300 rounded-md'>
        
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>

      </ul>
      <hr></hr>
      <h2 className='font-semibold text-lg mt-2'>You-</h2>
      <ul>
        <li>History</li>
        <li>playlists</li>
        <li>watch later</li>
        <li>Liked Videos</li>
      </ul>
      <hr></hr>
      <h2 className='font-semibold text-lg mt-2'>Explore</h2>
      <ul>
        <li>trending</li>
        <li>shopping</li>
        <li>music</li>
      </ul>
    </div>
  )
}

export default Sidebar
