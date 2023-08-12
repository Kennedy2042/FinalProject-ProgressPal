import React, { useEffect, useState } from 'react'
import "./Verification.css"
import { TfiEmail } from 'react-icons/tfi'
import { useNavigate, useParams } from 'react-router-dom'
import "./VerificationMedia.css"
import axios from 'axios'

const Verification = () => {
  const [isVerified, setIsVerified] = useState(1)
  const navigate = useNavigate()
  const { token, schoolId } = useParams()

  async function EmailVerify() {
    console.log("call")
    const url = "https://progresspal-8rxj.onrender.com/progressPal/verify/"
    axios
      .put(`${url}${schoolId}/${token}`)
      .then((res)=>{
        console.log(res)
        setIsVerified(2)
      })
      .catch((err)=>{
        console.log(err)
        setIsVerified(3)
      })
  }
  
  useEffect(() =>{
    EmailVerify();
  }, [])






  return (


    <>
      <div className="verifyBody">
      {
        isVerified === 1 ? <h1>Verifying Email</h1> : isVerified === 2 ? 
        <div className="verifyMainContainer">
          <TfiEmail size={50} />
          <h1 className='VerificationPageH1' >Verify Email Address</h1>
          <p className="VerificationPageP" >Your Email has been verified successfully</p>
          <button className='VerifyOkBtn' onClick={() => navigate("/login")}>OK</button>
        </div> : <h1>Verification Failed</h1>
      }
      </div>
      {/* <p>{res.data}</p> */}

    </>
  )
}

export default Verification