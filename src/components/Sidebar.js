import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='ml-2 mt-20  mr-3 h-96 px-4 border border-gray-500 w-[150px] py-2 text-md  shadow-md shadow-gray-300 rounded-md'>
        
      <ul>
        <li><Link to={"/"}>Home</Link></li>
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
