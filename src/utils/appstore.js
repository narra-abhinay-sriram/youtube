import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appslice"
import searchReducer from "./searchslice"
const appstore=configureStore({
    reducer:{
        app:appReducer,
        search:searchReducer
    }
})
export default appstore