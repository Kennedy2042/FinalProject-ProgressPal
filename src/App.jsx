import HomePage from "./Components/HomePage/HomePage"
import SchRegister from "./Components/Authentication/SchRegistration/SchRegister"
import Login from "./Components/Authentication/Login/Login"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Verification from "./Components/Authentication/Verification/Verification"

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sch_register" element={<SchRegister />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verified_success" element={<Verification/>} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <HomePage /> */}
    </>
  )
}

export default App
