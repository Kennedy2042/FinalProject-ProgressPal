import React, { useState, useEffect } from 'react'
import './Login.css'
import './LoginMedia.css'
import axios from 'axios'
import { BiSolidHide, BiSolidShow } from 'react-icons/bi'
import ProgressPalLogo from "../../../assets/ProgressPalLogo.png"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserData } from '../../../Redux/ProductState'
import { SpinnerCircular } from "spinners-react"
import Swal from 'sweetalert2'



const Login = () => {

    const teacherData = useSelector(state => state.persisitedReducer.loginUser)
    // console.log(teacherData)

    const [schoolEmail, setSchoolEmail] = useState("")
    const [teacherEmail, setTeacherEmail] = useState("")
    const [studentEmail, setStudentEmail] = useState("")
    const [password, setPassword] = useState("")
    const [successErrorMessage, setSuccessErrorMessage] = useState("")
    const [emailError, setEmailError] = useState("")
    const [loginShowpass, setLoginShowPass] = useState(false)
    const [select, setSelect] = useState()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    


    const url = `https://progresspal-8rxj.onrender.com/progressPal/login/${select}`
    // console.log(select, "this is select")
    const data = { schoolEmail, password }
    const info = { teacherEmail, password }
    const detail = { studentEmail, password }



    async function SignUp(e) {
        e.preventDefault();
        setLoading(true)
        

        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // if (schoolEmail === "" || !emailRegex.test(schoolEmail)) {
        //     return setEmailError("Please input a valid email address.");
        // }

        axios
            .post(url, select === 'schoolAdmin' ? data : select === 'teacher' ? info : detail )

            .then((res) => {
                // console.log(res)
                setSuccessErrorMessage(res.data.message)
                navigate(`/Dashboard/${select}/${select}User/${res.data.data._id}`)
                dispatch(loginUserData(res))
                Swal.fire({
                    title: "Logged In Successfully",
                    text: "Welcome back",
                    icon: "success",
                    confirmButtonText: "Okay"

                })
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setSuccessErrorMessage(err?.response?.data?.message);
                Swal.fire({
                    title: "Login Failed",
                    text: err.response.data.message,
                    icon: "error",
                    confirmButtonText: "okay"
                })
                (setLoading(false))
            });



    }

    useEffect(() => {
        setSelect("0")
    }, [])
    


    const navigate = useNavigate()


    return (
        <>
        <div className='LoginMainContainer'>
            <div className="LoginMainContainerBody">
            <div className='LoginLogo'>
                <img src={ProgressPalLogo} alt="" onClick={()=>{navigate("/")}}/>

            </div>

            <div className='LoginBody'>
                <div className='LoginLowerBody'>

                    <div className='LoginWelTextDiv'>
                        <h1 className='LoginWelText'>Welcome To ProgressPal</h1>
                    </div>
                    <select className="LoginSelect" value={select} onChange={(e) => setSelect(e.target.value)}>
                        <option value="0">Log In as </option>
                        <option value="schoolAdmin">School Admin</option>
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                    </select>
                    {
                        select !== "0"  && select !== undefined &&
                        <div className="EmailInputDiv">
                        {
                            select === "schoolAdmin" && <input type="email" className={`${emailError.length > 0 ? "error" : ""} LoginEmailInput`} placeholder='Email' value={schoolEmail} onChange={(e) => setSchoolEmail(e.target.value)} />
                        }
                        {
                            select === "teacher" && <input type="email" className={`${emailError.length > 0 ? "error" : ""} LoginEmailInput`} placeholder='Email' value={teacherEmail} onChange={(e) => setTeacherEmail(e.target.value)} />
                        }
                        {
                            select === "student" && <input type="email" className={`${emailError.length > 0 ? "error" : ""} LoginEmailInput`} placeholder='Email' value={studentEmail} onChange={(e) => setStudentEmail(e.target.value)} />
                        }
                        <p className='ErrorloginMsg'>{emailError}</p>
                    </div>
                    }
                    <div className="PasswordInputDivHolder">
                        <div className="PasswordInputDiv">
                            <input type={loginShowpass ? "text" : "password"} className='LoginPassInput' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <div className="LoginShowPass">
                                {
                                    loginShowpass ? <BiSolidHide onClick={()=>{setLoginShowPass(false)}}/> : <BiSolidShow onClick={()=>{setLoginShowPass(true)}}/>
                                }
                            </div>
                        </div>
                    </div>
                    {/* {console.log(select, "This is select")} */}
                    
                    
                    <p className='ErrorloginMsg'>{successErrorMessage}</p>

                    <div className='Logintext2'>
                        <p className='AcctParagrph'>Don't have an account? <span className='LoginSpan' onClick={()=>{navigate("/sch_register")}}>Sign Up</span></p>
                        <p className='AcctParagrph' style={{ cursor: "pointer", color: "red" }} onClick={()=>navigate("/forget_password")}>Forgotten password?</p>
                        {/* <div className='left'>
                        </div>
                        <div className='right'>
                        </div> */}
                    </div>

                    <button className='LoginBtn' onClick={SignUp}>
                        {
                            loading ? (
                                <SpinnerCircular
                                size={35}
                                thickness={99}
                                speed={100}
                                color="rgba(18, 124, 221, 1)"
                              />  
                            ) : (
                                "Login"
                            )
                        }
                    </button>
                    {/* <h2>Register Your School</h2> */}
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Login