import React from 'react'

const VidCard = ({snippet,statistics}) => {
   // console.log(snippet,statistics)
    const img=snippet.thumbnails.high?.url
    const title=snippet?.title
    const channel=snippet?.channelTitle
    const views=statistics?.viewCount
   

  return (
    <div className='mt-7 m-2 p-1 w-64 borber border-gray-400 shadow-md'>
      <div className=''>
        <img className="w-72 h-48 rounded-md"alt="icon"src={img} />
      </div>
      <p className='w-60 font-semibold text-[13px]'>{title}</p>
      <p className='text-[12px] mt-1 font-bold text-gray-600'>{channel}</p>
      <p className='text-[15px] font-light text-gray-500'>{views}-Views</p>
    </div>
  )
}

export default VidCard
