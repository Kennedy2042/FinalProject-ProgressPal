import axios from 'axios'
import React, { useState } from 'react'
import "./ForgetPassword.css"
import {PiWarningCircleBold} from "react-icons/pi"
import {MdOutlineArrowBackIos} from "react-icons/md"
import { useNavigate } from 'react-router-dom'

const ForgetPassword = () => {
    const [schoolEmail, setSchoolEmail] = useState("")
    const [success, setSuccess] = useState("")
    const navigate = useNavigate()



    const url = "https://progresspal-8rxj.onrender.com/progressPal/forgot-password"
    const data = { schoolEmail }

    const Forget = (e) => {
        e.preventDefault();
        axios.post(url, data)
            .then((res) => {
                console.log(res.data)
                setSuccess(res.data.message)
            })
            .catch((err) => {
                console.log(err)
                setSuccess(err.response.data.message)
            })


        console.log(data)

    };

    return (



        <div className="ForgetPasswordBody" >
            <div className="ForgetPasswordMainBody">
                <PiWarningCircleBold size={70}/>
                <h1 className='ForgetPasswordH1'>Forget Password</h1>
                <p className='ForgetPasswordP'>Enter your email and we'll send you a link to reset your password</p>
                <input className="ForgetPasswordInput" type="email" placeholder='Enter your Email' />
                <button className='ForgetPasswordSubmitBtn' onClick={Forget}>Submit</button>
                <div className='ForgetPasswordSubmitBtnLoginBtn' onClick={()=>navigate("/login")}>
                    <MdOutlineArrowBackIos/>Back to Login
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword