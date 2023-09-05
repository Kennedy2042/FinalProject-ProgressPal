import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import "./AdminStudentDashboard.css"
import "./AdminStudentDashboardMedia.css"
import { AiOutlineCloseCircle } from "react-icons/ai"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { adminAllStudentApi } from '../../../../Redux/ProductState'
import { useNavigate } from 'react-router-dom'
import StudentProfile from './StudentProfile/StudentProfile'


const AdminStudentDashboard = () => {
    const teacherData = useSelector(state => state.persisitedReducer.loginUser)
    console.log(teacherData)
    const studentData = useSelector(state => state.persisitedReducer.AdminStudentApi)
    const BearerToken = teacherData.data.token
    const [addStudents, setAddStudents] = useState(false)
    const [studentName, setStudentName] = useState("")
    const [studentClass, setStudentClass] = useState("")
    const [studentAge, setStudentAge] = useState("")
    const [studentEmail, setStudentEmail] = useState("")
    const [password, setPassword] = useState("")
    const [studentPassport, setStudentPassport] = useState("")
    const [viewprofile, setViewProfile] = useState(false)
    const [viewprofileId, setViewProfileId] = useState("")

    const File = (e) => {
        const file = e.target.files[0];
        setStudentPassport(file);
        console.log(file);
    };

    const url = `https://progresspal-8rxj.onrender.com/progressPal/newStudent/${teacherData.data.data._id}`;

    async function Register(e) {
        e.preventDefault()

        const data = new FormData()
        data.append("studentName", studentName)
        data.append("studentClass", studentClass)
        data.append("studentAge", studentAge)
        data.append("studentEmail", studentEmail)
        data.append("password", password)
        data.append("studentPassport", studentPassport)
        axios.post(url, data, {
            headers: {
                "Content-type": "multipart/form-data",
                Authorization: `Bearer ${BearerToken}`

            }
        })
            .then((res) => {
                console.log(res)
            })
        // .catch((err) => {
        //     console.log(err)
        // })
    }


    const dispatch = useDispatch()
    const adminStudent = `https://progresspal-8rxj.onrender.com/progressPal/schoolStudents/${teacherData.data.data._id}`;
    async function GetAllStudent() {
        axios.get(adminStudent)
            .then((res) => {
                console.log(res)
                dispatch(adminAllStudentApi(res.data.data))
                console.log("first", res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        GetAllStudent()
    }, [])

    console.log(studentData)
    const nav = useNavigate()





    return (
        <>
            <div className='StudentDashBoardRightBodyTitle'>
                <div className='StudentDashBoardRightBodyTitleHolderDiv'>
                    <h1 className='StudentDashboardRightBodyTitleH1'>Students</h1>
                </div>
                <div className='StudentDashboardSearchIconDiv'>
                    {/* <input type="text" placeholder='Search here' className='DashboardSearchIconInput' />
                    <div className="StudentDashboardSearchIconInputImage">
                        <AiOutlineSearch size={20} />
                    </div> */}
                </div>
                <div className='AdminStudentDashboardAddTeacherBtnDiv'>
                    {/* <button className='AdminStudentDashboardAddTeacherBtn' onClick={() => {
                        setAddStudents(true)
                    }}>Add Student</button> */}
                </div>
            </div>
            <div className='AdminDashboardTeachersCard'>
                {
                    studentData.map((props) => (
                        // <div className='AdminDashboardTeachersCardBody' key={props?._id}>
                        //     <div className='AdminDashboardTeachersImageDiv'>
                        //         <img src={props.studentPassport} alt="" />
                        //     </div>
                        //     <div className='AdminDashboardTeachersDetail'>
                        //         <div className='AdminDashboardTeachersDetailH3'>
                        //             Name: <h3>{props.studentName}</h3>
                        //         </div>
                        //         <div className='AdminDashboardTeachersDetailH3'>
                        //             Email: <h5>{props.studentEmail}</h5>
                        //         </div>
                        //         <h4></h4>
                        //         <button className='AdminDashboardViewTeachProfile'
                        //         onClick={
                        //             ()=>{
                        //             setViewProfile(true)
                        //             setViewProfileId(props._id)
                        //         }
                        //         }>View Profile</button>
                        //     </div>
                        // </div>

                        <span className='TeacherStudentDetailsCard' key={props?._id}>
                            <div className='TeacherStudentMainDetailsHolder'>
                                <div className='TeacherStudentProfileImage2'>
                                    <img src={props?.studentPassport} alt="student Passport" />
                                </div>
                                <h2 className='TeacherStudentName'>{props?.studentName}</h2>
                                <p className='TeacherStudentEmail'>{props?.studentEmail}</p>
                                <h4 className='TeacherStudentClass'>{props?.studentClass}</h4>
                            </div>
                            <div className='TeacherUpdateStudentProfileHolder'>
                                <button className='TeacherAddStudentResult' onClick={() => {
                                    nav(`/admin_studentResult/${props?._id}`)
                                }}>View Result</button>
                                <button className='TeacherViewStudentProfileBtn' onClick={() => {
                                    setViewProfile(true)
                                    setViewProfileId(props._id)
                                }}>View Profile</button>
                            </div>
                        </span>
                    ))
                }


            </div >

            {
                addStudents ? <div className="AddStudentPop">
                    < AiOutlineCloseCircle size={50} style={{ fill: "red", cursor: "pointer" }
                    } onClick={() => {
                        setAddStudents(false)
                    }} />
                    < div className="AddStudentPopDiv" >

                        {/* <div className="StudentEmailInput"> */}
                        < h3 > STUDENT INFO</h3 >
                        <input type="text" placeholder='Student Name' className='StudentEmail' value={studentName} onChange={(e) => setStudentName(e.target.value)} />
                        <input type="text" placeholder='Student Class' className='StudentEmail' value={studentClass} onChange={(e) => setStudentClass(e.target.value)} />
                        <input type="text" placeholder='Student Age' className='StudentEmail' value={studentAge} onChange={(e) => setStudentAge(e.target.value)} />
                        <input type="email" placeholder='Student Email' className='StudentEmail' value={studentEmail} onChange={(e) => setStudentEmail(e.target.value)} />
                        <input type="text" placeholder='Student Pin' className='StudentEmail' value={password} onChange={(e) => setPassword(e.target.value)} />

                        <input type="file" placeholder='Student Passport' className='StudentEmail' onChange={File} />
                        <button className='AddStudentButton' onClick={Register}>Send</button>
                        {/* </div> */}
                    </div >
                </div > : null
            }
            {
                viewprofile ? <StudentProfile viewprofileId={viewprofileId} /> : null
            }
        </>
    )
}

export default AdminStudentDashboard