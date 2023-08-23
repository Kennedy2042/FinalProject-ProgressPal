import './App.css'
import HomePage from "./Components/HomePage/HomePage"
import SchRegister from "./Components/Authentication/SchRegistration/SchRegister"
import Login from "./Components/Authentication/Login/Login"
import { HashRouter, Routes, Route } from "react-router-dom"
import Verification from "./Components/Authentication/Verification/Verification"
import Admin from "./Components/Dashboard/Admin"
import ForgetPassword from "./Components/Authentication/ForgetPassword/ForgetPassword"
import ResetPassword from "./Components/Authentication/ResetPassword/ResetPassword"
import TeacherSignUp from "./Components/Authentication/SignUp/TeacherSignup/TeacherSignUp"
import TeacherLogin from "./Components/Authentication/Login/TeacherLogin/TeacherLogin"
import TeacherForget from "./Components/Authentication/ForgetPassword/Teacher/TeacherForget"
import Teacher from "./Components/Dashboard/Teacher/Teacher"
import Student from "./Components/Dashboard/Student/Student"
import StudentProfile from './Components/Dashboard/AdminDashboard/AdminStudent/StudentProfile/StudentProfile'
import TeacherProfile from './Components/Dashboard/AdminDashboard/AdminTeacher/TeacherProfile/TeacherProfile'
import EditTeacherProfile from './Components/Dashboard/AdminDashboard/AdminTeacher/TeacherProfile/EditTeacherProfile'
import { useSelector } from 'react-redux'



function App() {

  // const teacherData = useSelector(state => state.persisitedReducer.loginUser)
  // console.log("data", teacherData?.data?.data?.isLogin)
  const isLogin = useSelector(state => state.persisitedReducer.isLoggedIn)
  console.log(isLogin)

  return (
    <>
      <div>
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sch_register" element={<SchRegister />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verified_success/:token" element={<Verification/>} />
            {
              isLogin ? <Route path="/Dashboard/schoolAdmin*" element={<Admin/>} /> : <Route path="/login" element={<Login />} />
            }
            {/* <Route path="/Dashboard/schoolAdmin*" element={<Admin/>} /> */}
            <Route path="/forget_password" element={<ForgetPassword/>} />
            <Route path="/reset_password/:id/:token" element={<ResetPassword/>} />
            <Route path="/teacher_signup/:token" element={<TeacherSignUp/>} />
            <Route path="/teacher_login" element={<TeacherLogin/>} />
            <Route path="/teacher_forgot_password" element={<TeacherForget/>} />
            <Route path="/Dashboard/teacher*" element={<Teacher/>}/>
            <Route path="/Dashboard/student*" element={<Student/>} />
            <Route path='/student_profile/:studentId' element={<StudentProfile/>}/>
            <Route path='/admindashboard/teacherProfile/:teacherId' element={<TeacherProfile/>}/>
            <Route path='/admindashboard/editteacherProfile/:id' element={<EditTeacherProfile/>}/>
          </Routes>
        </HashRouter>
        {/* <TeacherUser/> */}
      </div>
    </>
  )
}

export default App
