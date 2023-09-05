import './Admin.css'
import ProgressPalLogo from "../../assets/ProgressPalLogo.png"
import AboutUsImage from "../../assets/AboutUsImage.png"
import { BiHomeAlt, BiLogOut } from 'react-icons/bi'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { PiStudentDuotone } from 'react-icons/pi'
import { MdEmojiEvents } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Route, Routes, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import AdminTeacherDashboard from './AdminDashboard/AdminTeacher/AdminTeacherDashboard'
import AdminStudentDashboard from './AdminDashboard/AdminStudent/AdminStudentDashboard'
import { useDispatch, useSelector } from 'react-redux'
import AdminUser from './AdminDashboard/User/AdminUser'
import axios from 'axios'
import Swal from 'sweetalert2'
import { adminAllTeacherApi, adminSchoolStudents, adminSchoolTeachers, schoolUserData, teacherInformation } from '../../Redux/ProductState'
import Login from '../Authentication/Login/Login'
import { userLogin } from '../../Redux/ProductState'
import Auth from "../Authentication/Auth"



const Admin = () => {
    const navigate = useNavigate()
    const schoolUsers = useSelector(state => state.persisitedReducer.School)
    const isLogin = useSelector(state => state.persisitedReducer.isLoggedIn)
    const schoolAdmin = useSelector(state => state.persisitedReducer.loginUser)
    // console.log(schoolAdmin)


    const BearerToken = schoolAdmin.data.token
    const [menu, setMenu] = useState(false)
    const dispatch = useDispatch()
    const [dashboard, setDashboard] = useState(true)
    const [student, setStudent] = useState(false)
    const [teacher, setTeacher] = useState(false)
    const showAlert = () => {
        Swal.fire({
            title: 'Log Out',
            text: 'Are you sure',
            icon: 'warning',
            cancelButtonColor: '#127cdd',
            showCancelButton: true,
            confirmButtonText: 'yes',
            customClass: {
                confirmButton: 'sweet-alert-confirm-btn',
                cancelButton: 'sweet-alert-cancel-btn'
            },
        }).then((result) => {
            if (result.isConfirmed) {
                AdminLogout()
                navigate("/")

            }
        });
    };

    const url = `https://progresspal-8rxj.onrender.com/progressPal/logout/${schoolAdmin.data.data._id}`
    async function AdminLogout() {
        axios.post(url, {
            Authorization: `Bearer ${BearerToken}`

        })
            .then((res) => {
                console.log(res)
                navigate("/")
                dispatch(adminAllTeacherApi([]))
                dispatch(schoolUserData([]))
                dispatch(adminSchoolTeachers([]))
                dispatch(adminSchoolStudents([]))
                dispatch(teacherInformation([]))
                dispatch(userLogin(false))
                // console.log(res.data.data.isLogin, "res.data.data.isLogin")
            })
            .catch((err) => {
                console.log(err)
                err?.message === "Network Error"
                    Swal.fire({
                        title: "Login Failed",
                        text: err.message,
                        icon: "error",
                        confirmButtonText: "okay",
                        timer: "2000",
                        showConfirmButton: false

                    
            })
        })

    }

    // console.log(isLogin, "isLogin")
    // console.log("this is school User data", schoolAdmin)

    return (
        <>
            <div className="AdminDashboardContainer">
                <div className="AdminDashboardContainerMobile">
                    <div className="AdminDashboardMobileHeader">
                        <div className="AdminDashboardMobileHeaderCon">
                            <img src={ProgressPalLogo} alt="" />
                            {
                                menu ? <AiOutlineCloseCircle style={{ cursor: "pointer", }} size={25} onClick={() => {
                                    setMenu(false)
                                }} /> : <RxHamburgerMenu style={{ cursor: "pointer" }} size={25} onClick={() => {
                                    setMenu(true)
                                }} />
                            }

                        </div>
                        {
                            menu ?
                                <div className="AdminDashboardMobileDropMenu">
                                    <div className="AdminDashboardIcons" onClick={() => {
                                        navigate(`/Dashboard/schoolAdmin/schoolAdminUser/${schoolAdmin.data.data._id}`)
                                    }}>
                                        <div className='AdminHomeIcon'>
                                            <BiHomeAlt size={30} className='AdminDashboardIconsImage' />
                                        </div>
                                        <div className="AdminHomeIconTitle">
                                            <p className='AdminDashboardIconsImageName'>Dashboard</p>
                                        </div>
                                    </div>
                                    <div className="AdminDashboardIcons" onClick={() => navigate("/Dashboard/schoolAdmin/admin_student_dashboard")}>
                                        <div className='AdminHomeIcon'>
                                            <PiStudentDuotone size={30} className='AdminDashboardIconsImage' />
                                        </div>
                                        <div className="AdminHomeIconTitle">
                                            <p className='AdminDashboardIconsImageName'>Students</p>
                                        </div>
                                    </div>
                                    <div className="AdminDashboardIcons" onClick={() => navigate("/Dashboard/schoolAdmin/admin_teacher_dashboard")}>
                                        <div className='AdminHomeIcon'>
                                            <FaChalkboardTeacher size={30} className='AdminDashboardIconsImage' />
                                        </div>
                                        <div className="AdminHomeIconTitle">
                                            <p className='AdminDashboardIconsImageName'>Teachers</p>
                                        </div>
                                    </div>
                                    {/* <div className="AdminDashboardIcons">
                                        <div className='AdminHomeIcon'>
                                            <MdEmojiEvents size={30} className='AdminDashboardIconsImage' />
                                        </div>
                                        <div className="AdminHomeIconTitle">
                                            <p className='AdminDashboardIconsImageName'>Events</p>
                                        </div>
                                    </div> */}

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
                    <div className="AdminDashboardSideMenuLogo" onClick={()=>{
                        // navigate("/")
                    }}>
                        <img src={ProgressPalLogo} alt="" />
                    </div>
                    <div className="AdminDashboardSideMenuMainBody">
                        <div className='AdminDashboardSideMenuIconDiv'>
                            <div className={dashboard ? "Active" : "AdminDashboardIcons"} onClick={() => {
                                navigate(`/Dashboard/schoolAdmin/schoolAdminUser/${schoolAdmin.data.data._id}`)
                                setDashboard(true)
                                setStudent(false)
                                setTeacher(false)
                            }}>
                                <div className='AdminHomeIcon'>
                                    <BiHomeAlt size={30} className={dashboard ? "AdminDashboardIconsImageActive" : 'AdminDashboardIconsImage'} />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p className={dashboard ? "AdminDashboardIconsImageNameActive" : 'AdminDashboardIconsImageName'}>Dashboard</p>
                                </div>
                            </div>
                            <div className={student ? "Active" : "AdminDashboardIcons"} onClick={() => {
                                navigate("/Dashboard/schoolAdmin/admin_student_dashboard")
                                setStudent(true)
                                setTeacher(false)
                                setDashboard(false)
                            }}>
                                <div className='AdminHomeIcon'>
                                    <PiStudentDuotone size={30} className={student ? "AdminDashboardIconsImageActive" : 'AdminDashboardIconsImage'} />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p className={student ? "AdminDashboardIconsImageNameActive" : 'AdminDashboardIconsImageName'}>Students</p>
                                </div>
                            </div>
                            <div className={teacher ? "Active" : "AdminDashboardIcons"} onClick={() => {
                                navigate("/Dashboard/schoolAdmin/admin_teacher_dashboard")
                                setTeacher(true)
                                setDashboard(false)
                                setStudent(false)
                            }}>
                                <div className='AdminHomeIcon'>
                                    <FaChalkboardTeacher size={30} className={teacher ? "AdminDashboardIconsImageActive" : 'AdminDashboardIconsImage'} />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p className={teacher ? "AdminDashboardIconsImageNameActive" : 'AdminDashboardIconsImageName'}>Teachers</p>
                                </div>
                            </div>
                            {/* <div className="AdminDashboardIcons" onClick={()=>navigate("/Upgrade_now")}>
                                        <button>Upgrade</button>
                                    </div> */}
                            {/* <div className="AdminDashboardIcons">
                                <div className='AdminHomeIcon'>
                                    <MdEmojiEvents size={30} className='AdminDashboardIconsImage' />
                                </div>
                                <div className="AdminHomeIconTitle">
                                    <p className='AdminDashboardIconsImageName'>Events</p>
                                </div>
                            </div> */}
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
                <div className='AdminDashBoardRightBody'>
                    <Routes>
                        <Route element={<Auth />} >
                            <Route path='/schoolAdminUser/:id' element={<AdminUser />}/>
                            <Route path='/admin_teacher_dashboard' element={<AdminTeacherDashboard />}/>
                            <Route path='/admin_student_dashboard' element={<AdminStudentDashboard />}/>
                        </Route>
                    </Routes>
                    {/* <Routes>
                        {
                            isLogin ? <Route path='/schoolAdminUser/:id' element={<AdminUser />} /> : <Route path="/login" element={<Login />} />
                        }
                       
                        {
                            isLogin ? <Route path='/admin_teacher_dashboard' element={<AdminTeacherDashboard />} /> : <Route path="/login" element={<Login />} />
                        }

                        {
                            isLogin ? <Route path='/admin_student_dashboard' element={<AdminStudentDashboard />} /> : <Route path="/login" element={<Login />} />
                        }
                    </Routes> */}
                </div>
            </div>
        </>
    )
}

export default Admin