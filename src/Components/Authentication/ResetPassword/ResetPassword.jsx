import React, { useState } from 'react'
import "./ResetPassword.css"
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {
  const schoolUsers = useSelector(state => state.persisitedReducer.School)
  const nav = useNavigate()

  const[password, setPassword] = useState("")
  const[confirmPassword, setConfirmPassword] = useState("")

  const url = `https://progresspal-8rxj.onrender.com/progressPal/reset-password/${schoolUsers._id}/:token`

  const data = {password, confirmPassword}


  const ResetPassword = () => {
    axios.put(url, data)
    .then((res) => {
      console.log(res)
      nav("/login")
    })
    .catch((err) => {
      console.log(err)
    })
  }


  return (
    <div className='resetPasswordMainBody'>

        <div className='ResetPassword'>
          <div className='ResetPasswordCon'>
            <section className='ResetPasswordH1Section'>
              <h1 className='ResetPasswordH1'>Reset Password</h1>
            </section>
            <div className='inputTextCon'>
              <div className='ResetPasswordInputDiv'>
                <input type="" placeholder='New Password' className='resetPasswordInput' value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="" placeholder='Confirm New Password' className='resetPasswordInput' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
            </div>
            <div className='ResetPasswordButton'>
              <button className='ResetPasswordButtonSend' onClick={ResetPassword}>Send</button>
            </div>
          </div>
        </div>

      
      {/* <input type="text" placeholder='Input your Email'/>
        <input type="text" placeholder='New Password'/>
        <input type="text" placeholder='Confirm New Password'/>
        <button>Send</button> */}
    </div>
  )
}

export default ResetPassword