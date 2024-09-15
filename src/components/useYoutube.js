import { useEffect } from "react"
import { Youtube_fetch } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addyoutubevids } from "../utils/appslice";

const useYoutube = () => {
    const dispatch=useDispatch()

    useEffect(()=>{
        fetchdata();
    },[])
    const fetchdata=async ()=>{
        const data=await fetch(Youtube_fetch)
        const json= await data.json()
       // console.log(json)
        dispatch(addyoutubevids(json.items))
        
    }
 
}

export default useYoutube
