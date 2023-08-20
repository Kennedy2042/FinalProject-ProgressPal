import axios from 'axios'
import React, { useState } from 'react'
import "./ForgetPassword.css"
import "./ForgetPasswordMedia.css"
import {PiWarningCircleBold} from "react-icons/pi"
import {MdOutlineArrowBackIos} from "react-icons/md"
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import {SpinnerCircular} from "spinners-react"
import ProgressPalLogo from "../../../assets/ProgressPalLogo.png"

const ForgetPassword = () => {
    const [schoolEmail, setSchoolEmail] = useState("")
    const [success, setSuccess] = useState("")
    const navigate = useNavigate()
    const [loading, setloading] =useState(false)



    const url = "https://progresspal-8rxj.onrender.com/progressPal/forgot-password"
    const data = { schoolEmail }

    const Forget = (e) => {
        setloading(true)
        e.preventDefault();
        axios.post(url, data)
            .then((res) => {
                console.log(res.data)
                setSuccess(res.data.message)
                Swal.fire({
                    title: "Success",
                    text: res.data.message,
                    icon: "Success",
                    confirmButtonText: "OK"
                })
                setloading(false)
            })
            .catch((err) => {
                console.log(err)
                setSuccess(err.response.data.message)
                Swal.fire({
                    title: "Failed",
                    text: err.response.data.message,
                    icon : "error",
                    confirmButtonText: "OK"
                })
                setloading(false)
            })


        console.log(data)

    };

    return (



        <div className="ForgetPasswordBody" >
            <div className="ForgetPasswordMainBody">
                <img src={ProgressPalLogo} alt="" />
                {/* <PiWarningCircleBold size={70}/> */}
                <h1 className='ForgetPasswordH1'>Forgotten Password</h1>
                <p className='ForgetPasswordP'>Enter your email and we'll send you a link to reset your password</p>
                <input className="ForgetPasswordInput" type="email" placeholder='Enter your Email'value={schoolEmail} onChange={(e)=>setSchoolEmail(e.target.value)}/>
                <button className='ForgetPasswordSubmitBtn' onClick={Forget}>
                    {
                        loading ? (
                            <SpinnerCircular
                              size={25}
                              thickness={99}
                              speed={100}
                              color="rgba(18, 124, 221, 1)"
                            />
                          ) : ("Submit")
                    }
                </button>
                <div className='ForgetPasswordSubmitBtnLoginBtn' onClick={()=>navigate("/login")}>
                    <MdOutlineArrowBackIos/>Back to Login
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword



