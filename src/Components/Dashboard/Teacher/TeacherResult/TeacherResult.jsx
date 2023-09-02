import React from 'react'
import "./TeacherResult.css"
import { PiStudentDuotone } from "react-icons/pi"
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const TeacherResult = () => {
    const allStudent = useSelector((state) => state.persisitedReducer.studentApi)
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

    console.log(allStudent, "all studenr")


    return (
        <>
            <div className="TeacherResultContainer">
                <div className='ResulToptHeader'>
                    <h2 className='ResulToptHeaderh2'>Exam Results</h2>
                </div>
                <div className='GradeHolder'>
                    <div className='GradeHolderHeader'>
                        <div className="GradeHeaderHolderList">
                            <span className="GradeHeaderHolderStudentName">Student Name</span>
                            <span className="GradeHeaderHolderStudentClass">Student Class</span>
                            <span className="GradeHeaderHolderStudentAge">Age</span>
                            <span className="GradeHeaderHolderStudentResult">Result</span>
                            {/* <li>Details</li> */}
                        </div>
                    </div>
                    <div className='GradeHolderHeaderResultHolder'>
                        <div className='GradeHolderHeaderResultHolderBody'>
                            {
                                allStudent.map((props) => (
                                    <div className='StudentsGradeHolder'>
                                        <div className='StudentsGradeHolderStudentsName'>
                                            <div className='StudentsGradeHolderStudentImage'>
                                                <img src={props?.studentPassport} alt="" />
                                            </div>
                                            <p>{props.studentName}</p>
                                        </div>
                                        <div className='StudentsGradeHolderStudentsClass'>
                                            <p>{props.studentClass}</p>
                                        </div>
                                        <div className='StudentsGradeHolderstudentsScore'>
                                            <p>{props.studentAge}</p>
                                        </div>
                                        <div className='StudentsGradeHolderstudentResult'>
                                            <button className='ViewStudentResults'
                                                onClick={() => {
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




