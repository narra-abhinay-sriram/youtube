import { createSlice } from "@reduxjs/toolkit";

const appslice =createSlice({
    name:"app",
    initialState:{
        ismenu:true,
    },
    reducers:
{
    changemenu:(state)=>{
        state.ismenu=!state.ismenu
    }
}
})
export const {changemenu}=appslice.actions
export default appslice.reducer