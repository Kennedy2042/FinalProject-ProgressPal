import React from 'react'
import "./Verification.css"
import {TfiEmail} from 'react-icons/tfi'
import { useNavigate } from 'react-router-dom'
import "./VerificationMedia.css"

const Verification = () => {
  const navigate = useNavigate()

  return (
    <>
        <div className="verifyBody">
          <div className="verifyMainContainer">
            <TfiEmail size={50}/>
            <h1 className='VerificationPageH1' >Verify Email Address</h1>
            <p className="VerificationPageP" >Your Email has been verified successfully</p>
            <button className='VerifyOkBtn' onClick={()=> navigate("/login")}>OK</button>
          </div>
        </div>
    </>
  )
}

export default Verification