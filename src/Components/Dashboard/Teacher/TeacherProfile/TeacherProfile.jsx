import React from 'react'
import { useSelector } from 'react-redux'
import "./TeacherProfile.css"
import { useNavigate } from 'react-router-dom'

const TeacherUserProfile = () => {
    const TeacherData = useSelector(state => state.persisitedReducer.loginUser)
    // console.log(TeacherData)
    const nav = useNavigate()
    return (
        <>
            <span className='TeacherDetailsCard'>
                <div className='TeacherProfileImage2'>
                    <img src={TeacherData?.data?.data.teacherImage} alt="Teacher Image" />
                </div>
                <h2 className='TeacherName'>{TeacherData?.data?.data.teacherName}</h2>
                <p className='TeacherEmails'>{TeacherData?.data?.data.teacherEmail}</p>
                <h4 className='TeacherClass'>{TeacherData?.data?.data.teacherClass}</h4>
                <button className='TeachersUpdateButton' 
                onClick={()=>{
                    nav(`/Dashboard/teacher/teacherUser/editProfile/${TeacherData?.data?.data._id}`)
                }}
                
                >Edit Profile</button>
            </span>
        </>
    )
}

export default TeacherUserProfile