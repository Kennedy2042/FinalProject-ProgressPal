import React, { useEffect, useState } from 'react'
// import './StudentProfile.css'
// import './StudentProfileMedia.css'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { teacherInformation } from '../../../../../Redux/ProductState'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'


const EditTeacherProfile = () => {
    const teacherId = useParams()
    const navigate = useNavigate()
    const teacherProfileInfo = useSelector((state) => state.persisitedReducer.teacherInfo)
    const teacherInfo = useSelector(state => state.persisitedReducer.loginUser)
    const BearerToken = teacherInfo.data.token
    console.log(BearerToken, "first")

    const [teacherData, setTeacherData] = useState({
        teacherName: "",
        teacherClass: "",
        teacherAge: "",
        teacherEmail: "",
        teacherImage: "",
    })

    const { teacherName, teacherClass, teacherAge, teacherEmail, teacherImage } = teacherData

    const onInputChange = (e) => {
        setTeacherData({ ...teacherData, [e.target.name]: e.target.value })
    }

    async function editTeacherInfo() {
        axios.put(`https://progresspal-8rxj.onrender.com/progressPal/updateTeacher/${teacherProfileInfo._id}`, teacherData, {
            headers: {
                "Content-type": "multipart/form-data",
                Authorization: `Bearer ${BearerToken}`
            }
        })
            .then((res) => {
                console.log(res)
                navigate("/Dashboard/schoolAdmin/admin_teacher_dashboard")
            })
            .catch((err) => {
                console.log(err)
            })
    }



    const url = `https://progresspal-8rxj.onrender.com/progressPal/readOneTeacher/${teacherProfileInfo._id}`

    async function GetTeacherInfo() {
        axios.get(url)
            .then((res) => {
                console.log(res)
                setTeacherData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        GetTeacherInfo()
    }, [])


    return (
        <>
            <div className='TeacherProfilebodyHolder'>


                <div className='ProfilebodyHolder'>

                    <div className='Profilebody'>
                        <div className='ProfileImage'>
                            <div className="BackArrowDiv">
                                <MdOutlineKeyboardBackspace size={35} style={{ cursor: "pointer" }} onClick={
                                    () => {
                                        navigate("/Dashboard/schoolAdmin/admin_teacher_dashboard")

                                    }
                                } />
                            </div>
                            <div className='ProfileImagecircle'>
                                <img src={teacherProfileInfo.teacherImage} alt="" />

                            </div>
                            <div className='ProfileImageName'>
                                <h2>{teacherProfileInfo.teacherName}</h2>
                            </div>
                            <div className='ProfileImageEmail'>
                                <p>{teacherProfileInfo.teacherEmail}</p>
                            </div>

                        </div>
                        <div className='ProfileInput'>
                            <div className='ProfileInputName'>
                                <div className='ProfileInputNameinner'>
                                    <div className='ProfileInputNameinnericonholder'>
                                        <p className='ProfileInputNameinnericonholderP'>Name</p>
                                        <BiDotsVerticalRounded />
                                    </div>

                                    <input className='ProfileInputNameinnerName' type="text" name='teacherName' value={teacherName} onChange={(e) => onInputChange(e)} />
                                </div>
                            </div>

                            <div className='ProfileInputName'>
                                <div className='ProfileInputNameinner'>
                                    <div className='ProfileInputNameinnericonholder'>
                                        <p>Class</p>
                                        <BiDotsVerticalRounded />
                                    </div>

                                    <input className='ProfileInputNameinnerName' type="text" name='teacherClass' value={teacherClass} onChange={(e) => onInputChange(e)} />
                                </div>
                            </div>
                            <div className='ProfileInputName'>
                                <div className='ProfileInputNameinner'>
                                    <div className='ProfileInputNameinnericonholder'>
                                        <p>Age</p>
                                        <BiDotsVerticalRounded />
                                    </div>

                                    <input className='ProfileInputNameinnerName' type="text" name='teacherAge' value={teacherAge} onChange={(e) => onInputChange(e)} />
                                </div>
                            </div>
                            <div className='ProfileInputName'>
                                <div className='ProfileInputNameinner'>
                                    <div className='ProfileInputNameinnericonholder'>
                                        <p>Email</p>
                                        <BiDotsVerticalRounded />
                                    </div>

                                    <input className='ProfileInputNameinnerName' type="text" name='teacherEmail' value={teacherEmail} onChange={(e) => onInputChange(e)} />
                                </div>
                            </div>

                            <div className='ProfileInputName'>
                                <div className='ProfileInputNameinner'>
                                    <div className='ProfileInputNameinnericonholder'>
                                        <p>Image</p>
                                        <BiDotsVerticalRounded />
                                    </div>

                                    <input className='ProfileInputNameinnerName' type="file" name='teacherImage' onChange={(e) => onInputChange(e)} />
                                </div>
                            </div>
                            <div className='ProfileBtn'>
                                <button className='ProfileSendButton' onClick={editTeacherInfo}>Save</button>
                                <button className='ProfileDeleteButton'>Delete</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditTeacherProfile