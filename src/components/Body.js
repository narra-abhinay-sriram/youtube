import { useSelector } from "react-redux"
import MainContainer from "./MainContainer"
import Sidebar from "./Sidebar"


const Body = () => {
  const ismenu=useSelector(store=>store.app.ismenu)

  return (
    <div className="flex">
    {ismenu &&  <Sidebar/>}
      <div className="ml-2">
      <MainContainer/>
      </div>
    </div>
  )
}

export default Body
