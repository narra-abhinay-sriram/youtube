import { useDispatch, useSelector,  } from "react-redux"
import { changemenu } from "../utils/appslice"
import { useEffect, useState } from "react"
import { addsearch } from "../utils/searchslice"
const Header = () => {
  const [search,setsearch]=useState("")
  const [suggestion,setsuggestion]=useState([])
  const [showsugg,setshowsugg]=useState(false)
  const cache=useSelector(store=>store.search)
  
  //console.log(search)
const dispatch=useDispatch()
    const handlesidebar=()=>{
        dispatch(changemenu())
    }
   
    const fetchdata=async()=>{
      const data= await fetch("https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+search,{ mode: 'no-cors' })
      const json=await data.json()
      setsuggestion(json[1])
      dispatch(addsearch({[search]:[json[1]]}))
      //console.log(json)
    }
    useEffect(()=>{
    
     const  timer =setTimeout(()=>{
      if(cache[search]){
        setsuggestion(cache[search])
      }
      else fetchdata()
     },200)
     return ()=>clearTimeout(timer)
    }, [search])
   
   
  return (
    <div className="grid bg-white grid-flow-col  fixed top-0 left-0 w-full">
      <div className=" flex ml-1 col-span-1 ">
        
        <img onClick={handlesidebar} className="w-7 h-7 mt-5 cursor-pointer"
         alt="icon" src="https://imgs.search.brave.com/-JGVG7osq58JRuctSjz9-HID9muHdDN6gc9haw3KfT4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81My5m/czEuaHVic3BvdHVz/ZXJjb250ZW50LW5h/MS5uZXQvaHViLzUz/L2h1YmZzL1doYXQl/MjBpcyUyMGElMjBI/YW1idXJnZXIlMjBC/dXR0b24ucG5nP3dp/ZHRoPTIyNSZuYW1l/PVdoYXQlMjBpcyUy/MGElMjBIYW1idXJn/ZXIlMjBCdXR0b24u/cG5n"/>
      <div>
        <img className="w-32 h-16" 
        alt="youtube icom" src="https://imgs.search.brave.com/gMuQvnJ0Dvv_J8-xZz-ac46oj73W4FoYk-4hw_adtg0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzAwLzM4Lzkw/LzM2MF9GXzMwMDM4/OTAyNV9iNWhnSHBq/RHByVHlTbDhsb1Rx/SlJNaXB5U2Ixck8w/SS5qcGc"/>
      
      </div>
        </div>
        <div className=" col-span-10 ml-32 mt-3 ">
          <div>
            <input value={search}
            
            onChange={(e)=>{ setsearch(e.target.value)}}
            onFocus={()=>setshowsugg(true)}
            onBlur={()=>setshowsugg(false)}
            className=" w-3/4 py-2 px-2  place-content-start border border-gray-600 rounded-l-3xl"
            type="text" placeholder="search here" />
            <button className="px-5 py-2 text  border border-gray-600 rounded-r-md bg-white">🔍</button>
        </div>
       {showsugg && (
        <div className="fixed bg-white w-[49%] rounded-l-3xl ">
          <ul>
            {suggestion.map(s=><li key={s} className="m-1 ml-4 px-2 py-2  text-gray-500">{s}</li>)}
            
            
          </ul>
        </div>)}
        </div>
       
        <div className=" mt-5 col-span-1">
            <img className="w-7 h-7 "
            alt="usericon" src="https://imgs.search.brave.com/pZ2DKWjtw7hzsB-caM9l5n5xAr6aaH4tXxJAIMSHK5s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk4LzcyLzQz/LzM2MF9GXzQ5ODcy/NDMyM19Gb25BeThM/WVlmRDFCVUMwYmNL/NTZhb1l3dUxISjJH/ZS5qcGc"/>
        </div>
    </div>
  )
}

export default Header
