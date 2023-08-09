import React, { useEffect, useState } from 'react'
import "./Verification.css"
import { TfiEmail } from 'react-icons/tfi'
import { useNavigate, useParams } from 'react-router-dom'
import "./VerificationMedia.css"
import axios from 'axios'

const Verification = () => {
  const [isVerified, setIsVerified] = useState(false)
  const navigate = useNavigate()
  const { token, schoolId } = useParams()
  async function EmailVerify() {
    const url = "https://progresspal-8rxj.onrender.com/progressPal/verify/:schoolId/:token"
    axios
      .post(url`${schoolId}/${token}`)
      .then((res)=>{
        console.log(res)
        setIsVerified(true)
      })
      .catch((err)=>{
        console.log(err)
        setIsVerified(false)
      })
  }
  
  useEffect(() =>{
    EmailVerify();
  }, [])






  return (


    <>
      <div className="verifyBody">
      {
        isVerified ? 
        <div className="verifyMainContainer">
          <TfiEmail size={50} />
          <h1 className='VerificationPageH1' >Verify Email Address</h1>
          <p className="VerificationPageP" >Your Email has been verified successfully</p>
          <button className='VerifyOkBtn' onClick={() => navigate("/login")}>OK</button>
        </div> : <h1>Verification Failed</h1>
      }
      </div>

    </>
  )
}

export default Verification