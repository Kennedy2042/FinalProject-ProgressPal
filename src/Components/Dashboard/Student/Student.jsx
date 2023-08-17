import '../Admin.css'
import ProgressPalLogo from "../../../assets/ProgressPalLogo.png"
import AboutUsImage from "../../../assets/AboutUsImage.png"
import { BiHomeAlt, BiLogOut } from 'react-icons/bi'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { PiStudentDuotone } from 'react-icons/pi'
import { MdEmojiEvents } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Route, Routes, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'


const Student = () => {

    const navigate = useNavigate()
    const schoolUsers = useSelector(state => state.persisitedReducer.School)
    const [menu, setMenu] = useState(false)

  return (
    <>

<div className="AdminDashboardContainer">
                <div className="AdminDashboardContainerMobile">
                    <div className="AdminDashboardMobileHeader">
                        <div className="AdminDashboardMobileHeaderCon">
                            <img src={ProgressPalLogo} alt="" />
                            {
                                menu ? <AiOutlineCloseCircle style={{cursor:"pointer" , fill: "red"}} size={25} onClick={() => {
                                    setMenu(false)
                                }} /> : <RxHamburgerMenu style={{cursor:"pointer"}} size={25} onClick={() => {
                                    setMenu(true)
                                }} />
                            }

                        </div>
                        {
                            menu ?
                                <div className="AdminDashboardMobileDropMenu">
                                    <div className="AdminDashboardIcons" onClick={() => {
                                        navigate()
                                    }}>
                                        <div className='AdminHomeIcon'>
                                            <BiHomeAlt size={30} className='AdminDashboardIconsImage' />
                                        </div>
                                        <div className="AdminHomeIconTitle">
                                            <p className='AdminDashboardIconsImageName'>Dashboard</p>
                                        </div>
                                    </div>
                                    <div className="AdminDashboardIcons" onClick={() => navigate("/Dashboard/loginStudent/admin_student_dashboard")}>
                                        <div className='AdminHomeIcon'>
                                            <PiStudentDuotone size={30} className='AdminDashboardIconsImage' />
                                        </div>
                                        <div className="AdminHomeIconTitle">
                                            <p className='AdminDashboardIconsImageName'>Students</p>
                                        </div>
                                    </div>
                                    {/* <div className="AdminDashboardIcons" onClick={() => navigate("/Dashboard/loginStudent/admin_teacher_dashboard")}>
                                        <div className='AdminHomeIcon'>
                                            <FaChalkboardTeacher size={30} className='AdminDashboardIconsImage' />
                                        </div>
                                        <div className="AdminHomeIconTitle">
                                            <p className='AdminDashboardIconsImageName'>Teachers</p>
                                        </div>
                                    </div> */}
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
                                            <BiLogOut size={30} className='AdminDashboardIconsImage' />
                                        </div>
                                        <div className="AdminHomeIconTitle">
                                            <p className='AdminDashboardIconsImageName'>Logout</p>
                                        </div>
                                    </div>
                                </div> : null
                        }
                    </div>
                </div>


                <div className="AdminDashboardSideMenu">
                    <div className="AdminDashboardSideMenuLogo">
                        <img src={ProgressPalLogo} alt="" />
                    </div>
                    <div className="AdminDashboardSideMenuMainBody">
                        <div className='AdminDashboardSideMenuIconDiv'>
                            <div className="AdminDashboardIcons" onClick={() => {
                                navigate()
                            }}>
                                <div className='AdminHomeIcon'>
                                    <BiHomeAlt size={30} className='AdminDashboardIconsImage' />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p className='AdminDashboardIconsImageName'>Dashboard</p>
                                </div>
                            </div>
                            <div className="AdminDashboardIcons" onClick={() => navigate()}>
                                <div className='AdminHomeIcon'>
                                    <PiStudentDuotone size={30} className='AdminDashboardIconsImage' />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p className='AdminDashboardIconsImageName'>Students</p>
                                </div>
                            </div>
                            {/* <div className="AdminDashboardIcons" onClick={() => navigate("/Admin_Dashboard/admin_teacher_dashboard")}>
                                <div className='AdminHomeIcon'>
                                    <FaChalkboardTeacher size={30} className='AdminDashboardIconsImage' />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p className='AdminDashboardIconsImageName'>Teachers</p>
                                </div>
                            </div> */}
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
                                    <BiLogOut size={30} className='AdminDashboardIconsImage' />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p className='AdminDashboardIconsImageName'>Logout</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='DashBoardRightBody'> 
                    <Routes>
                        {/* <Route path='/teacher_dash_Main' element={<TeacherUser />} /> */}
                        {/* <Route path='/admin_teacher_dashboard' element={<AdminTeacherDashboard />} /> */}
                        {/* <Route path='/teacher_student_dashboard' element={<AdminStudentDashboard />} /> */}
                    </Routes>
                </div>
            </div>
    
    </>
  )
}

export default Student