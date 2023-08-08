import './Admin.css'
import ProgressPalLogo from "../../assets/ProgressPalLogo.png"
import AboutUsImage from "../../assets/AboutUsImage.png"
import { BiHomeAlt } from 'react-icons/bi'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { PiStudentDuotone } from 'react-icons/pi'
import { MdEmojiEvents } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { Route, Routes, useNavigate } from 'react-router-dom'
import React from 'react'
import AdminTeacherDashboard from './AdminDashboard/Teacher/AdminTeacherDashboard'
import AdminStudentDashboard from './AdminDashboard/Student/AdminStudentDashboard'



const Admin = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="AdminDashboardContainer">
                <div className="AdminDashboardSideMenu">
                    <div className="AdminDashboardSideMenuLogo">
                        <img src={ProgressPalLogo} alt="" />
                    </div>
                    <div className="AdminDashboardSideMenuMainBody">
                        <div className='AdminDashboardSideMenuIconDiv'>
                            <div className="AdminDashboardIcons">
                                <div className='AdminHomeIcon'>
                                    <BiHomeAlt size={30} />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p>Dashboard</p>
                                </div>
                            </div>
                            <div className="AdminDashboardIcons" onClick={()=> navigate("./admin_student_dashboard")}>
                                <div className='AdminHomeIcon'>
                                    <PiStudentDuotone size={30} />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p>Students</p>
                                </div>
                            </div>
                            <div className="AdminDashboardIcons" onClick={()=> navigate("./admin_teacher_dashboard")}>
                                <div className='AdminHomeIcon'>
                                    <FaChalkboardTeacher size={30} />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p>Teachers</p>
                                </div>
                            </div>
                            <div className="AdminDashboardIcons">
                                <div className='AdminHomeIcon'>
                                    <MdEmojiEvents size={30} />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p>Events</p>
                                </div>
                            </div>
                            <div className="AdminDashboardIcons">
                                <div className='AdminHomeIcon'>
                                    <AiOutlineUser size={30} />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p>User</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='DashBoardRightBody'>
                    <Routes>
                        <Route path='/admin_teacher_dashboard' element={<AdminTeacherDashboard/>} />
                        <Route path='/admin_student_dashboard' element={<AdminStudentDashboard/>} />
                    </Routes>

                    {/* <div className='DashBoardRightBodyTitle'>
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
                            <button className='AdminDashboardAddTeacherBtn'>Add Teacher</button>
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
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Admin