import React, { useState } from 'react'
import "./AdminTeacherDashboard.css"
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'
import AboutUsImage from "../../../../assets/AboutUsImage.png"




const AdminTeacherDashboard = () => {
    const [addTeacher, setAddTeacher] = useState(false)
    return (
        <>
            <div className='DashBoardRightBodyTitle'>
                <div className='DashBoardRightBodyTitleHolderDiv'>
                    <h1 className='DashboardRightBodyTitle'>Teachers</h1>
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
                <div className='AdminDashboardTeachersCardBody'>
                    <div className='AdminDashboardTeachersImageDiv'>
                        <img src={AboutUsImage} alt="" />
                    </div>
                    <div className='AdminDashboardTeachersDetail'>
                        <div className='AdminDashboardTeachersDetailH3'>
                            Name: <h3>Ogbonna Kennedy Nkemjika</h3>
                        </div>
                        <div className='AdminDashboardTeachersDetailH3'>
                            Email: <h5>Ogbonnakennedy@gmail.com</h5>
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
                        <input type="email" placeholder='Enter teacher'  className='TeacherInput' />
                        <button className='AddTeacherSendBtn'>Send</button>
                    </div>
                </div> : null
            }
        </>
    )
}

export default AdminTeacherDashboard