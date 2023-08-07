import React from 'react'
import "./ResetPassword.css"

const ResetPassword = () => {

    const url = "https://progresspal-8rxj.onrender.com/progressPal/reset-password/:id/:token"


  return (
    <div className='resetPasswordMainBody'>
        <input type="text" placeholder='Input your Email'/>
        <input type="text" placeholder='New Password'/>
        <input type="text" placeholder='Confirm New Password'/>
        <button>Send</button>
    </div>
  )
}

export default ResetPassword