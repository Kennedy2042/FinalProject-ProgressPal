import React, { useState, useEffect } from 'react'
import "./AdminTeacherDashboard.css"
import "./AdminTeacherDashboardMedia.css"
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'
import AboutUsImage from "../../../../assets/AboutUsImage.png"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { adminAllTeacherApi } from '../../../../Redux/ProductState'
import TeacherProfile from './TeacherProfile/TeacherProfile'
import Swal from 'sweetalert2'
import { SpinnerCircular } from "spinners-react"






const AdminTeacherDashboard = () => {
    const schoolUsers = useSelector(state => state.persisitedReducer.School)
    const allTeacher = useSelector(state => state.persisitedReducer.adminTeachApi)
    const [addTeacher, setAddTeacher] = useState(false)
    const [teacherEmail, setTeacherEmail] = useState("")
    const [viewTeacherProfile, setViewTeacherProfile] = useState(false)
    const [teacherId, setTeacherId] = useState("")
    const [loading, setLoading] = useState(false)

    // console.log(allTeacher)

    const BearerToken = schoolUsers.token
    // console.log(BearerToken)

    const data = { teacherEmail }
    const dispatch = useDispatch()

    const teacherEmailData = new FormData()
    teacherEmailData.append("teacherEmail", teacherEmail)
    // console.log(teacherEmail)
    const showAlert = () => {
        Swal.fire({
            title: 'Register Link',
            text: 'You are about to send an Email, a Teacher Registration link',
            icon: 'info',
            cancelButtonColor: 'cyan',
            showCancelButton: true,
            confirmButtonText: 'yes',
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true)

                CreateTeacher()
            }
        });
    }

    async function CreateTeacher() {
        const url = "https://progresspal-8rxj.onrender.com/progressPal/teacherLink"
        const config = {
            headers: {
                Authorization: `Bearer ${BearerToken}`
            }
        }

        console.log(url, schoolUsers._id, data)
        axios.post(`${url}/${schoolUsers._id}`, data, config)
            .then((res) => {
                console.log(res)
                Swal.fire({
                    title: "Success!",
                    text: res.data.message,
                    icon: "success",
                    confirmButtonText: "Ok"
                })
                setLoading(false)
                setAddTeacher(false)


            })
            .catch((err) => {
                console.log(err)
                if (err?.message === "Network Error") {
                    Swal.fire({
                        title: "Registration Failed",
                        text: err.message,
                        icon: "error",
                        confirmButtonText: "okay"
                    })
                    setLoading(false)
                    setAddTeacher(false)

                }
                Swal.fire({
                    title: "Error!",
                    text: err.data.message,
                    icon: "error",
                    confirmButtonText: "Ok"
                })
                setLoading(false)
                setAddTeacher(false)


            })
    }

    // const createTeacher = async(e) => {
    //     // setTeacherEmail({teacherEmail, [e.target.name]::})
    // }
    {
        console.log(schoolUsers)
    }


    const teacherUrl = `https://progresspal-8rxj.onrender.com/progressPal/schoolTeachers/${schoolUsers._id}`

    async function GetAllTeacher() {
        axios.get(teacherUrl)
            .then((res) => {
                console.log(res.data.data)
                dispatch(adminAllTeacherApi(res.data.data))
                setAddTeacher(false)
            })
            .catch((err) => {
                console.log(err)
                setAddTeacher(false)

            })
    }

    useEffect(() => {
        GetAllTeacher()
    }, [])
    const nav = useNavigate()


    return (
        <>

            <div className='TeacherDashBoardRightBodyTitle'>
                <div className='DashBoardRightBodyTitleHolderDiv'>
                    <h1 className='DashboardRightBodyTitleH1'>Teachers</h1>
                </div>
                <div className='DashboardSearchIconDiv'>
                    <input type="text" placeholder='Search here' className='DashboardSearchIconInput' />
                    <div className="DashboardSearchIconInputImage">
                        <AiOutlineSearch size={20} />
                    </div>
                </div>
                <div className='AdminDashboardAddTeacherBtnDiv'>
                    <button className='AdminDashboardAddTeacherBtn' onClick={() => setAddTeacher(true)}>Add Teacher</button>
                </div>
            </div>
            <div className='AdminDashboardTeachersCard'>
                {
                    allTeacher.length === 0 ? <h2>No Teachers added</h2> : 
                    (
                            allTeacher.map((props) => (
                                <div className='AdminDashboardTeachersCardBody' key={props?._id}>
                                    <div className='AdminDashboardTeachersImageDiv'>
                                        <img src={AboutUsImage} alt="" />
                                    </div>
                                    <div className='AdminDashboardTeachersDetail'>
                                        <div className='AdminDashboardTeachersDetailH3'>
                                            Name: <h3 className='DashboardSchoolName'>{props.teacherName}</h3>
                                        </div>
                                        <div className='AdminDashboardTeachersDetailH3'>
                                            Email: <h5>{props.teacherEmail}</h5>
                                        </div>
                                        <button className='AdminDashboardViewTeachProfile' onClick={
                                            () => {
                                                setViewTeacherProfile(true)
                                                // setTeacherId(props._id)
                                                nav(`/admindashboard/teacherProfile/${props._id}`)
        
                                            }
                                        }>View Profile</button>
                                    </div>
                                </div>
                            ))
                        
                    )
                }

            </div>
            {
                addTeacher ? <div className='AddTeacherPop'>
                    <AiOutlineCloseCircle className='CloseAddTeacherInput' size={60} onClick={() => setAddTeacher(false)} />
                    <div className='EmailHolder'>
                        <input type="email" placeholder='Enter teacher' className='TeacherInput' value={teacherEmail} onChange={(e) => setTeacherEmail(e.target.value)} />
                        <button className='AddTeacherSendBtn' onClick={() => {
                            showAlert()
                        }}>{
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
                </div> : null
            }

            {
                viewTeacherProfile ? <TeacherProfile teacherId={teacherId} /> : null
            }
        </>
    )
}

export default AdminTeacherDashboard