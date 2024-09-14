import { useSelector } from "react-redux"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"


const Body = () => {
  const ismenu=useSelector(store=>store.app.ismenu)

  return (
    <div className="flex">
    {ismenu &&  <Sidebar/>}
      <div className="ml-2">
     <Outlet/>
      </div>
    </div>
  )
}

export default Body
