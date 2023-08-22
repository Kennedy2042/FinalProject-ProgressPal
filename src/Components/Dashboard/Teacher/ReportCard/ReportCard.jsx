import React, { useEffect, useState } from 'react'
import './ReportCard.css'
import axios from 'axios';
import { useSelector } from 'react-redux';
// import anime3 from "../../assets/anime3.jpg"
const Result = () => {
    const studentData = useSelector(state => state.persisitedReducer.loginUser)
    const [studentResult, setStudentResult] = useState([])

    const url =
        `https://progresspal-8rxj.onrender.com/progressPal/studentResult/${studentData.data.data._id}`;

    useEffect(() => {
        axios.get(url)
            .then((res) => setStudentResult(res.data.data))
            .catch((err) => {
                console.log("This is an error", err)
            })
    }, []);
    console.log(studentResult)
    console.log(studentData)

    return (
        <div className='ResultBody'>
            <div className='Resultmainbody'>
                <div className='Resultmainbodyheader'>
                    <div className='Resultmainbodyheaderlogodiv'>
                        <div className='Resultmainbodyheaderlogo'>
                            <img src={studentData.data.data.studentPassport} alt="" />
                        </div>
                        <div className='ResultmainbodyheaderlogodivschoolName'>
                            <p>Success Academy College</p>
                            <p>22 alafia street apapa badagary </p>
                        </div>
                    </div>
                    <div className='ResultmainbodyheaderTerm'>
                        <p>FIRST TERM 2021/2022 REPORT CARD</p>
                    </div>
                    <div className='ResultmainbodyheaderStudentnamediv'>
                        <div className='ResultmainbodyheaderStudentname'>
                            <p className='studentNameP'>Student Name</p>
                            <p className='studentNameP2'>{studentData.data.data.studentName}</p>
                        </div>

                        <div className='ResultmainbodyheaderStudentname2'>
                            <p className='studentNameP'>Class</p>
                            <p className='studentNameP2'>{studentData.data.data.studentClass}</p>
                        </div>

                        <div></div>
                    </div>
                </div>
                <div className='ResultTable'>
                    <table>
                        <tr>
                            <th>Subjects
                                <tr className='TotalA'>
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
                                <tr className='TotalB'>
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
                                <tr className='TotalB'>
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
                                <tr className='TotalB'>
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
        </div>
    )
}

export default Result;