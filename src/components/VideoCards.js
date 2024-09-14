import React from 'react'
import useYoutube from './useYoutube'
import { useSelector } from 'react-redux'
import VidCard from './VidCard'

const VideoCards = () => {
    const tubedata=useSelector(store=>store.app.youtubevids)
    useYoutube()
    if(!tubedata)return 
    console.log(tubedata)
    
  return (
    <div className='flex flex-wrap'>

        {tubedata.map(video=><VidCard key={video.id} snippet={video.snippet} statistics={video.statistics}/>)}
        {tubedata.map(video=><VidCard key={video.id} snippet={video.snippet} statistics={video.statistics}/>)}
        {tubedata.map(video=><VidCard key={video.id} snippet={video.snippet} statistics={video.statistics}/>)}
        {tubedata.map(video=><VidCard key={video.id} snippet={video.snippet} statistics={video.statistics}/>)}

    </div>
  )
}

export default VideoCards
