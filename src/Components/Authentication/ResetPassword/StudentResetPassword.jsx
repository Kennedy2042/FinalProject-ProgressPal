import React, { useState } from 'react'
import "./ResetPassword.css"
import axios from 'axios'
import { useSelector } from 'react-redux'
import { BiSolidHide, BiSolidShow } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { SpinnerCircular } from "spinners-react"


const StudentResetPassword = () => {
  // const schoolUsers = useSelector(state => state.persisitedReducer.School)
  const {token} = useParams()
  const nav = useNavigate()

  const[password, setPassword] = useState("")
  const[confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [validMessage, setValidMessage] = useState({
    error: "false",
    value: "",
    msg: "",
  });
    const [loading, setLoading] = useState(false)


  // const StudentDetails = useSelector(
  //   (state) => state.persisitedReducer.newStudentDetails
  // );

  const url = `https://progresspal-8rxj.onrender.com/progressPal/reset-passwordStudent/${token}`

  const data = {password, confirmPassword}


  const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{}|:;"'<>,.?/])[A-Za-z\d!@#$%^&*()_\-+=\[\]{}|:;"'<>,.?/]{8,}$/;

  const ResetPassword = () => {
    if (password === "") {
      setValidMessage({
        error: "true",
        value: "password",
        msg: "Please input your new password",
      });
    } else if (!strongPasswordRegex.test(password)) {
      setValidMessage({
        error: "true",
        value: "passwordError",
        msg: "Password should contain at least one uppercase letter, lowercase letter, digit, special character and should be 8 characters and above",
      });
    } else if (confirmPassword === "") {
      setValidMessage({
        error: "true",
        value: "confirmPassword",
        msg: "Please confirm your password",
      });
    } else if (confirmPassword !== password) {
      setValidMessage({
        error: "true",
        value: "confirmPasswordError",
        msg: "Password do not match",
      });
    } else {
      setValidMessage("");
      setLoading(true)
      axios.put(url, data)
      .then((res) => {
        console.log(res)
        nav("/login")
      })
      .catch((err) => {
        console.log(err)

      })
    }

  
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
                <div className={validMessage.value === "password" || validMessage.value === "passwordError" ? "resetInstitutePasswordIconDivError" : "resetPasswordInputHolder"}>
                  <input className='resetPasswordInput' type={showPassword ? "text" : "password"} placeholder="New password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <div className='resetPasswordIcon'>
                    {
                      showPassword ? <BiSolidHide className='showPassIcon' onClick={() => { setShowPassword(false) }} /> : <BiSolidShow className='showPassIcon' onClick={() => { setShowPassword(true) }} />
                    }
                  </div>
                </div>
                {validMessage.value === "password" ? (
                  <p className='errorParagraph'>{validMessage.msg}</p>
                ) : null}
                {validMessage.value === "passwordError" ? (
                  <p className='errorParagraph'>{validMessage.msg}</p>
                ) : null}
                <div className={validMessage.value === "confirmPassword" || validMessage.value === "confirmPasswordError" ? "resetInstitutePasswordIconDivError" : "resetPasswordInputHolder"}>
                  <input className='resetPasswordInput' type={showConfirmPassword ? "text" : "password"} placeholder="Confirm New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                  <div className='resetPasswordIcon'>
                    {
                      showConfirmPassword ? <BiSolidHide className='showPassIcon' onClick={() => { setShowConfirmPassword(false) }} /> : <BiSolidShow className='showPassIcon' onClick={() => { setShowConfirmPassword(true) }} />
                    }
                  </div>
               
                </div>
                {validMessage.value === "confirmPassword" ? (
                  <p className='errorParagraph'>{validMessage.msg}</p>
                ) : null}
                {validMessage.value === "confirmPasswordError" ? (
                  <p className='errorParagraph'>{validMessage.msg}</p>
                ) : null}
              </div>
            </div>
            <div className='ResetPasswordButton'>
              <button className='ResetPasswordButtonSend' onClick={ResetPassword}>  {
                                    loading ? (
                                        <SpinnerCircular
                                            size={35}
                                            thickness={99}
                                            speed={100}
                                            color="rgba(18, 124, 221, 1)"
                                        />
                                    ) : (
                                        "Send"
                                    )
                                }</button>
            </div>
          </div>
        </div>

    </div>
  )
}

export default StudentResetPassword;

