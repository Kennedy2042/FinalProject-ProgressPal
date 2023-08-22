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
// import AdminUser from './AdminDashboard/User/AdminUser'
import AdminTeacherDashboard from '../AdminDashboard/AdminTeacher/AdminTeacherDashboard'
// import AdminStudentDashboard from '../AdminDashboard/AdminStudent/AdminStudentDashboard'
import TeacherUser from './User/TeacherUser'
import {GrScorecard} from 'react-icons/gr'
import TeacherResult from './TeacherResult/TeacherResult'
import axios from 'axios'
import TeacherStudent from './Student/TeacherStudent'

const Teacher = () => {

    const navigate = useNavigate()
    const teacherData = useSelector (state => state.persisitedReducer.loginUser)
    const BearerToken = teacherData.data.token
    // console.log(BearerToken)

    const [menu, setMenu] = useState(false)

    const showAlert = () => {
        Swal.fire({
            title: 'Log Out',
            text: 'Are you sure',
            icon: 'warning',
            cancelButtonColor: 'green',
            confirmButtonColor: 'red',
            showCancelButton: true,
            confirmButtonText: 'yes',
            customClass: {
                confirmButton: 'sweetAlertConfirmBtn', // Add your custom class here
              },
        }).then((result) => {
            if (result.isConfirmed) {
                TeacherLogout ()
            }
        });
    };


    const url = `https://progresspal-8rxj.onrender.com/progressPal/logoutTeacher/${teacherData.data.data._id}`;  
    async function TeacherLogout () {
        // console.log("dstrstrdd")
        axios.post (url, {
                Authorization : `Bearer ${BearerToken}`
    
        })
        .then ((res)=>{
            console.log(res)
            navigate("/")
        })
        .catch ((err)=>{
            console.log(err)
        })
    }

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
                                        navigate("/Dashboard/teacher/admin_dash_Main")
                                    }}>
                                        <div className='AdminHomeIcon'>
                                            <BiHomeAlt size={30} className='AdminDashboardIconsImage' />
                                        </div>
                                        <div className="AdminHomeIconTitle">
                                            <p className='AdminDashboardIconsImageName'>Dashboard</p>
                                        </div>
                                    </div>
                                    <div className="AdminDashboardIcons" onClick={() => navigate("/Dashboard/teacher/admin_student_dashboard")}>
                                        <div className='AdminHomeIcon'>
                                            <PiStudentDuotone size={30} className='AdminDashboardIconsImage' />
                                        </div>
                                        <div className="AdminHomeIconTitle">
                                            <p className='AdminDashboardIconsImageName'>Students</p>
                                        </div>
                                    </div>
                                    <div className="AdminDashboardIcons" onClick={() => navigate("/Dashboard/teacher/admin_teacher_dashboard")}>
                                        <div className='AdminHomeIcon'>
                                            <FaChalkboardTeacher size={30} className='AdminDashboardIconsImage' />
                                        </div>
                                        <div className="AdminHomeIconTitle">
                                            <p className='AdminDashboardIconsImageName'>Teachers</p>
                                        </div>
                                    </div>
                                    <div className="AdminDashboardIcons">
                                        <div className='AdminHomeIcon'>
                                            <GrScorecard size={30} className='AdminDashboardIconsImage' />
                                        </div>
                                        <div className="AdminHomeIconTitle">
                                            <p className='AdminDashboardIconsImageName'>Results</p>
                                        </div>
                                    </div>
                                    <div className="AdminDashboardIcons" onClick={showAlert}>
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
                                navigate("/Dashboard/teacher/teacherUser/:id")
                            }}>
                                <div className='AdminHomeIcon'>
                                    <BiHomeAlt size={30} className='AdminDashboardIconsImage' />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p className='AdminDashboardIconsImageName'>Dashboard</p>
                                </div>
                            </div>
                            <div className="AdminDashboardIcons" onClick={() => navigate("/Dashboard/teacher/teacher_student_dashboard")}>
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
                            <div className="AdminDashboardIcons" onClick={()=> navigate("/Dashboard/teacher/Teacher_resultSheet")}>
                                <div className='AdminHomeIcon'>
                                    <GrScorecard size={30} className='AdminDashboardIconsImage' />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p className='AdminDashboardIconsImageName'>Results</p>
                                </div>
                            </div>
                            <div className="AdminDashboardIcons" onClick={showAlert}>
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
                        <Route path='/teacherUser/:id' element={<TeacherUser />} />
                        {/* <Route path='/admin_teacher_dashboard' element={<AdminTeacherDashboard />} /> */}
                        <Route path='/teacher_student_dashboard' element={<TeacherStudent />} />
                        <Route path='/Teacher_resultSheet' element={<TeacherResult/>}/>
                    </Routes>
                </div>
            </div>
    
    
    </>
  )
}

export default Teacher









