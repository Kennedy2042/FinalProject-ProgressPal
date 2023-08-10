import React, { useState } from 'react'
import "./AdminTeacherDashboard.css"
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'
import AboutUsImage from "../../../../assets/AboutUsImage.png"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'





const AdminTeacherDashboard = () => {
    const schoolUsers = useSelector(state => state.persisitedReducer.School)
    const [addTeacher, setAddTeacher] = useState(false)
    const [teacherEmail, setTeacherEmail] = useState("")


    const data ={teacherEmail}

    const teacherEmailData = new FormData()
    teacherEmailData.append("teacherEmail", teacherEmail)
    // console.log(teacherEmail)

    async function CreateTeacher(){
        const url = "https://progresspal-8rxj.onrender.com/progressPal/teacherLink"
        console.log(url, schoolUsers._id, data)
        axios.post(`${url}/${schoolUsers._id}`,data)
            .then ((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    // const createTeacher = async(e) => {
    //     // setTeacherEmail({teacherEmail, [e.target.name]::})
    // }


    return (
        <>
        
            <div className='DashBoardRightBodyTitle'>
                <div className='DashBoardRightBodyTitleHolderDiv'>
                    <h1 className='DashboardRightBodyTitle'>Teachers</h1>
                </div>
                <div className='DashboardSearchIconDiv'>
                    <input type="text" placeholder='Search here' className='DashboardSearchIconInput' value={teacherEmail} onChange={(e) => setTeacherEmail(e.target.value)} />
                    <div className="DashboardSearchIconInputImage">
                        <AiOutlineSearch size={20} />
                    </div>
                </div>
                <div className='AdminDashboardAddTeacherBtnDiv'>
                    <button className='AdminDashboardAddTeacherBtn'  onClick={() => setAddTeacher(true)}>Add Teacher</button>
                </div>
            </div>
            <div className='AdminDashboardTeachersCard'>
                <div className='AdminDashboardTeachersCardBody'>
                    <div className='AdminDashboardTeachersImageDiv'>
                        <img src={AboutUsImage} alt="" />
                    </div>
                    <div className='AdminDashboardTeachersDetail'>
                        <div className='AdminDashboardTeachersDetailH3'>
                            Name: <h3>{schoolUsers.schoolName}</h3>
                        </div>
                        <div className='AdminDashboardTeachersDetailH3'>
                            Email: <h5>{schoolUsers.schoolEmail}</h5>
                        </div>
                        <h4></h4>
                        <button className='AdminDashboardViewTeachProfile'>View Profile</button>
                    </div>
                </div>
            </div>
            {
                addTeacher ? <div className='AddTeacherPop'>
                        <AiOutlineCloseCircle className='CloseAddTeacherInput' size={60} onClick={()=>setAddTeacher(false)}/>
                    <div className='EmailHolder'>
                        <input type="email" placeholder='Enter teacher'  className='TeacherInput' value={teacherEmail} onChange={(e)=>setTeacherEmail(e.target.value)}/>
                        <button className='AddTeacherSendBtn' onClick={CreateTeacher}>Send</button>
                    </div>
                </div> : null
            }
        </>
    )
}

export default AdminTeacherDashboard