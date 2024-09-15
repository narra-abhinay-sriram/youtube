import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { onloadingvid } from "../utils/appslice"
import Chatbox from "./Chatbox"

const Watch = () => {
const [searchparam]=useSearchParams()
const dispatch=useDispatch()
//console.log()
useEffect(()=>{
    dispatch(onloadingvid())
},)

  return (
    
    <div className="mt-20">
      <div>
      <iframe
       width="900"
        height="455" 
        src={"https://www.youtube.com/embed/"+searchparam.get("v") }
        title="YouTube video player"
         
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           referrerpolicy="strict-origin-when-cross-origin" 
           allowFullscreen></iframe></div>

           <div>
            <Chatbox/>
           </div>
    </div>
  )
}

export default Watch
