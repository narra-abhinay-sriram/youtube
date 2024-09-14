import Header from "./components/Header";
import Body from "./components/Body"
import { Provider } from "react-redux";
import appstore from "./utils/appstore"

function App() {
  return (
    <Provider  store={appstore}>
    <div className="">
     <Header/>
     <Body/>
    </div>
    </Provider>
  );
}

export default App;
