import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    School: [],
    schoolTeacher: [],
    loginUser: [],
    studentApi: [],
    adminTeachApi: [],
    AdminStudentApi: [],
    teacherInfo: [],
    isLoggedIn:false
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
      },

      adminAllTeacherApi: (state, {payload}) => {
        state.adminTeachApi = payload
        console.log("first", payload)
      },

      adminAllStudentApi: (state, {payload}) =>{
        state.AdminStudentApi = payload
        console.log("first", payload)
      },

      teacherInformation: (state, {payload}) => {
        state.teacherInfo = payload
        console.log("first", payload)
      },

      userLogin: (state, {payload}) => {
        state.isLoggedIn = payload
        console.log("first", payload)
      }
    }
})

export const {schoolUserData, schoolTeacherData, loginUserData, studentSignUpData, allStudentApi, adminAllTeacherApi, adminAllStudentApi, teacherInformation, userLogin} = productState.actions;
export default productState.reducer


// ProductState File