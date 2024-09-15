import { useDispatch, useSelector } from "react-redux"
import Chat from "./Chat"
import { useEffect, useState } from "react"
import { addlive } from "../utils/appslice"
import { generate, sentence } from "../utils/constants"

const Chatbox = () => {
  const [livechat,setlivechat]=useState()
const dispatch=useDispatch()
const data=useSelector(store=>store.app.livedata)
useEffect(()=>{

const i=setInterval(()=>{
//fetch the api
 dispatch(addlive(
  {
    name:generate(),
    comment:sentence()
  }
 ))

},2000)
return ()=>clearInterval(i)
},[])

    
  return (<>
    <div className="w-[340px] h-[350px] border border-black bg-slate-200 overflow-y-scroll  flex flex-col-reverse   scrollbar-hidden">
     {
     data.map(m=><Chat name={m.name} comment={m.comment}/>)
     }
    </div>
    <form onSubmit={(e)=>{e.preventDefault()}}>
      <input 
     value={livechat} onChange={(e)=>{setlivechat(e.target.value)}}
       className="p-2 w-60 rounded-lg border border-black mt-1"
      type="text"placeholder="enter the chat"/>
      <button onClick={()=>{
        dispatch(addlive(
          {
            name:"abhinay",
            comment:livechat
          }
         ))
      }}
       className="border rounded-lg mt-1 border-black p-2 bg-gray-300">Enter</button>
    </form>
    </>
  )
}

export default Chatbox
