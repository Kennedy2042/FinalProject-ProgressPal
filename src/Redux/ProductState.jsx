import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    School: [],
    schoolTeacher: [],
}



const productState = createSlice({
    name: "Product",
    initialState,
    reducers:{
      schoolUserData: (state, {payload}) => {
        state.School = payload
        console.log("first", payload)
      },
      
      schoolTeacherData: (state, {payload}) => {
        state.schoolTeacher = payload
        console.log("first", payload)
      }
    }
})

export const {schoolUserData, schoolTeacherData} = productState.actions;
export default productState.reducer


// ProductState File