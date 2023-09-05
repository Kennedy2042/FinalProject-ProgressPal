import React, { useEffect, useState } from 'react'
import "./AdminUser.css"
import "./AdminUserMedia.css"
import { useDispatch, useSelector } from 'react-redux'
import { VictoryPie, VictoryTheme } from 'victory'
import axios from 'axios'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom'
import { adminSchoolStudents, adminSchoolTeachers } from '../../../../Redux/ProductState'


const AdminUser = () => {

    const schoolAdmin = useSelector(state => state.persisitedReducer.loginUser)
    const studentsData = useSelector(state => state.persisitedReducer.adminStudent)
    const teacherData = useSelector(state => state.persisitedReducer.adminTeachers)
    // const [totalStudents, setTotalStudents] = useState(0);
    // const [totalTeachers, setTotalTeachers] = useState(0);
    const totalCapacity = 55;
    // console.log(schoolAdmin)
    const nav = useNavigate()
    const dispatch = useDispatch()
    // console.log(studentsData)
    // console.log(teacherData)
    const totalStudents = studentsData.length
    const totalTeachers = teacherData.length






    useEffect(() => {
        axios.get(`https://progresspal-8rxj.onrender.com/progressPal/schoolStudents/${schoolAdmin.data.data._id}`)
            .then((res) => {
                console.log("first", res)
                dispatch(adminSchoolStudents(res.data.data))
                // const studentsData = res.data.data;
                // const totalStudentsCount = studentsData.length;
                // setTotalStudents(totalStudentsCount);
                // console.log(studentsData)
                // console.log(totalStudentsCount)
            })
            .catch(error => console.error('Error fetching student data:', error));

        axios.get(`https://progresspal-8rxj.onrender.com/progressPal/schoolTeachers/${schoolAdmin.data.data._id}`)
            .then((res) => {
                console.log("first", res)
                dispatch(adminSchoolTeachers(res.data.data))
                // const teacherData = res.data.data;
                // const totalTeachersCount = teacherData.length;
                // setTotalTeachers(totalTeachersCount)
                // console.log(teacherData, "this is teacher Data")
                // console.log(totalTeachersCount, "this is total teachers counted")
                // console.log(res)
            })

            .catch(error => console.error('Error fetching teacher data:', error));
    }, []);

    const totalStudentsAndTeachers = totalStudents + totalTeachers
    console.log(totalStudentsAndTeachers)
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate)
    };



    return (
        <>
            <div className='AdminDashBoardRightBodyUpperBody'>
                <div className="AdminDashBoardRightBodyHeader">
                    <div className="userProfile">
                        <div className="UserImageDiv">
                            <img className='UserImage' src={schoolAdmin.data.data.schoolLogo} alt="" />
                        </div>
                        <h4 className="UserImageH4">{schoolAdmin.data.data.schoolName}</h4>
                    </div>
                    <h5>Welcome to ProgressPal</h5>
                </div>
            </div>
            <div className='AdminDashBoardLowerBodyUpperBody'>
                <div className='AdminDashBoardLowerBodyUpperBodyTitle'>
                    <h3>Admin Dashboard</h3>
                </div>
                <div className='AdminDashboardTotalStudentsCards'>
                    <div className='AdminTotalTeacher'>
                        <div className='AdminTotalTeacherBody'>
                            <div className='AdminTotalTeacherBodyTotal'>
                                <h5 className='AdminTotalTeacherBodyTotalH5'>Students</h5>
                                <h3 className='AdminTotalTeacherBodyTotalH3'>{totalStudents}</h3>
                            </div>
                            <div className='AdminTotalTeacherBodyChart'>
                                <div className="AdminChart">
                                    <VictoryPie
                                        padAngle={0}
                                        labelComponent={<span />}
                                        innerRadius={2900}
                                        width={8000}
                                        height={8000}
                                        data={[
                                            { 'key': 'Students', 'y': totalStudents },
                                            { 'key': 'Remaining', 'y': 50 - totalStudents }
                                        ]}
                                        colorScale={["#127cdd", "#EEEEEE"]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='AdminTotalTeacher'>
                        <div className='AdminTotalTeacherBody'>
                            <div className='AdminTotalTeacherBodyTotal'>
                                <h5 className='AdminTotalTeacherBodyTotalH5' >Teachers</h5>
                                <h3 className='AdminTotalTeacherBodyTotalH3'>{totalTeachers}</h3>
                            </div>
                            <div className='AdminTotalTeacherBodyChart'>
                                <div className="AdminChart">
                                    <VictoryPie
                                        padAngle={0}
                                        labelComponent={<span />}
                                        innerRadius={2900}
                                        width={8000}
                                        height={8000}
                                        data={[
                                            { 'key': 'Teachers', 'y': totalTeachers },
                                            { 'key': 'Remaining', 'y': 5 - totalTeachers }
                                        ]}
                                        colorScale={["#127cdd", "#EEEEEE"]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='AdminTotalTeacher'>
                        <div className='AdminTotalTeacherBody'>
                            <div className='AdminTotalTeacherBodyTotal'>
                                <h5 className='AdminTotalTeacherBodyTotalH5'>Total</h5>
                                <h3 className='AdminTotalTeacherBodyTotalH3'>{totalStudentsAndTeachers}</h3>
                            </div>
                            <div className='AdminTotalTeacherBodyChart'>
                                <div className="AdminChart">
                                    <VictoryPie
                                        padAngle={0}
                                        labelComponent={<span />}
                                        innerRadius={2900}
                                        width={8000}
                                        height={8000}
                                        data={[
                                            { 'key': 'Total', 'y': totalStudentsAndTeachers },
                                            { 'key': 'Remaining', 'y': totalCapacity - totalStudentsAndTeachers }
                                        ]}
                                        colorScale={["red", "#127cdd"]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='AdminDashboardPerformance'>
                    <div className='AdminDashboardPerformanceDetailCard'>
                        <div className='AdminDashboardPerformanceDetailCardTop' >
                            <div className="adCardLeft">
                                <div className="eligibleText">
                                    You can only add
                                    <h1>
                                        5 Teachers
                                    </h1>
                                    and they can each add
                                    <h1>
                                        10 Students
                                    </h1>
                                </div>

                            </div>
                            <div className="adCardRight">
                                <div className="eligibleText">

                                    <h1>
                                        Click on the subscribe button to subscribe
                                    </h1>
                                    <button className='SubscribeBtn'
                                        onClick={() => {
                                            nav("/Upgrade_now")
                                        }}>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='AdminDashboardPerformanceDetailCardRight'>
                        <Calendar onChange={handleDateChange} value={date} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUser