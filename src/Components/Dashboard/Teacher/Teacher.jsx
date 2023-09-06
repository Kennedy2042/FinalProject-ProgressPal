import './Teacher.css'
import './TeacherMedia.css'
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
import { useDispatch, useSelector } from 'react-redux'
// import AdminUser from './AdminDashboard/User/AdminUser'
import AdminTeacherDashboard from '../AdminDashboard/AdminTeacher/AdminTeacherDashboard'
// import AdminStudentDashboard from '../AdminDashboard/AdminStudent/AdminStudentDashboard'
import TeacherUser from './User/TeacherUser'
import { GrScorecard } from 'react-icons/gr'
import TeacherResult from './TeacherResult/TeacherResult'
import axios from 'axios'
import TeacherStudent from './Student/TeacherStudent'
import Swal from 'sweetalert2'
import { allStudentApi } from '../../../Redux/ProductState'
import { loginUserData } from '../../../Redux/ProductState'
import { BsFileSpreadsheet } from 'react-icons/bs'
// import Auth from '../../Authentication/Auth'
import { userLogin } from '../../../Redux/ProductState'


const Teacher = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const teacherData = useSelector(state => state.persisitedReducer.loginUser)
    const BearerToken = teacherData?.data?.token
    // console.log(BearerToken)

    const [menu, setMenu] = useState(false)
    const [dashboard, setDashboard] = useState(true)
    const [student, setStudent] = useState(false)
    const [result, setResult] = useState(false)

    const showAlert = () => {
        Swal.fire({
            title: 'Log Out',
            text: 'Are you sure',
            icon: 'warning',
            cancelButtonColor: '#127cdd',
            // confirmButtonColor: 'red',
            showCancelButton: true,
            confirmButtonText: 'yes',
            customClass: {
                confirmButton: 'sweet-alert-confirm-btn',
            },
        }).then((result) => {
            if (result.isConfirmed) {
               



                return
            }
        });
    };


    const url = `https://progresspal-8rxj.onrender.com/progressPal/logoutTeacher/${teacherData?.data?.data?._id}`;
    async function TeacherLogout() {
        // console.log("dstrstrdd")
        axios.post(url, {
            Authorization: `Bearer ${BearerToken}`

        })
            .then((res) => {
                console.log(res)
                 TeacherLogout()
                dispatch(allStudentApi([]))
                dispatch(loginUserData([]))
                navigate("/")
                
                dispatch(userLogin({isLoggedIn:""}))

            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <div className="TeacherDashboardContainer">
                <div className="TeacherDashboardContainerMobile">
                    <div className="TeacherDashboardMobileHeader">
                        <div className="TeacherDashboardMobileHeaderCon">
                            <img src={ProgressPalLogo} alt="" />
                            {
                                menu ? <AiOutlineCloseCircle style={{ cursor: "pointer" }} size={30} onClick={() => {
                                    setMenu(false)
                                }} /> : <RxHamburgerMenu style={{ cursor: "pointer" }} size={30} onClick={() => {
                                    setMenu(true)
                                }} />
                            }

                        </div>
                        {
                            menu ?
                                <div className="TeacherDashboardMobileDropMenu">
                                    <div className="TeacherDashboardIcons" onClick={() => {
                                        navigate("/Dashboard/teacher/teacherUser/:id")
                                    }}>
                                        <div className='TeacherHomeIcon'>
                                            <BiHomeAlt size={30} className='TeacherDashboardIconsImage' />
                                        </div>
                                        <div className="TeacherHomeIconTitle">
                                            <p className='TeacherDashboardIconsImageName'>Dashboard</p>
                                        </div>
                                    </div>
                                    <div className="TeacherDashboardIcons" onClick={() => navigate("/Dashboard/teacher/Teacher_student_dashboard")}>
                                        <div className='TeacherHomeIcon'>
                                            <PiStudentDuotone size={30} className='TeacherDashboardIconsImage' />
                                        </div>
                                        <div className="TeacherHomeIconTitle">
                                            <p className='TeacherDashboardIconsImageName'>Students</p>
                                        </div>
                                    </div>
                                    <div className="TeacherDashboardIcons" onClick={() => navigate("/Dashboard/teacher/Teacher_resultSheet")}>
                                        <div className='TeacherHomeIcon'>
                                            <BsFileSpreadsheet size={30} className='TeacherDashboardIconsImage' />
                                        </div>
                                        <div className="TeacherHomeIconTitle">
                                            <p className='TeacherDashboardIconsImageName'>Results</p>
                                        </div>
                                    </div>
                                    {/* <div className="TeacherDashboardIcons">
                                        <div className='TeacherHomeIcon'>
                                            <GrScorecard size={30} className='TeacherDashboardIconsImage' />
                                        </div>
                                        <div className="TeacherHomeIconTitle">
                                            <p className='TeacherDashboardIconsImageName'>Results</p>
                                        </div>
                                    </div> */}
                                    <div className="TeacherDashboardIcons" onClick={showAlert}>
                                        <div className='TeacherHomeIcon'>
                                            <BiLogOut size={30} className='TeacherDashboardIconsImage' />
                                        </div>
                                        <div className="TeacherHomeIconTitle">
                                            <p className='TeacherDashboardIconsImageName'>Logout</p>
                                        </div>
                                    </div>
                                </div> : null
                        }
                    </div>
                </div>


                <div className="TeacherDashboardSideMenu">
                    <div className="TeacherDashboardSideMenuLogo">
                        <img src={ProgressPalLogo} alt="" />
                    </div>
                    <div className="TeacherDashboardSideMenuMainBody">
                        <div className='TeacherDashboardSideMenuIconDiv'>
                            <div className={dashboard ? "Active" : "TeacherDashboardIcons"} onClick={() => {
                                navigate("/Dashboard/teacher/teacherUser/:id")
                                setDashboard(true)
                                setStudent(false)
                                setResult(false)
                            }}>
                                <div className='TeacherHomeIcon'>
                                    <BiHomeAlt size={30} className={dashboard ? "AdminDashboardIconsImageActive" : 'TeacherDashboardIconsImage'} />
                                </div>
                                <div className="TeacherHomeIconTitle">
                                    <p className={dashboard ? "AdminDashboardIconsImageNameActive" : 'TeacherDashboardIconsImageName'}>Dashboard</p>
                                </div>
                            </div>
                            <div className={student ? "Active" : "TeacherDashboardIcons"} onClick={() => {
                                navigate("/Dashboard/teacher/teacher_student_dashboard")
                                setDashboard(false)
                                setStudent(true)
                                setResult(false)
                            }}>
                                <div className='TeacherHomeIcon'>
                                    <PiStudentDuotone size={30} className={student ? "AdminDashboardIconsImageActive" : 'TeacherDashboardIconsImage'} />
                                </div>
                                <div className="TeacherHomeIconTitle">
                                    <p className={student ? "AdminDashboardIconsImageNameActive" : 'TeacherDashboardIconsImageName'}>Students</p>
                                </div>
                            </div>
                            {/* <div className="TeacherDashboardIcons" onClick={() => navigate("/Teacher_Dashboard/Teacher_teacher_dashboard")}>
                                <div className='TeacherHomeIcon'>
                                    <FaChalkboardTeacher size={30} className='TeacherDashboardIconsImage' />
                                </div>
                                <div className="TeacherHomeIconTitle">
                                    <p className='TeacherDashboardIconsImageName'>Teachers</p>
                                </div>
                            </div> */}
                            <div className={result ? "Active" : "TeacherDashboardIcons"} onClick={() => {
                                navigate("/Dashboard/teacher/Teacher_resultSheet")
                                setDashboard(false)
                                setStudent(false)
                                setResult(true)
                            }}>
                                <div className='TeacherHomeIcon'>
                                    <BsFileSpreadsheet size={30} className={result ? "AdminDashboardIconsImageActive" : 'TeacherDashboardIconsImage'} />
                                </div>
                                <div className="TeacherHomeIconTitle">
                                    <p className={result ? "AdminDashboardIconsImageNameActive" : 'TeacherDashboardIconsImageName'}>Results</p>
                                </div>
                            </div>
                            <div className="TeacherDashboardIcons" onClick={showAlert}>
                                <div className='TeacherHomeIcon'>
                                    <BiLogOut size={30} className='TeacherDashboardIconsImage' />
                                </div>
                                <div className="TeacherHomeIconTitle">
                                    <p className='TeacherDashboardIconsImageName'>Logout</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='DashBoardRightBody'>
                    <Routes>
                        {/* <Route element={<Auth />} > */}
                            <Route path='/teacherUser/:id' element={<TeacherUser />} />
                            <Route path='/teacher_student_dashboard' element={<TeacherStudent />} />
                            <Route path='/Teacher_resultSheet' element={<TeacherResult />} />
                        {/* </Route> */}
                    </Routes>
                </div>
            </div>


        </>
    )
}

export default Teacher