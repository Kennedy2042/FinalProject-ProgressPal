import HomePage from "./Components/HomePage/HomePage"
import SchRegister from "./Components/Authentication/SchRegistration/SchRegister"
import Login from "./Components/Authentication/Login/Login"
import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom"
import Verification from "./Components/Authentication/Verification/Verification"

function App() {

  return (
    <>
      <div>
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sch_register" element={<SchRegister />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verified_success" element={<Verification/>} />
          </Routes>
        </HashRouter>
      </div>
      {/* <HomePage /> */}
    </>
  )
}

export default App
