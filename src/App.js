import Header from "./components/Header";
import Body from "./components/Body"
import { Provider } from "react-redux";
import appstore from "./utils/appstore"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from "./components/Watch";
import MainContainer from "./components/MainContainer";

function App() {

  const get=createBrowserRouter([
    {path:"/",
     element:<Body/>,
     children:[
      {
        path:"/",
        element:<MainContainer/>
      },{
        path:"/watch",
        element:<Watch/>
      }
     ]
    },
   
  ])
  return (
    <Provider  store={appstore}>
    <div className="">
     <Header/>
   <RouterProvider router={get}  />
    </div>
    </Provider>
  );
}

export default App;
