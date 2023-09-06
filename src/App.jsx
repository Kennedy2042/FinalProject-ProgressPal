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
import Teacher from "./Components/Dashboard/Teacher/Teacher"
import Student from "./Components/Dashboard/Student/Student"
import StudentProfile from './Components/Dashboard/AdminDashboard/AdminStudent/StudentProfile/StudentProfile'
import TeacherProfile from './Components/Dashboard/AdminDashboard/AdminTeacher/TeacherProfile/TeacherProfile'
import EditTeacherProfile from './Components/Dashboard/AdminDashboard/AdminTeacher/TeacherProfile/EditTeacherProfile'
import { useSelector } from 'react-redux'
import Result from './Components/Dashboard/Teacher/ReportCard/ReportCard'
import PremiumUpgradeComponent from './Upgrade/Upgrade'
import ResultSheet from './Components/Dashboard/Teacher/ResultSheet/ResultSheet'
import TeacherViewStudentProfile from './Components/Dashboard/Teacher/Student/TeacherViewStudentProfile'
import TeacherStudentEditProfile from './Components/Dashboard/Teacher/TeacherStudentProfile/TeacherStudentEditProfile'
import StudentEditProfile from './Components/Dashboard/Student/User/StudentProfile/EditStudentProfile'
import TeacherEditProfile from './Components/Dashboard/Teacher/TeacherProfile/EditTeacherPofile'
import StudentResult from './Components/Dashboard/AdminDashboard/AdminStudent/StudentProfile/StudentResult'
import TeacherResetPassword from './Components/Authentication/ResetPassword/TeacherResetPassword'
import StudentResetPassword from './Components/Authentication/ResetPassword/StudentResetPassword'



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
            <Route path="/verified_success/:token" element={<Verification />} />
            <Route path="/Dashboard/schoolAdmin/*" element={<Admin />} />
            <Route path="/forget_password" element={<ForgetPassword />} />
            <Route path="/school_reset_password/:token" element={<ResetPassword />} />
            <Route path="/teacher_reset_password/:token" element={<TeacherResetPassword />} />
            <Route path="/student_reset_password/:token" element={<StudentResetPassword />} />
            <Route path="/teacher_signup/:token" element={<TeacherSignUp />} />
            <Route path="/teacher_login" element={<TeacherLogin />} />
            <Route path="/Dashboard/teacher/*" element={<Teacher />} />
            <Route path="/Dashboard/student/*" element={<Student />} />
            <Route path='/student_profile/:studentId' element={<StudentProfile />} />
            <Route path='/admindashboard/teacherProfile/:teacherId' element={<TeacherProfile />} />
            <Route path="/teacherdashboard/studentProfile/:studentId" element={<TeacherViewStudentProfile />} />
            <Route path='/admindashboard/editteacherProfile/:id' element={<EditTeacherProfile />} />
            <Route path='/teacher_studentResult/:studentId' element={<Result />} />
            <Route path='/admin_studentResult/:studentId' element={<StudentResult />} />
            <Route path='/Upgrade_now' element={<PremiumUpgradeComponent />} />
            <Route path='/teacher_create_studentResult/:shareId' element={<ResultSheet />} />
            <Route path='/teacherdashboard/editStudentProfile/:studentId' element={<TeacherStudentEditProfile />} />
            <Route path='/Dashboard/student/studentUser/editProfile/:studentId' element={<StudentEditProfile />} />
            <Route path='/Dashboard/teacher/teacherUser/editProfile/:teacherId' element={<TeacherEditProfile />} />
          </Routes>
        </HashRouter>
        {/* <TeacherUser/> */}
      </div>
    </>
  )
}

export default App
