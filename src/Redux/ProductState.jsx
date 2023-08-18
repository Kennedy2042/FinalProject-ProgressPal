import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    School: [],
    schoolTeacher: [],
    loginUser: [],
    logOut: "",
    studentApi: [],
}



const productState = createSlice({
    name: "Product",
    initialState,
    reducers:{
      schoolUserData: (state, {payload}) => {
        state.School = payload
        console.log("first", payload)
      },
      
      // schoolTeacherData: (state, {payload}) => {
      //   state.schoolTeacher = payload
      //   console.log("first", payload)
      // },

      loginUserData: (state, {payload}) => {
        state.loginUser = payload
        console.log("first", payload)
      },
      
      studentSignUpData: (state, {payload}) => {
        state.studentSignData = payload
        console.log("first", payload)
      },

      allStudentApi: (state, {payload}) => {
        state.studentApi = payload
        console.log("first", payload)
      }
    }
})

export const {schoolUserData, schoolTeacherData, loginUserData, studentSignUpData, allStudentApi} = productState.actions;
export default productState.reducer


// ProductState File