import React from 'react'
import useYoutube from './useYoutube'
import { useSelector } from 'react-redux'
import VidCard from './VidCard'
import {Link } from "react-router-dom"
const VideoCards = () => {
    const tubedata=useSelector(store=>store.app.youtubevids)
    useYoutube()
    if(!tubedata)return 
    console.log(tubedata)
    
  return (
    <div className='flex flex-wrap'>

        {tubedata.map(video=>(<Link  key={video.id} to={"/watch?v="+video.id}  ><VidCard  snippet={video.snippet} statistics={video.statistics}/></Link>))}

    </div>
  )
}

export default VideoCards
