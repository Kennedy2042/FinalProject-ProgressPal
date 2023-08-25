import React, { useEffect, useState } from 'react'
import './StudentUser.css'
import axios from 'axios';
import { useSelector } from 'react-redux';




const StudentUser = () => {
    const studentData = useSelector(state => state.persisitedReducer.loginUser)
    console.log(studentData)
    const [studentResult, setStudentResult] = useState([])

    const url =
        `https://progresspal-8rxj.onrender.com/progressPal/studentResult/${studentData.data.data._id}`;

    useEffect(() => {
        axios.get(url)
            .then((res) =>{
                console.log(res)
                setStudentResult(res.data.data)
            })
            .catch((err) => {
                console.log("This is an error", err)
            })
    }, []);
    console.log(studentResult)



    return (
        <>
            <div className='studentResultBody'>
                {
                    studentResult.length===0 ? <h2>There is no result for you right now</h2> : (
                        studentResult.map((studentResult)=>(
                            <div className='studentResultmainbody'>
                    <div className='studentResultmainbodyheader'>
                        <div className='studentResultmainbodyheaderlogodiv'>
                            <div className='studentResultmainbodyheaderlogo'>
                                <img src="" alt="" />
                            </div>
                            <div className='studentResultmainbodyheaderlogodivschoolName'>
                                <p>{studentData.data.school.schoolName}</p>
                                <p>{studentData.data.school.schoolAddress}</p>
                            </div>
                        </div>
                        <div className='studentResultmainbodyheaderTerm'>
                            <p>FIRST TERM 2021/2022 REPORT CARD</p>
                        </div>
                        <div className='studentResultmainbodyheaderStudentnamediv'>
                            <div className='studentResultmainbodyheaderStudentname'>
                                <p className='studentstudentNameP'>{studentData.data.data.studentName}</p>
                                <p className='studentstudentNameP2'>{studentData.data.data.studentEmail}</p>
                            </div>

                            <div className='studentResultmainbodyheaderStudentname2'>
                                <p className='studentstudentNameP'>{studentData.data.data.studentClass}</p>
                                {/* <p className='studentstudentNameP2'>{studentData.data.data.studentAge}</p> */}
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
                                    </tr>
                                </th>
                            </tr>
                            {/* <tr className='TotalA'>
            <td>Maths</td>
            <td>English</td>
            <td>Physics</td>
            <td>Arabic</td>
            <td>Arabic</td>
            <td>Arabic</td>
            <td>Arabic</td>
            <td>Arabic</td>
            <td>Arabic</td>
            <td>Arabic</td>
        </tr> */}

                            {/* <tr className='TotalB'>
			<td>67</td>
			<td>19</td>
			<td>99</td>
		</tr> */}
                            {/* <tr>
			<td>87</td>
			<td>25</td>
			<td>77</td>

          
		</tr>  */}
                        </table>
                    </div>
                </div>
                        ))
                    )
                }
            </div>
        </>
    )
}

export default StudentUser