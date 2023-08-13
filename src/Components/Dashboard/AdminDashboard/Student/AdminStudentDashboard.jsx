import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import AboutUsImage from "../../../../assets/AboutUsImage.png"
import "./AdminStudentDashboard.css"
import "./AdminStudentDashboardMedia.css"


const AdminStudentDashboard = () => {
    return (
        <>
            <div className='DashBoardRightBodyTitle'>
                <div className='DashBoardRightBodyTitleHolderDiv'>
                    <h1 className='DashboardRightBodyTitleH1'>Students</h1>
                </div>
                <div className='DashboardSearchIconDiv'>
                    <input type="text" placeholder='Search here' className='DashboardSearchIconInput' />
                    <div className="DashboardSearchIconInputImage">
                        <AiOutlineSearch size={20} />
                    </div>
                </div>
                <div className='AdminDashboardAddTeacherBtnDiv'>
                    <button className='AdminDashboardAddTeacherBtn'>Add Student</button>
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
        </>
    )
}

export default AdminStudentDashboard