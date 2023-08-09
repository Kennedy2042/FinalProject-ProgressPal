import React from 'react'
import "./ResetPassword.css"

const ResetPassword = () => {

  const url = "https://progresspal-8rxj.onrender.com/progressPal/reset-password/:id/:token"


  return (
    <div className='resetPasswordMainBody'>

        <div className='ResetPassword'>
          <div className='ResetPasswordCon'>
            <section className='ResetPasswordH1Section'>
              <h1 className='ResetPasswordH1'>Reset Password</h1>
            </section>
            <div className='inputTextCon'>
              <div className='input'>
                <input type="" placeholder='New Password' className='resetPasswordInput' />
                <input type="" placeholder='Confirm New Password' className='resetPasswordInput' />
              </div>
            </div>
            <div className='ResetPasswordButton'>
              <button className='ResetPasswordButtonSend'>send</button>
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