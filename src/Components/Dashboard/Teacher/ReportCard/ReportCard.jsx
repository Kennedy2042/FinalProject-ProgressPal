import React, { useEffect, useState } from 'react'
import './ReportCard.css'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ResultSheet from '../ResultSheet/ResultSheet';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import EditReportCard from './EditReportCard';
import Swal from 'sweetalert2';



// import anime3 from "../../assets/anime3.jpg"
const Result = () => {
    const studentData = useSelector(state => state.persisitedReducer.loginUser)
    const [studentResult, setStudentResult] = useState([])
    const [studentInfo, setStudentInfo] = useState([])
    const studentId = useParams()
    const [editResult, setEditResult] = useState(false)
    const [resultId, setResultId] = useState("")
    // console.log(resultId)
    const nav = useNavigate()


    const url =
        `https://progresspal-8rxj.onrender.com/progressPal/studentResult/${studentId.studentId}`;

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setStudentResult(res?.data?.data)
                console.log(res, "this is all student response")
            })
            .catch((err) => {
                console.log("This is an error", err)
            })
    }, []);
    // console.log(studentResult)
    // console.log(studentResult?.subExam1)
    // console.log(studentData)
    // console.log("first", studentId)

    const oneStudentUrl = `https://progresspal-8rxj.onrender.com/progressPal/readOneStudent/${studentId.studentId}`;

    async function getOneStudentApi() {
        axios
            .get(oneStudentUrl)
            .then((res) => {
                //   console.log(res.data.data, "response from api");
                setStudentInfo(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getOneStudentApi();
    }, []);

    const showAlert = () => {
        Swal.fire({
            title: 'Delete',
            text: 'Are you sure',
            icon: 'warning',
            cancelButtonColor: 'green',
            confirmButtonColor: 'red',
            showCancelButton: true,
            confirmButtonText: 'yes',
            customClass: {
                confirmButton: 'sweet-alert-confirm-btn',
            },
        }).then((result) => {
            if (result.isConfirmed) {
                DelStudentReslt()
                return
            }
        });
    };

    const delUrl = `https://progresspal-8rxj.onrender.com/progressPal/deleteResult/${studentId.studentId}/${resultId}`;
    async function DelStudentReslt() {
        axios.delete(delUrl)
            .then((res) => {
                // console.log("first" , res)
                Swal.fire({
                    title: 'Success',
                    text: res.data.message,
                    icon: 'success',
                    cancelButtonColor: 'cyan',
                    showCancelButton: false,
                    confirmButtonText: 'Okay',
                    timer: "1500",
                    showConfirmButton: false
                })
                nav("/Dashboard/teacher/Teacher_resultSheet")
            })
            .catch((err) => {
                console.log("first", err)
                if (err?.message === "Network Error") {
                    Swal.fire({
                        title: "Delete Failed",
                        text: err.message,
                        icon: "error",
                        confirmButtonText: "okay",
                        timer: "1500",
                        showConfirmButton: false

                    })
                    setLoading(false)
                }
                Swal.fire({
                    title: 'Fail',
                    text: err.data.message,
                    icon: 'error',
                    cancelButtonColor: 'cyan',
                    showCancelButton: false,
                    confirmButtonText: 'yes',
                     timer: "1500",
                        showConfirmButton: false
                })
            })
    }
    // console.log(resultId)
    // console.log(studentInfo)



    return (
        <div className='TeacherResultBody'>
            {
                editResult ? <div className="resultSheetHolder">
                    <AiOutlineCloseCircle size={38} style={{ fill: "red", cursor: "pointer" }} onClick={() => {
                        setEditResult(false)
                    }} />
                    <EditReportCard resultId={resultId} />

                </div> : null
            }


            {
                studentResult.length === 0 ? <h2>No result for this student yet {studentResult.studentName}</h2> : (
                    studentResult.map((props) => (
                        <div className='ResultMainbody' key={props._id}>
                            <div className='Resultmainbodyheader'>
                                <div className='Resultmainbodyheaderlogodiv'>
                                    <div className='Resultmainbodyheaderlogo'>
                                        <img src={studentData.data.school.schoolLogo} alt="" />
                                    </div>
                                    <div className='ResultmainbodyheaderlogodivschoolName'>
                                        <p>{studentData.data.school.schoolName}</p>
                                        <p className='SchoolAddressP'>{studentData.data.school.schoolAddress}</p>
                                    </div>
                                </div>
                                <div className='ResultmainbodyheaderTerm'>
                                    <p>FIRST TERM 2022/2023 REPORT CARD</p>
                                </div>
                                <div className='ResultmainbodyheaderStudentnamediv'>
                                    <div className='ResultmainbodyheaderStudentname'>
                                        <p className='studentNameP'>{studentInfo.studentName}</p>
                                        <p className='studentNameP2'>{studentInfo.studentEmail}</p>
                                    </div>

                                    <div className='ResultmainbodyheaderStudentname2'>
                                        <p className='studentNameP'>{studentInfo.studentClass}</p>
                                    </div>

                                    <div>
                                    <p className='studentNameP2'>{studentInfo.studentAge}yrs</p>

                                    </div>
                                </div>
                            </div>
                            <div className='ResultTable'>
                                <table className='table'>
                                    <tr className='trr'>
                                        <th className='subjects'>
                                            <p className='subjectsword'>Subjects</p>
                                            <tr className='TotalA'>
                                                <td>{props?.subName1}</td>
                                                <td>{props?.subName2}</td>
                                                <td>{props?.subName3}</td>
                                                <td>{props?.subName4}</td>
                                                <td>{props?.subName5}</td>
                                                <td>{props?.subName6}</td>
                                                <td>{props?.subName7}</td>
                                                <td>{props?.subName8}</td>
                                                <td>{props?.subName9}</td>
                                                <td>{props?.subName10}</td>
                                                <td>Total</td>
                                            </tr>
                                        </th>
                                        <th>
                                            <p className='subjectsword'>Test Score</p>
                                            <tr className='TotalB'>
                                                <td>{props?.subTest1}</td>
                                                <td>{props?.subTest2}</td>
                                                <td>{props?.subTest3}</td>
                                                <td>{props?.subTest4}</td>
                                                <td>{props?.subTest5}</td>
                                                <td>{props?.subTest6}</td>
                                                <td>{props?.subTest7}</td>
                                                <td>{props?.subTest8}</td>
                                                <td>{props?.subTest9}</td>
                                                <td>{props?.subTest10}</td>
                                                <td>{ }</td>
                                            </tr>
                                        </th>
                                        <th>
                                            <p className='subjectsword'>Exam Score</p>
                                            <tr className='TotalB'>
                                                <td>{props?.subExam1}</td>
                                                <td>{props?.subExam2}</td>
                                                <td>{props?.subExam3}</td>
                                                <td>{props?.subExam4}</td>
                                                <td>{props?.subExam5}</td>
                                                <td>{props?.subExam6}</td>
                                                <td>{props?.subExam7}</td>
                                                <td>{props?.subExam8}</td>
                                                <td>{props?.subExam9}</td>
                                                <td>{props?.subExam10}</td>
                                                <td>{ }</td>
                                            </tr>
                                        </th>
                                        <th>
                                            <p className='subjectsword'>Total Score</p>
                                            <tr className='TotalB'>
                                                <td>{props?.subTotal1}</td>
                                                <td>{props?.subTotal2}</td>
                                                <td>{props?.subTotal3}</td>
                                                <td>{props?.subTotal4}</td>
                                                <td>{props?.subTotal5}</td>
                                                <td>{props?.subTotal6}</td>
                                                <td>{props?.subTotal7}</td>
                                                <td>{props?.subTotal8}</td>
                                                <td>{props?.subTotal9}</td>
                                                <td>{props?.subTotal10}</td>
                                                <td>{props.resultTotal}</td>
                                            </tr>
                                        </th>
                                    </tr>
                                </table>
                            </div>
                            <div className="tableButton">
                                <button className='tableButtonEdit'
                                    onClick={() => {
                                        setEditResult(true)
                                        setResultId(props._id)
                                    }}>Edit Result</button>
                                <button className='tableButtonDelete' resultId={props._id} onClick={() => {
                                    showAlert()
                                    setResultId(props._id)
                                }}>Delete Result</button>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default Result;