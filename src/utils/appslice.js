import { createSlice } from "@reduxjs/toolkit";

const appslice =createSlice({
    name:"app",
    initialState:{
        ismenu:true,
        youtubevids:null
    },
    reducers:
{
    changemenu:(state)=>{
        state.ismenu=!state.ismenu
    },
    addyoutubevids:(state,action)=>{
        state.youtubevids=action.payload
    }
}
})
export const {changemenu,addyoutubevids}=appslice.actions
export default appslice.reducer