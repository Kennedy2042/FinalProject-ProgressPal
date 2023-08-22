import React, { useEffect, useState } from 'react'
// import './StudentProfile.css'
// import './StudentProfileMedia.css'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { teacherInformation } from '../../../../../Redux/ProductState'


const TeacherProfile = () => {
    const teacherId = useParams()
    const dispatch = useDispatch()
    const teacherProfileInfo = useSelector((state) => state.persisitedReducer.teacherInfo)

    const url = `https://progresspal-8rxj.onrender.com/progressPal/readOneTeacher/${teacherId.studentId}`

    async function GetTeacherInfo() {
        axios.get(url)
            .then((res) => {
                console.log(res)
                dispatch(teacherInformation(res.data.data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        GetTeacherInfo()
    }, [])

    // console.log(viewProfileId)

    console.log(teacherId)
    console.log('first', teacherProfileInfo)


    const deleteUrl = `https://progresspal-8rxj.onrender.com/progressPal/deleteTeacher/${teacherId.studentId}`
async function DeleteTeacher(){
    axios.delete(deleteUrl)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}

    return (
        <>

            <div className='ProfilebodyHolder'>

                <div className='Profilebody'>
                    <div className='ProfileImage'>
                        <img className='ProfileImagecircle' src={teacherProfileInfo.teacherImage} alt="" />
                        {/* <div className='ProfileImagecircle'></div> */}
                        <div className='ProfileImageName'>
                            <h2>{teacherProfileInfo.teacherName}</h2>
                            {/* <input type="text" value={teacherProfileInfo.teacherName} /> */}
                        </div>
                        <div className='ProfileImageEmail'>
                            <p>{teacherProfileInfo.teacherEmail}</p>
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

                                <div className='ProfileInputNameinnerName'>{teacherProfileInfo.teacherName}</div>
                            </div>
                        </div>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Class</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{teacherProfileInfo.teacherClass}</div>
                            </div>
                        </div>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Age</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{teacherProfileInfo.teacherAge}</div>
                            </div>
                        </div>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Email</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{teacherProfileInfo.teacherEmail}</div>
                            </div>
                        </div>

                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Image</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{teacherProfileInfo.teacherImage}</div>
                            </div>
                        </div>
                        <div className='ProfileBtn'>
                            <Link className="ProfileEditButtonLink" to={`/admindashboard/editteacherProfile/${teacherProfileInfo._id}`}><button className='ProfileEditButton'>Edit</button></Link>
                            <button className='ProfileDeleteButton' onClick={DeleteTeacher}>Delete</button>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default TeacherProfile