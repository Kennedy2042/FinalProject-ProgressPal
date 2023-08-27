import React from 'react'
import "./TeacherResult.css"
import { PiStudentDuotone } from "react-icons/pi"
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const TeacherResult = () => {
    const allStudent = useSelector((state)=>state.persisitedReducer.studentApi)
    const nav = useNavigate()
    // const url = `https://progresspal-8rxj.onrender.com/progressPal/schoolTeachers/${User.data.data._id}`

    // async function AllStudentResult (){
    //     axios.get(url)
    //     .then((res)=>{
    //         console.log("first" , res)
    //     })
    //     .catch((err)=>{
    //         console.log(err, "first")
    //     })

    // }

    // const url = `https://progresspal-8rxj.onrender.com/progressPal/schoolResult/${}`
    // async function ViewStudentResult(){
    //     axios.get(url)
    //     .then((res)=>{
    //         console.log("first", res)
    //     })
    //     .catch((err)=>{
    //         console.log("first", err)
    //     })
    // }

console.log(allStudent ,"all studenr")


    return (
        <>
            <div className="TeacherResultContainer">
                {/* <div className="TeacherResultContainerheader">
                    <div className="TeacherResultContainerheaderBody"></div>
                </div> */}
                <div className="TeacherResultHeader">
                    <div className="TeacherHeaderBody">
                        <h3>Exam Results</h3>
                    </div>
                </div>
                <div className="TeacherDashboardHeroContainer">
                    <div className="TeacherDashboardHero">
                        <div className="TeacherDashboardHeroUpperContainer">
                            <h2>Exam: unit 6 final exam</h2>
                            <h3>Course</h3>
                            <h3>20 Questions: All in one exam</h3>
                        </div>
                        <div className="TeacherDashboardHeroLowerContainer">
                            <div className="TeacherDashboardHeroLowerTotal">
                                <div className="TeacherDashboardHeroLowerIcons">
                                    <div className="TeacherDashboardHeroLowerIconsBody">
                                        <div className='TotalNumberIcon'>
                                            <PiStudentDuotone size={50} />
                                        </div>

                                    </div>

                                </div>
                                <div className="TeacherDashboardHeroLowerIcons">
                                    <div className="TeacherDashboardHeroLowerIconsBody">
                                        <div className='TotalNumberIcon'>
                                            <PiStudentDuotone size={50} />
                                        </div>

                                    </div>

                                </div>
                                <div className="TeacherDashboardHeroLowerIcons">
                                    <div className="TeacherDashboardHeroLowerIconsBody">
                                        <div className='TotalNumberIcon'>
                                            <PiStudentDuotone size={50} />
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="TeacherDashboardHeroLowerTotal">
                                <div className="TeacherDashboardHeroLowerIcons">
                                    <div className="TeacherDashboardHeroLowerIconsBody">
                                        <div className='TotalNumberIcon'>
                                            <PiStudentDuotone size={50} />
                                        </div>

                                    </div>

                                </div>
                                <div className="TeacherDashboardHeroLowerIcons">
                                    <div className="TeacherDashboardHeroLowerIconsBody">
                                        <div className='TotalNumberIcon'>
                                            <PiStudentDuotone size={50} />
                                        </div>

                                    </div>

                                </div>
                                <div className="TeacherDashboardHeroLowerIcons">
                                    <div className="TeacherDashboardHeroLowerIconsBody">
                                        <div className='TotalNumberIcon'>
                                            <PiStudentDuotone size={50} />
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='GradeHolder'>
                    <div className='GradeHolderHeader'>
                        {/* <div className='GradeHolderHeaderStudentname'>
                            <p>Student name</p>
                        </div>
                        <div className='GradeHolderHeaderRemark'>
                            <p>Passed/Failed</p>
                        </div>
                        <div className='GradeHolderHeaderScore'>
                            <p>Score</p>
                        </div>
                        <div className='GradeHolderHeaderGrade'>
                            <p>Grade</p>
                        </div>
                        <div className='GradeHolderHeaderTimeSpent'>
                            <p>Time Spent</p>
                        </div>
                        <div className='GradeHolderHeaderSubmit'>
                            <p>Submitted/Timeout</p>
                        </div>
                        <div className='GradeHolderHeaderDetals'>
                            <p> Details</p>
                        </div> */}
                        <ul>
                            <li>Student Name</li>
                            <li>Student Class</li>
                            <li>Age</li>
                            <li>Result</li>
                            {/* <li>Details</li> */}
                        </ul>
                    </div>
                    <div className='GradeHolderHeaderResultHolder'>
                        <div className='GradeHolderHeaderResultHolderBody'>
                            {
                                allStudent.map((props)=>(
                                    <div className='StudentsGradeHolder'>
                                <div className='StudentsGradeHolderStudentsName'>
                                    <img className='StudentsGradeHolderStudentsNameCircle' src={props?.studentPassport} alt="" />
                                    {/* <div className='StudentsGradeHolderStudentsNameCircle'></div> */}
                                    <p>{props.studentName}</p>
                                </div>
                                <div className='StudentsGradeHolderStudentsRemark'>
                                    <div className='StudentsGradeHolderStudentsRemarkbtn'>
                                        <p>{props.studentClass}</p>
                                    </div>
                                </div>
                                <div className='StudentsGradeHolderstudentsScore'>
                                    <p>{props.studentAge}</p>
                                </div>
                                <div className='StudentsGradeHolderstudentsGrade'>
                                    <button
                                    onClick={()=>{
                                        // ViewStudentResult()
                                        nav(`/teacher_studentResult/${props._id}`)
                                    }}>View Result</button>
                                </div>
                            </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default TeacherResult




