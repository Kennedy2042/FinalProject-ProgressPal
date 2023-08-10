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
import { useSelector } from 'react-redux'
import AdminUser from './AdminDashboard/AdminUser'



const Admin = () => {
    const navigate = useNavigate()
    const schoolUsers = useSelector(state => state.persisitedReducer.School)
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
                                    <BiHomeAlt size={30} className='AdminDashboardIconsImage' />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p className='AdminDashboardIconsImageName'>Dashboard</p>
                                </div>
                            </div>
                            <div className="AdminDashboardIcons" onClick={() => navigate("/Admin_Dashboard/admin_student_dashboard")}>
                                <div className='AdminHomeIcon'>
                                    <PiStudentDuotone size={30} className='AdminDashboardIconsImage' />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p className='AdminDashboardIconsImageName'>Students</p>
                                </div>
                            </div>
                            <div className="AdminDashboardIcons" onClick={() => navigate("/Admin_Dashboard/admin_teacher_dashboard")}>
                                <div className='AdminHomeIcon'>
                                    <FaChalkboardTeacher size={30} className='AdminDashboardIconsImage' />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p className='AdminDashboardIconsImageName'>Teachers</p>
                                </div>
                            </div>
                            <div className="AdminDashboardIcons">
                                <div className='AdminHomeIcon'>
                                    <MdEmojiEvents size={30} className='AdminDashboardIconsImage' />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p className='AdminDashboardIconsImageName'>Events</p>
                                </div>
                            </div>
                            <div className="AdminDashboardIcons">
                                <div className='AdminHomeIcon'>
                                    <AiOutlineUser size={30} className='AdminDashboardIconsImage' />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p className='AdminDashboardIconsImageName'>User</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='DashBoardRightBody'>
                    {/* <div className='AdminDashBoardRightBodyUpperBody'>tfufyufguygyu</div>
                    <div className='AdminDashBoardLowerBodyUpperBody'>
                        <div className='AdminDashBoardLowerBodyUpperBodyTitle'>
                            <h3>Admin Dashboard</h3>
                        </div>
                        <div className='AdminDashboardTotalStudentsCards'>
                            <div className='AdminTotalTeacher'></div>
                            <div className='AdminTotalTeacher'></div>
                            <div className='AdminTotalTeacher'></div>
                        </div>
                        <div className='AdminDashboardPerformance'>
                            <div className='AdminDashboardPerformanceDetailCard'>
                                <div className='AdminDashboardPerformanceDetailCardTop'>
                                    <h4>
                                        Exam Details
                                    </h4>
                                    <div className="ExamDetailsCard"></div>
                                </div>
                                <div className='AdminDashboardPerformanceDetailCardDown'>
                                    <h4>
                                        Performance Details
                                    </h4>
                                    <div className="PerformanceDetailsCard"></div>
                                </div>
                            </div>
                            <div className='AdminDashboardPerformanceDetailCardRight'></div>
                        </div>
                    </div> */}
                    {/* <AdminUser/> */}
                    <Routes>
                        <Route path='/admin_teacher_dashboard' element={<AdminTeacherDashboard />} />
                        <Route path='/admin_student_dashboard' element={<AdminStudentDashboard />} />
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