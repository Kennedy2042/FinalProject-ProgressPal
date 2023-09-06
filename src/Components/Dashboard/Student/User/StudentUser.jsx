import React, { useEffect, useState, useRef } from 'react'
import './StudentUser.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import StudentUserProfile from './StudentProfile/StudentProfile';
import Calendar from 'react-calendar';
import { studentUserResult } from '../../../../Redux/ProductState';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";





const StudentUser = () => {
    const studentData = useSelector(state => state.persisitedReducer.loginUser)
    // console.log(studentData)
    // const [studentResult, setStudentResult] = useState([])
    const [date, setDate] = useState(new Date());
    const dispatch = useDispatch()
    const studentResult = useSelector(state => state.persisitedReducer.studentResult)


    const url =
        `https://progresspal-8rxj.onrender.com/progressPal/studentResult/${studentData.data.data._id}`;

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                // console.log(res)
                // setStudentResult(res.data.data)
                dispatch(studentUserResult(res.data.data))
            })
            .catch((err) => {
                console.log("This is an error", err)
            })
    }, []);
    // console.log(studentResult)
    const handleDateChange = (newDate) => {
        setDate(newDate)
    }
    // console.log(studentResult)

    const pdfRef = useRef(null)

      const handleDownloadPDF = async () => {
    const pdf = new jsPDF("portrait", "mm", "a4");
    const pdfRefCurrent = pdfRef.current;

    // Use html2canvas to capture the content
    const canvas = await html2canvas(pdfRefCurrent);

    // Add the captured content to the PDF
    const imgData = canvas.toDataURL("image/png");
    pdf.addImage(imgData, "PNG", 10, 10, 190, 277);

    // Download the PDF
    pdf.save("result.pdf");
  }


    return (
        <>
            <div className='StudentDashBoardRightBodyUpperBody'>
                <div className="AdminDashBoardRightBodyHeader">
                    <div className="userProfile">
                        <div className="UserImageDiv">
                            <img className='UserImage' src={studentData.data.school.schoolLogo} alt="school logo" />
                        </div>
                        <h4 className="UserImageH4">{studentData.data.school.schoolName}</h4>
                    </div>
                    <h5>Welcome to ProgressPal</h5>
                </div>
            </div>

            <div className='studentResultBody'>
                <div className="StudentCalender">
                    <StudentUserProfile />
                    <Calendar onChange={handleDateChange} value={date} />
                </div>

                <div className="studentResultMainContainer" ref={pdfRef}>
                    {
                        studentResult.length === 0 ? <h2>There is no result for you at the moment</h2> : (
                            studentResult.map((studentResult) => (
                    <div className='studentResultmainbody'>
                        <div className='studentResultmainbodyheader'>
                            <div className='studentResultmainbodyheaderlogodiv'>
                                <div className='studentResultmainbodyheaderlogo'>
                                    <img src={studentData.data.school.schoolLogo} alt="School Logo" />
                                </div>
                                <div className='studentResultMainbodyHeaderLogoDivSchoolName'>
                                    <p>{studentData.data.school.schoolName}</p>
                                    <p>{studentData.data.school.schoolAddress}</p>
                                </div>
                            </div>
                            <div className='studentResultmainbodyheaderTerm'>
                                <p>FIRST TERM 2022/2023 REPORT CARD</p>
                            </div>
                            <div className='studentResultmainbodyheaderStudentnamediv'>
                                <div className='studentResultmainbodyheaderStudentname'>
                                    <p className='studentstudentNameP'>{studentData.data.data.studentName}</p>
                                    <p className='studentstudentNameP2'>{studentData.data.data.studentEmail}</p>
                                </div>

                                <div className='studentResultmainbodyheaderStudentname2'>
                                    <p className='studentstudentNameP'>{studentData.data.data.studentClass}</p>
                                </div>

                                <div></div>
                            </div>
                        </div>
                        <div className='studentResultTable'>
                            <table>
                                <tr>
                                    <th>Subjects
                                        <tr className='studentTotalA'>
                                            <td>{studentResult.subName1}</td>
                                            <td>{studentResult.subName2}</td>
                                            <td>{studentResult.subName3}</td>
                                            <td>{studentResult.subName4}</td>
                                            <td>{studentResult.subName5}</td>
                                            <td>{studentResult.subName6}</td>
                                            <td>{studentResult.subName7}</td>
                                            <td>{studentResult.subName8}</td>
                                            <td>{studentResult.subName9}</td>
                                            <td>{studentResult.subName10}</td>
                                            <td>Result Total</td>
                                        </tr>
                                    </th>
                                    <th>Test Score
                                        <tr className='studentTotalB'>
                                            <td>{studentResult.subTest1}</td>
                                            <td>{studentResult.subTest2}</td>
                                            <td>{studentResult.subTest3}</td>
                                            <td>{studentResult.subTest4}</td>
                                            <td>{studentResult.subTest5}</td>
                                            <td>{studentResult.subTest6}</td>
                                            <td>{studentResult.subTest7}</td>
                                            <td>{studentResult.subTest8}</td>
                                            <td>{studentResult.subTest9}</td>
                                            <td>{studentResult.subTest10}</td>
                                            <td></td>
                                        </tr>
                                    </th>
                                    <th>Exam Score
                                        <tr className='studentTotalB'>
                                            <td>{studentResult.subExam1}</td>
                                            <td>{studentResult.subExam2}</td>
                                            <td>{studentResult.subExam3}</td>
                                            <td>{studentResult.subExam4}</td>
                                            <td>{studentResult.subExam5}</td>
                                            <td>{studentResult.subExam6}</td>
                                            <td>{studentResult.subExam7}</td>
                                            <td>{studentResult.subExam8}</td>
                                            <td>{studentResult.subExam9}</td>
                                            <td>{studentResult.subExam10}</td>
                                            <td></td>
                                        </tr>
                                    </th>
                                    <th>Total Score
                                        <tr className='studentTotalB'>
                                            <td>{studentResult.subTotal1}</td>
                                            <td>{studentResult.subTotal2}</td>
                                            <td>{studentResult.subTotal3}</td>
                                            <td>{studentResult.subTotal4}</td>
                                            <td>{studentResult.subTotal5}</td>
                                            <td>{studentResult.subTotal6}</td>
                                            <td>{studentResult.subTotal7}</td>
                                            <td>{studentResult.subTotal8}</td>
                                            <td>{studentResult.subTotal9}</td>
                                            <td>{studentResult.subTotal10}</td>
                                            <td>{studentResult.resultTotal}</td>
                                        </tr>
                                    </th>
                                </tr>

                            </table>
                        </div>
                        <button style={{cursor: "pointer", height: "5%", color: "white" ,border: "none", backgroundColor: "#127cdd", width: "100%"}} onClick={handleDownloadPDF}>Download</button>
                    </div>
                    ))
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default StudentUser