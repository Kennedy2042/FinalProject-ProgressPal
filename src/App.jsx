import HomePage from "./Components/HomePage/HomePage"
import SchRegister from "./Components/Authentication/SchRegistration/SchRegister"
import Login from "./Components/Authentication/Login/Login"
import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom"
import Verification from "./Components/Authentication/Verification/Verification"
import Admin from "./Components/Dashboard/Admin"
import ForgetPassword from "./Components/Authentication/ForgetPassword/ForgetPassword"
// import AdminTeacherDashboard from "./Components/Dashboard/AdminDashboard/AdminTeacherDashboard"

function App() {

  return (
    <>
      <div>
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sch_register" element={<SchRegister />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verified_success/:schoolId/:token" element={<Verification/>} />
            <Route path="/Admin_Dashboard/*" element={<Admin/>} />
            <Route path="/forget_password" element={<ForgetPassword/>} />
          </Routes>
        </HashRouter>
      </div>
    </>
  )
}

export default App
