import React, { useState } from 'react'
import axios from 'axios'
import { BiSolidHide, BiSolidShow } from 'react-icons/bi'
import ProgressPalLogo from "../../../../assets/ProgressPalLogo.png"
import { useNavigate } from 'react-router-dom'

const TeacherLogin = () => {


    const [schoolEmail, setSchoolEmail] = useState("")
    const [password, setPassword] = useState("")
    const [successErrorMessage, setSuccessErrorMessage] = useState("")
    const [emailError, setEmailError] = useState("")
    const [loginShowpass, setLoginShowPass] = useState(false)

    const url = "https://progresspal-8rxj.onrender.com/progressPal/login"
    const data = { schoolEmail, password }

    async function SignUp(e) {
        e.preventDefault();


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (schoolEmail === "" || !emailRegex.test(schoolEmail)) {
            return setEmailError("Please input a valid email address.");
        }

        axios
            .post(url, data)

            .then((res) => {
                console.log(res.data)
                setSuccessErrorMessage(res.data.message)
                navigate("/Admin_Dashboard/")
            })
            .catch((err) => {
                console.log(err)
                setSuccessErrorMessage(err.response.data.message);
            });

        console.log(data)

    }


    const navigate = useNavigate()

    return (
        <>
            <div className='LoginMainContainer'>
                <div className='LoginLogo'>
                    <img src={ProgressPalLogo} alt="" />

                </div>

                <div className='LoginBody'>
                    <div className='LoginLowerBody'>

                        <div className='LoginWelTextDiv'>
                            <h1 className='LoginWelText'>Welcome To ProgressPal</h1>
                        </div>
                        <div className="EmailInputDiv">
                            <input type="email" className={`${emailError.length > 0 ? "error" : ""} LoginEmailInput`} placeholder='Email' value={schoolEmail} onChange={(e) => setSchoolEmail(e.target.value)} />
                            <p className='ErrorloginMsg'>{emailError}</p>
                        </div>
                        <div className="PasswordInputDivHolder">
                            <div className="PasswordInputDiv">
                                <input type={loginShowpass ? "text" : "password"} className='LoginPassInput' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                <div className="LoginShowPass">
                                    {
                                        loginShowpass ? <BiSolidHide onClick={() => { setLoginShowPass(false) }} /> : <BiSolidShow onClick={() => { setLoginShowPass(true) }} />
                                    }
                                </div>
                            </div>
                        </div>
                        <p className='ErrorloginMsg'>{successErrorMessage}</p>

                        <div className='Logintext2'>
                            {/* <p className='AcctParagrph'>Don't have an account? <span className='LoginSpan' onClick={() => { navigate("/teacher_login") }}>Sign Up</span></p> */}
                            <p className='AcctParagrph' style={{ cursor: "pointer", color: "blue" }} onClick={() => navigate("/teacher_forgotpassword")}>Forgotten password?</p>
                            {/* <div className='left'>
                        </div>
                        <div className='right'>
                        </div> */}
                        </div>

                        <button className='LoginBtn' onClick={SignUp}>LOGIN</button>
                        {/* <h2>Register Your School</h2> */}
                    </div>
                </div>
            </div>


        </>
    )
}

export default TeacherLogin