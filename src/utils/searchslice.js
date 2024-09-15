import { createSlice } from "@reduxjs/toolkit";

const searchslice =createSlice({
    name:"search",
    initialState:{

    },
    reducers:{
        addsearch:(state,action)=>{
            state=Object.assign(state,action.payload)


        }
    }
})

export const {addsearch}=searchslice.actions
export default searchslice.reducer
