import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appslice"
const appstore=configureStore({
    reducer:{
        app:appReducer,
    }
})
export default appstore