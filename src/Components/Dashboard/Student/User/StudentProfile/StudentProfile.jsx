import React from 'react'
import { useSelector } from 'react-redux'
import "./StudentProfile.css"
import { useNavigate } from 'react-router-dom'

const StudentUserProfile = () => {
    const studentData = useSelector(state => state.persisitedReducer.loginUser)
    // console.log(studentData)
    const nav = useNavigate()
    return (
        <>
            <span className='StudentDetailsCard'>
                <div className='StudentProfileImage2'>
                    <img src={studentData.data.data.studentPassport} alt="Student Passport" />
                </div>
                <h2 className='StudentName'>{studentData?.data?.data.studentName}</h2>
                <p className='StudentEmails'>{studentData?.data?.data.studentEmail}</p>
                <h4 className='StudentClass'>{studentData?.data?.data.studentClass}</h4>
                <button className='StudentsUpdateButton' 
                onClick={
                    ()=>{
                        nav(`/Dashboard/student/studentUser/editProfile/${studentData.data.data._id}`)
                    }
                }>Edit Profile</button>
            </span>
        </>
    )
}

export default StudentUserProfile