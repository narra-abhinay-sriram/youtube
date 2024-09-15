import { createSlice } from "@reduxjs/toolkit";

const appslice =createSlice({
    name:"app",
    initialState:{
        ismenu:true,
        youtubevids:null,
        livedata:[]
    },
    reducers:
{
    changemenu:(state)=>{
        state.ismenu=!state.ismenu
    },
    
    addyoutubevids:(state,action)=>{
        state.youtubevids=action.payload
    },
   onloadingvid:(state)=>{

state.ismenu=false
   },
   addlive:(state,action)=>{
    state.livedata.splice(200,1)
state.livedata.unshift(action.payload)
   }
}
})
export const {changemenu,addyoutubevids,onloadingvid,addlive}=appslice.actions
export default appslice.reducer