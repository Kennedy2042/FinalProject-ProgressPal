import React, { useEffect, useState } from 'react'
// import './StudentProfile.css'
// import './StudentProfileMedia.css'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { teacherInformation } from '../../../../../Redux/ProductState'
import Swal from 'sweetalert2'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import "./TeacherProfile.css"



const TeacherProfile = () => {
    const teacherId = useParams()
    const dispatch = useDispatch()
    const teacherProfileInfo = useSelector(state => state.persisitedReducer.teacherInfo)
    const Users = useSelector(state => state.persisitedReducer.loginUser)
    const navigate = useNavigate()
    // console.log('first', teacherProfileInfo)
    console.log(teacherId)


    const url = `https://progresspal-8rxj.onrender.com/progressPal/readOneTeacher/${teacherId.teacherId}`

    async function GetTeacherInfo() {
        axios.get(url)
            .then((res) => {
                console.log(res, "teacherIngo")
                dispatch(teacherInformation(res.data.data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        GetTeacherInfo()
    }, [])
    console.log(Users)
    const BearerToken = Users.data.token
    // console.log("first", BearerToken)
    const config = {
        headers: {
            Authorization: `Bearer ${BearerToken}`
        }
    }

    const deleteUrl = `https://progresspal-8rxj.onrender.com/progressPal/deleteTeacher/${teacherId.teacherId}`
    const showAlert = () => {
        Swal.fire({
            title: 'Delete Teacher',
            text: 'Are you sure',
            icon: 'warning',
            cancelButtonColor: 'green',
            showCancelButton: true,
            confirmButtonText: 'yes',
            customClass: {
                confirmButton: 'sweet-alert-confirm-btn',
            },
        }).then((result) => {
            if (result.isConfirmed) {
                DeleteTeacher()
            }
        });
    };
    async function DeleteTeacher() {
        axios.delete(deleteUrl, config)
            .then((res) => {
                console.log(res)
                navigate("Dashboard/schoolAdmin/admin_teacher_dashboard")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>

            <div className='TeacherProfilebodyHolder'>


                <div className='Profilebody'>

                    <div className='ProfileImage'>
                        <div className="BackArrowDiv">
                            <MdOutlineKeyboardBackspace size={35} style={{ cursor: "pointer" }} onClick={
                                () => {
                                    navigate("/Dashboard/schoolAdmin/admin_teacher_dashboard")

                                }
                            } />
                        </div>
                        <div className='ProfileImagecircle' >
                            <img src={teacherProfileInfo?.teacherImage} alt="" />

                        </div>
                        {/* <div className='ProfileImagecircle'></div> */}
                        <div className='ProfileImageName'>
                            <h2>{teacherProfileInfo?.teacherName}</h2>
                            {/* <input type="text" value={teacherProfileInfo.teacherName} /> */}
                        </div>
                        <div className='ProfileImageEmail'>
                            <p>{teacherProfileInfo?.teacherEmail}</p>
                            {/* <input type="text" value={teacherProfileInfo.teacherEmail} /> */}
                        </div>

                    </div>

                    <div className='ProfileInput'>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Name</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{teacherProfileInfo?.teacherName}</div>
                            </div>
                        </div>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Class</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{teacherProfileInfo?.teacherClass}</div>
                            </div>
                        </div>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Age</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{teacherProfileInfo?.teacherAge}</div>
                            </div>
                        </div>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Email</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{teacherProfileInfo?.teacherEmail}</div>
                            </div>
                        </div>

                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Image</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{teacherProfileInfo?.teacherImage}</div>
                            </div>
                        </div>
                        <div className='ProfileBtn'>
                            <Link className="ProfileEditButtonLink" to={`/admindashboard/editteacherProfile/${teacherProfileInfo?._id}`}><button className='ProfileEditButton'>Edit</button></Link>
                            <button className='ProfileDeleteButton' onClick={showAlert}>Delete</button>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default TeacherProfile