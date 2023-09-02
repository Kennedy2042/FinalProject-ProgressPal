import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import "./AdminUser.css"
// import "./AdminUserMedia.css"
import { useSelector } from 'react-redux'
import { VictoryPie, VictoryTheme } from 'victory'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import LiveClock from 'react-live-clock';



const TeacherUser = () => {

    const schoolUsers = useSelector(state => state.persisitedReducer.School)
    const teacherData = useSelector(state => state.persisitedReducer.loginUser)
    const [date, setDate] = useState(new Date());

    // console.log(schoolUsers)
    const [totalStudents, setTotalStudents] = useState(0);

    const url = `https://progresspal-8rxj.onrender.com/progressPal/teacherStudents/${teacherData.data.data._id}`
    async function GetAllStudents() {
        axios.get(url)
            .then((res) => {
                console.log("first", res)
                const studentsData = res.data.data;
                const totalStudentsCount = studentsData.length;
                setTotalStudents(totalStudentsCount);
                console.log(studentsData)
                console.log(totalStudentsCount) 
            })
            .catch((err) => {
                console.log("first", err)
            })
    }

    useEffect(() => {
        GetAllStudents()
    }, []);

    const pieData = [
        { key: "Enrolled", y: totalStudents },
        { key: "Remaining", y: 10 - totalStudents }
    ];
    const handleDateChange = (newDate) => {
    setDate(newDate)
    };
  




    return (
        <>
            <div className='TeacherAdminDashBoardRightBodyUpperBody'>
                <div className="AdminDashBoardRightBodyHeader">
                    <div className="userProfile">
                        <div className="UserImageDiv">
                            <img className='UserImage' src={schoolUsers.schoolLogo} alt="" />
                        </div>
                        <h4 className="UserImageH4">{schoolUsers.schoolName}</h4>
                    </div>
                    <h5>Welcome to ProgressPal</h5>
                </div>
            </div>
            <div className='AdminDashBoardLowerBodyUpperBody'>
                <div className='AdminDashBoardLowerBodyUpperBodyTitle'>
                    <h3>Teacher Dashboard</h3>
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


                                    {/* <VictoryPie
                                        padAngle={0}
                                        // used to hide labels
                                        labelComponent={<span />}
                                        innerRadius={200}
                                        width={700} height={700}
                                        data={[{ 'key': "", 'y': 70 }, { 'key': "", 'y': (100 - 70) }]}
                                        colorScale={["#19B3A6", "#EEEEEE"]}
                                        style={{ background: "red" }}
                                    /> */}
                                    <VictoryPie
                                        padAngle={0}
                                        labelComponent={<span />}
                                        innerRadius={200}
                                        width={700}
                                        height={700}
                                        data={pieData}
                                        colorScale={["#19B3A6", "#EEEEEE"]}
                                        style={{ background: "red" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='AdminTotalTeacher'>
                        <div className='AdminTotalTeacherBody'>
                            <div className='AdminTotalTeacherBodyTotal'>
                                <h5 className='AdminTotalTeacherBodyTotalH5' >Teachers</h5>
                                <h3 className='AdminTotalTeacherBodyTotalH3'>{0}</h3>
                            </div>
                            <div className='AdminTotalTeacherBodyChart'>
                                <div className="AdminChart">
                                    <VictoryPie
                                        padAngle={0}
                                        // used to hide labels
                                        labelComponent={<span />}
                                        innerRadius={200}
                                        width={700} height={700}
                                        data={[{ 'key': "", 'y': 70 }, { 'key': "", 'y': (100 - 70) }]}
                                        colorScale={["#19B3A6", "#EEEEEE"]}
                                        style={{ background: "red" }}
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
                                        // used to hide labels
                                        labelComponent={<span />}
                                        innerRadius={200}
                                        width={700} height={700}
                                        data={[{ 'key': "", 'y': 10 }, { 'key': "", 'y': (100 - 10) }]}
                                        colorScale={["red", "#1e306e"]}
                                        style={{ background: "red" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div> */}
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
                    <div className='AdminDashboardPerformanceDetailCardRight'>
                        <Calendar onChange={handleDateChange} value={date}/>
                        {/* <LiveClock/> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default TeacherUser