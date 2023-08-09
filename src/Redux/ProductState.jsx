import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    School: []
}



const productState = createSlice({
    name: "Product",
    initialState,
    reducers:{
      schoolUserData: (state, {payload}) => {
        state.School = payload
        console.log("first", payload)
      }  
    }
})

export const {schoolUserData} = productState.actions;
export default productState.reducer


// ProductState File