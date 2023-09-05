import React, { useEffect, useState } from 'react'
// import './StudentProfile.css'
// import './StudentProfileMedia.css'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { teacherInformation } from '../../../../../Redux/ProductState'
import Swal from 'sweetalert2'
import { SpinnerCircular } from "spinners-react";




const TeacherEditProfile = () => {
    const [loading, setLoading] = useState(false)

    const teacherId = useParams()
    // console.log(teacherId)
    const TeacherData = useSelector(state => state.persisitedReducer.loginUser)
    // console.log(TeacherData)
    const BearerToken = TeacherData.data.token
    // console.log(BearerToken, "first")
    const nav = useNavigate()

    const [studentData, setStudentData] = useState({
        teacherName: "",
        teacherClass: "",
        teacherAge: "",
        teacherEmail: "",
        teacherImage: "",
    })

    const { teacherName, teacherClass, teacherAge, teacherEmail, teacherImage } = studentData

    const onInputChange = (e) => {
        setStudentData({ ...studentData, [e.target.name]: e.target.value })
    }


    const showAlert = () => {

        Swal.fire({
            title: 'Update Info',
            text: 'Are you sure',
            icon: 'warning',
            cancelButtonColor: '#127cdd',
            showCancelButton: true,
            confirmButtonText: 'yes',
            customClass: {
                confirmButton: 'sweet-alert-confirm-btn',
            },
        }).then((result) => {
            if (result.isConfirmed) {
                editStudentInfo()
            }
        });
    };


    async function editStudentInfo() {
        setLoading(!loading);

        axios.put(`https://progresspal-8rxj.onrender.com/progressPal/updateTeacher/${teacherId.teacherId}`, studentData, {
            headers: {
                "Content-type": "multipart/form-data",
                Authorization: `Bearer ${BearerToken}`
            }
        })
            .then((res) => {
                console.log(res)
                Swal.fire({
                    title: "Success!",
                    text: res.data.message,
                    icon: "success",
                    confirmButtonText: "Ok",
                    showConfirmButton: false,
                    timer: 1500
                })
                nav(`/Dashboard/teacher/teacherUser/${teacherId.teacherId}`)
                setLoading(false)


            })
            .catch((err) => {
                console.log(err)
                if (err?.message === "Network Error") {
                    Swal.fire({
                        title: "Update Failed",
                        text: err.message,
                        icon: "error",
                        confirmButtonText: "okay",
                        timer: 1800,
                        showConfirmButton: false,
                    })
                    setLoading(false)

                }
                Swal.fire({
                    title: "Error!",
                    text: err.response.data.message,
                    icon: "error",
                    confirmButtonText: "Ok",
                    timer: 1800,
                    showConfirmButton: false,
                })
                setLoading(false)
            })
    }



    const oneStudentUrl = `https://progresspal-8rxj.onrender.com/progressPal/readOneTeacher/${teacherId.teacherId}`;

    async function getOneStudentApi() {
        axios
            .get(oneStudentUrl)
            .then((res) => {
                //   console.log(res.data.data, "response from api");
                setStudentData(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getOneStudentApi();
    }, []);


    return (
        <>

            <div className='ProfilebodyHolder'>

                <div className='Profilebody'>
                    <div className='ProfileImage'>
                        <img className='ProfileImagecircle' src={teacherImage} alt="Teacher Image" />
                        {/* <div className='ProfileImagecircle'></div> */}
                        <div className='ProfileImageName'>
                            <h2>{teacherName}</h2>
                            {/* <input type="text" value={teacherProfileInfo.teacherName} /> */}
                        </div>
                        <div className='ProfileImageEmail'>
                            <p>{teacherEmail}</p>
                            {/* <input type="text" value={teacherProfileInfo.teacherEmail} /> */}
                        </div>
                        {/* <div className='ProfileImageState'>
                            <p>United state</p>
                        </div> */}
                    </div>
                    <div className='ProfileInput'>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p className='ProfileInputNameinnericonholderP'>Name</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                {/* <div className='ProfileInputNameinnerName'>{teacherProfileInfo.teacherName}</div> */}
                                <input className='ProfileInputNameinnerName' type="text" name='teacherName' value={teacherName} onChange={(e) => onInputChange(e)} />
                            </div>
                        </div>

                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Class</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <input className='ProfileInputNameinnerName' type="text" name='teacherClass' value={teacherClass} onChange={(e) => onInputChange(e)} />                            </div>
                        </div>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Age</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <input className='ProfileInputNameinnerName' type="text" name='teacherAge' value={teacherAge} onChange={(e) => onInputChange(e)} />                            </div>
                        </div>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Email</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <input className='ProfileInputNameinnerName' type="text" value={teacherEmail} onChange={(e) => onInputChange(e)} />                            </div>
                        </div>

                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Image</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <input className='ProfileInputNameinnerName' type="file" name='teacherImage' accept="image/*" onChange={(e) => onInputChange(e)} />                            </div>
                        </div>
                        <div className='ProfileBtn'>
                            <button className='ProfileSendButton' onClick={showAlert}>{loading ? (
                                <SpinnerCircular
                                    size={22}
                                    thickness={99}
                                    speed={100}
                                    color="rgba(18, 124, 221, 1)"
                                />
                            ) : (
                                "Save"
                            )}</button>
                            <button className='ProfileDeleteButton' onClick={() => {
                                nav(`/Dashboard/teacher/teacherUser/${teacherId.teacherId}`)
                            }}>Back</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TeacherEditProfile;