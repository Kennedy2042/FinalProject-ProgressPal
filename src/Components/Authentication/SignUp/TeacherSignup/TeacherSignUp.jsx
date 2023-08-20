import React, { useState } from 'react'
import { AiOutlineMail, AiOutlineFileImage } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { BiSolidHide, BiSolidShow } from 'react-icons/bi'
import ProgressPalLogo from "../../../../assets/ProgressPalLogo.png"
import "./TeacherSignUp.css"
import "./TeacherSignUpMedia.css"
import { useNavigate, useParams } from 'react-router-dom'
// import { schoolTeacherData } from '../../../../Redux/ProductState'
import { useDispatch } from 'react-redux'
import { SpinnerCircular } from "spinners-react";
import axios from 'axios'
import Swal from 'sweetalert2'



const SignUp = () => {
    const navigate = useNavigate()
    // const dispatch = useDispatch()
    const { token } = useParams()

    const [signUpPass, setSignUpPass] = useState(false)
    const [signUpConfirmPass, setSignUpConfirmPass] = useState(false)
    const [teacherName, setTeacherName] = useState("")
    const [teacherClass, setTeacherClass] = useState("")
    const [teacherImage, setTeacherImage] = useState("")
    const [teacherAge, setTeacherAge] = useState("")
    const [teacherEmail, setTeacherEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [validMessage, setValidMessage] = useState(
        {
            error: false,
            value: "",
            msg: "",
        }
    )
    const [loading, setLoading] = useState(false);
    const [successErrorMessage, setSuccessErrorMessage] = useState("")

    const dispatch = useDispatch()




    const File = (e) => {
        const file = e.target.files[0];
        setTeacherImage(file);
        console.log(file);
    };

    const url = `https://progresspal-8rxj.onrender.com/progressPal/newTeacher/${token}`;

    function teacherRegister(e) {

        e.preventDefault()
        console.log("Inside funcion", teacherName.length)
        const data = new FormData();
        data.append("teacherEmail", teacherEmail);
        data.append("teacherName", teacherName);
        data.append("teacherClass", teacherClass);
        data.append("teacherImage", teacherImage);
        data.append("teacherAge", teacherAge);
        data.append("password", password);
        data.append("confirmPassword", confirmPassword);
        setLoading(true);
        axios
            .post(url, data, {
                headers: { "Content-type": "multipart/form-data" },
            })
            .then((res) => {
                console.log(res);
                dispatch(schoolTeacherData(res.data))
                setSuccessErrorMessage(res.data.message);
                navigate("/login")
                setLoading(false);
                Swal.fire({
                    title: "Success!",
                    text: res.data.message,
                    icon: "success",
                    confirmButtonText: "Ok"
                  })

            })
            .catch((err) => {
                console.log(err);
                setSuccessErrorMessage(err?.response?.message ? err?.response?.message : err?.response?.data?.message);
                setLoading(false);
                Swal.fire({
                    title: "Error!",
                    text: err.response.data.message,
                    icon: "error",
                    confirmButtonText: "Ok"
                  })
            });
    }
    // }


    return (
        <>
            <div className="sigUpBody">
                <div className="SignUpLogo">
                    <img src={ProgressPalLogo} alt="" />
                </div>
                <div className="sigUpMainBody">
                    <h1>Sign Up</h1>
                    <div className="signUpNameHolder">
                        <div className="signUpNameIconDiv">
                            <FaUserAlt className='signUpNameIcon' />
                        </div>
                        <input className='signUpNameInput' type="text" placeholder='teacher Name' value={teacherName} onChange={(e) => setTeacherName(e.target.value)} />
                        {
                            validMessage.value === "teacherName" ? <p>{validMessage.msg}</p> : null
                        }


                    </div>
                    <div className="signUpNameHolder">
                        <div className="signUpNameIconDiv">
                            <FaUserAlt className='signUpNameIcon' />
                        </div>
                        <input className='signUpNameInput' type="text" placeholder='Teacher Class' value={teacherClass} onChange={(e) => setTeacherClass(e.target.value)} />
                        {
                            validMessage.value === "teacherClass" ? <p>{validMessage.msg}</p> : null
                        }
                    </div>
                    <div className="signUpNameHolder">
                        <div className="signUpNameIconDiv">
                            <AiOutlineMail className='signUpNameIcon' />
                        </div>
                        <input className='signUpNameInput' type="text" placeholder='Teacher Age' value={teacherAge} onChange={(e) => setTeacherAge(e.target.value)} />
                        {
                            validMessage.value === "teacherAge" ? <p>{validMessage.msg}</p> : null
                        }

                    </div>
                    <div className="signUpNameHolder">
                        <div className="signUpNameIconDiv">
                            <AiOutlineMail className='signUpNameIcon' />
                        </div>
                        <input className='signUpNameInput' type="email" placeholder='Teacher Email' value={teacherEmail} onChange={(e) => setTeacherEmail(e.target.value)} />
                        {
                            validMessage.value === "teacherEmail" ? <p>{validMessage.msg}</p> : null
                        }

                    </div>
                    <div className="signUpNameHolder">
                        <div className="signUpNameIconDiv">
                            <AiOutlineFileImage className='signUpNameIcon' />
                        </div>
                        <div className="signUpTeacherInput">
                            <input className='' type="file" placeholder='Teacher Image' accept='image*/' onChange={File} />

                        </div>
                        {
                            validMessage.value === "teacherImage" ? <p>{validMessage.msg}</p> : null
                        }

                    </div>
                    <div className="signUpPasswordHolder">
                        <div className="signUpPasswordIconDiv">
                            <RiLockPasswordFill className='signUpNameIcon' />
                        </div>
                        <input className='signUpPassordInput' type={signUpPass ? "text" : "password"} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className="signUpshowPassword">
                            {signUpPass ?
                                <BiSolidHide style={{ cursor: "pointer" }} onClick={() => setSignUpPass(false)} /> : <BiSolidShow style={{ cursor: "pointer" }} onClick={() => setSignUpPass(true)} />}
                        </div>
                        {
                            validMessage.value === "password" ? <p>{validMessage.msg}</p> : null
                        }

                    </div>
                    <div className="signUpPasswordHolder">
                        <div className="signUpPasswordIconDiv">
                            <RiLockPasswordFill className='signUpNameIcon' />
                        </div>
                        <input className='signUpPassordInput' type={signUpConfirmPass ? "text" : "password"} placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <div className="signUpshowPassword">
                            {signUpConfirmPass ?
                                <BiSolidHide style={{ cursor: "pointer" }} onClick={() => setSignUpConfirmPass(false)} /> : <BiSolidShow style={{ cursor: "pointer" }} onClick={() => setSignUpConfirmPass(true)} />}
                        </div>
                        {
                            validMessage.value === "confirmPasswordError" ? <p>{validMessage.msg}</p> : null
                        }

                        {
                            validMessage.value === "confirmPassword" ? <p>{validMessage.msg}</p> : null
                        }

                    </div>
                    {/* <p style={{ width: "95%" }}>Already have an Account? <span className='LoginSpan' onClick={() => navigate("/teacher_login")}>Log In</span></p> */}
                    <div className="signUpPasswordHolder">
                        <button className='signUpSubmitBtn' onClick={teacherRegister}>{
                            loading ? < SpinnerCircular 
                            size={35}
                                thickness={99}
                                speed={100}
                                color="rgba(18, 124, 221, 1)"/> : "Submit"
                        }</button>
                    </div>
                </div>
            </div>
            <p>{successErrorMessage}</p>
        </>
    )
}

export default SignUp