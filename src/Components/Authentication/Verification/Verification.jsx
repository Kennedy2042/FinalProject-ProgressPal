import React from 'react'
import "./Verification.css"
import {TfiEmail} from 'react-icons/tfi'

const Verification = () => {
  return (
    <>
        <div className="verifyBody">
          <div className="verifyMainContainer">
            <TfiEmail size={50}/>
            <h1 style={{height: "20%", fontSize: "40px"}}>Verify Email Address</h1>
            <p style={{height: "20%"}}>Your Email has been verified successfully</p>
            <button className='VerifyOkBtn'>OK</button>
          </div>
        </div>
    </>
  )
}

export default Verification