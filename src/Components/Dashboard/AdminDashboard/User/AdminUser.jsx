import React, { useEffect, useState } from 'react'
import "./AdminUser.css"
import "./AdminUserMedia.css"
import { useSelector } from 'react-redux'
import { VictoryPie, VictoryTheme } from 'victory'
import axios from 'axios'

const AdminUser = () => {

    const schoolUsers = useSelector(state => state.persisitedReducer.School)
    const Users = useSelector(state => state.persisitedReducer.loginUser)
    console.log(schoolUsers)
    const [studentData, setStudentData] = useState([]);
    const [teacherData, setTeacherData] = useState([]);
    const totalCapacity = 100;
    console.log(Users)






    useEffect(() => {
        // Fetch student data from API
        axios.get('https://progresspal-8rxj.onrender.com/progressPal/schoolStudents/${Users.data.data._id}')
            .then(response => setStudentData(response.data))
            .catch(error => console.error('Error fetching student data:', error));

        // Fetch teacher data from API
        axios.get(`https://progresspal-8rxj.onrender.com/progressPal/schoolTeachers/${Users.data.data._id}`)
            .then((res) => {
                setTeacherData(res.data.data)
                console.log(res)
            })
            
            .catch(error => console.error('Error fetching teacher data:', error));
    }, []);


    const totalStudents = studentData.reduce((total, student) => total + student.count, 0);
    const totalTeachers = teacherData.reduce((total, teacher) => total + teacher.count, 0);
    console.log(totalTeachers)
    const totalStudentsAndTeachers = totalStudents + totalTeachers;

    // const [totalStudents, setTotalStudents] = useState(0);

    // const studentUrl = `https://progresspal-8rxj.onrender.com/progressPal/teacherStudents/${teacherData.data.data._id}`
    // async function GetAllStudents() {
    //     axios.get(studentUrl)
    //         .then((res) => {
    //             console.log("first", res)
    //             const studentsData = res.data.data;
    //             const totalStudentsCount = studentsData.length;
    //             setTotalStudents(totalStudentsCount);
    //             console.log(studentsData)
    //             console.log(totalStudentsCount)
    //         })
    //         .catch((err) => {
    //             console.log("first", err)
    //         })
    // }

    // useEffect(() => {
    //     GetAllStudents()
    // }, []);

    // const pieData = [
    //     { key: "Enrolled", y: totalStudents },
    //     { key: "Remaining", y: 100 - totalStudents }
    // ];

    // const teacherUrl = `https://progresspal-8rxj.onrender.com/progressPal/teacherStudents/${teacherData.data.data._id}`
    // async function GetAllStudents() {
    //     axios.get(teacherUrl)
    //         .then((res) => {
    //             console.log("first", res)
    //             const studentsData = res.data.data;
    //             const totalStudentsCount = studentsData.length;
    //             setTotalStudents(totalStudentsCount);
    //             console.log(studentsData)
    //             console.log(totalStudentsCount)
    //         })
    //         .catch((err) => {
    //             console.log("first", err)
    //         })
    // }

    // useEffect(() => {
    //     GetAllStudents()
    // }, []);

    // const chatData = [
    //     { key: "Enrolled", y: totalTeachers },
    //     { key: "Remaining", y: 100 - totalTeachers }
    // ];





    return (
        <>
            <div className='AdminDashBoardRightBodyUpperBody'>
                <div className="AdminDashBoardRightBodyHeader">
                    <div className="userProfile">
                        <div className="UserImageDiv">
                            <img className='UserImage' src={schoolUsers.schoolLogo} alt="" />
                        </div>
                        <h4 className="UserImageH4">{schoolUsers.schoolName}</h4>
                    </div>
                    <h5>Welcome to ProgressPal</h5>


                    {/* <div className="userProfile">
                        <div className="UserImageDiv">
                            <img className='UserImage' src={schoolUsers.schoolLogo} alt="" />
                        </div>
                        <h4 className="UserImageH4">{schoolUsers.schoolName}</h4>
                    </div>
                    <div className="userProfile">
                        <div className="UserImageDiv">
                            <img className='UserImage' src={schoolUsers.schoolLogo} alt="" />
                        </div>
                        <h4 className="UserImageH4">{schoolUsers.schoolName}</h4>
                    </div> */}
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
                                <h3 className='AdminTotalTeacherBodyTotalH3'>{0}</h3>
                            </div>
                            <div className='AdminTotalTeacherBodyChart'>
                                <div className="AdminChart">
                                    {/* <svg width={200} height={200} style={{ background: "green" }}>
                                        <text x={100} y={110} textAnchor="middle" >
                                            {70}%
                                        </text>
                                        
                                    </svg> */}
                                    {/* <VictoryPie
                                            padAngle={0}
                                            // used to hide labels
                                            labelComponent={<span />}
                                            innerRadius={70}
                                            width={200} height={200}
                                            data={[{ 'key': "", 'y': 70 }, { 'key': "", 'y': (100 - 70) }]}
                                            colorScale={["#19B3A6", "#EEEEEE"]}
                                            style={{ background: "red" }}
                                        />  */}
                                    <VictoryPie
                                        padAngle={0}
                                        labelComponent={<span />}
                                        innerRadius={200}
                                        width={700}
                                        height={700}
                                        data={[
                                            { 'key': 'Students', 'y': totalStudents },
                                            { 'key': 'Remaining', 'y': totalCapacity - totalStudents }
                                        ]}
                                        colorScale={["#19B3A6", "#EEEEEE"]}
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
                                        innerRadius={200}
                                        width={700}
                                        height={700}
                                        data={[
                                            { 'key': 'Teachers', 'y': totalTeachers },
                                            { 'key': 'Remaining', 'y': totalCapacity - totalTeachers }
                                        ]}
                                        colorScale={["#19B3A6", "#EEEEEE"]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='AdminTotalTeacher'>
                        <div className='AdminTotalTeacherBody'>
                            <div className='AdminTotalTeacherBodyTotal'>
                                <h5 className='AdminTotalTeacherBodyTotalH5'>Total</h5>
                                <h3 className='AdminTotalTeacherBodyTotalH3'>{0}</h3>
                            </div>
                            <div className='AdminTotalTeacherBodyChart'>
                                <div className="AdminChart">
                                    <VictoryPie
                                        padAngle={0}
                                        labelComponent={<span />}
                                        innerRadius={200}
                                        width={700}
                                        height={700}
                                        data={[
                                            { 'key': 'Total', 'y': totalStudentsAndTeachers },
                                            { 'key': 'Remaining', 'y': totalCapacity - totalStudentsAndTeachers }
                                        ]}
                                        colorScale={["red", "#1e306e"]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='AdminDashboardPerformance'>
                    <div className='AdminDashboardPerformanceDetailCard'>
                        <div className='AdminDashboardPerformanceDetailCardTop' >
                            <h4>
                                Exam Details
                            </h4>
                            <div className="ExamDetailsCard">

                            </div>
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
            </div>
        </>
    )
}

export default AdminUser