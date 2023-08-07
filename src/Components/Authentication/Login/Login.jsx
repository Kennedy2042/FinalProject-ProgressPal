import React, { useState } from 'react'
import './Login.css'
import './LoginMedia.css'
import axios from 'axios'
import { BiSolidHide, BiSolidShow } from 'react-icons/bi'



const Login = () => {

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
            })
            .catch((err) => {
                console.log(err)
                setSuccessErrorMessage(err.response.data.message);
            });

        console.log(data)

    }

    return (
        <div className='LoginMainContainer'>
            <div className='LoginLogo'>
                <img src="./src/Components/ProgressPalLogo.png" alt="" />

            </div>

            <div className='LoginBody'>
                <div className='LoginLowerBody'>

                    <div className='LoginWelTextDiv'>
                        <h1 className='LoginWelText'>Welcome To ProgressPal</h1>
                    </div>
                    <div className="EmailInputDiv">
                        <input type="email" className={`${emailError.length > 0 ? "error" : ""} LoginEmailInput`} placeholder='Email' value={schoolEmail} onChange={(e) => setSchoolEmail(e.target.value)} />
                        <p>{emailError}</p>
                    </div>
                    <div className="PasswordInputDivHolder">
                        <div className="PasswordInputDiv">
                            <input type={loginShowpass ? "text" : "password"} className='LoginPassInput' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <div className="LoginShowPass">
                                {
                                    loginShowpass ? <BiSolidHide onClick={()=>{setLoginShowPass(false)}}/> : <BiSolidShow onClick={()=>{setLoginShowPass(true)}}/>
                                }
                            </div>
                        </div>
                        <p>{successErrorMessage}</p>
                    </div>
                    <div className='Logintext2'>
                        <p className='AcctParagrph'>Don't have an account? <span className='LoginSpan'>Sign Up</span></p>
                        <p className='AcctParagrph' style={{ cursor: "pointer" }}>Forgotten password?</p>
                        {/* <div className='left'>
                        </div>
                        <div className='right'>
                        </div> */}
                    </div>
                    <button className='LoginBtn' onClick={SignUp}>LOGIN</button>
                    <h2>Register Your School</h2>
                </div>
            </div>
        </div>
    )
}

export default Login