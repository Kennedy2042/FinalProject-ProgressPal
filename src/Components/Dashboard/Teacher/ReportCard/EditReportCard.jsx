import React from 'react'
import { useEffect, useState } from "react";
import "./EditReportCard.css"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { SpinnerCircular } from 'spinners-react';
import Swal from 'sweetalert2';



const EditReportCard = (resultId) => {
    // console.log("first", resultId)
    const nav = useNavigate()
    const studentId = useParams()
    console.log(studentId)
    const [resultsData, setResultsData] = useState({
        subName1: "",
        subTest1: "",
        subExam1: "",
        subTotal1: "",
        subName2: "",
        subTest2: "",
        subExam2: "",
        subTotal2: "",
        subName3: "",
        subTest3: "",
        subExam3: "",
        subTotal3: "",
        subName4: "",
        subTest4: "",
        subExam4: "",
        subTotal4: "",
        subName5: "",
        subTest5: "",
        subExam5: "",
        subTotal5: "",
        subName6: "",
        subTest6: "",
        subExam6: "",
        subTotal6: "",
        subName7: "",
        subTest7: "",
        subExam7: "",
        subTotal7: "",
        subName8: "",
        subTest8: "",
        subExam8: "",
        subTotal8: "",
        subName9: "",
        subTest9: "",
        subExam9: "",
        subTotal9: "",
        subName10: "",
        subTest10: "",
        subExam10: "",
        subTotal10: "",
        resultTotal: "",
    })

    const [loading, setLoading] = useState(false)

    const url =
        `https://progresspal-8rxj.onrender.com/progressPal/updateResult/`;
    // resultsData.subTotal1 = parseInt(resultsData.subTest1) + parseInt(resultsData.subExam1);
    // resultsData.subTotal2 = parseInt(resultsData.subTest2) + parseInt(resultsData.subExam2);
    // resultsData.subTotal3 = parseInt(resultsData.subTest3) + parseInt(resultsData.subExam3);
    // resultsData.subTotal4 = parseInt(resultsData.subTest4) + parseInt(resultsData.subExam4);
    // resultsData.subTotal5 = parseInt(resultsData.subTest5) + parseInt(resultsData.subExam5);
    // resultsData.subTotal6 = parseInt(resultsData.subTest6) + parseInt(resultsData.subExam6);
    // resultsData.subTotal7 = parseInt(resultsData.subTest7) + parseInt(resultsData.subExam7);
    // resultsData.subTotal8 = parseInt(resultsData.subTest8) + parseInt(resultsData.subExam8);
    // resultsData.subTotal9 = parseInt(resultsData.subTest9) + parseInt(resultsData.subExam9);
    // resultsData.subTotal10 = parseInt(resultsData.subTest10) + parseInt(resultsData.subExam10);
    // resultsData.resultTotal = parseInt(
    //     resultsData.subTotal1) +
    //     parseInt(resultsData.subTotal2) +
    //     parseInt(resultsData.subTotal3) +
    //     parseInt(resultsData.subTotal4) +
    //     parseInt(resultsData.subTotal5) +
    //     parseInt(resultsData.subTotal6) +
    //     parseInt(resultsData.subTotal7) +
    //     parseInt(resultsData.subTotal8) +
    //     parseInt(resultsData.subTotal9) +
    //     parseInt(resultsData.subTotal10)
    // ;
    const {
        subName1,
        subTest1,
        subExam1,
        subTotal1,
        subName2,
        subTest2,
        subExam2,
        subTotal2,
        subName3,
        subTest3,
        subExam3,
        subTotal3,
        subName4,
        subTest4,
        subExam4,
        subTotal4,
        subName5,
        subTest5,
        subExam5,
        subTotal5,
        subName6,
        subTest6,
        subExam6,
        subTotal6,
        subName7,
        subTest7,
        subExam7,
        subTotal7,
        subName8,
        subTest8,
        subExam8,
        subTotal8,
        subName9,
        subTest9,
        subExam9,
        subTotal9,
        subName10,
        subTest10,
        subExam10,
        subTotal10,
        resultTotal,
    } = resultsData;
    const onInputChange = (e) => {
        const { name, value } = e.target;

        setResultsData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const showAlert = () => {
        Swal.fire({
            title: 'Edit Result',
            text: 'Are you sure you want to edit this Student Result?',
            icon: 'info',
            cancelButtonColor: 'cyan',
            showCancelButton: true,
            confirmButtonText: 'yes',
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true)
                editStudentResult()

            }
        });
    }

    // console.log(resultsData, "resultsData")


    async function editStudentResult() {
        console.log(resultsData, "Data to be sent")
        axios.put(`https://progresspal-8rxj.onrender.com/progressPal/updateResult/${resultId.resultId}`, resultsData)
            .then((res) => {
                console.log(res, "response for edit")
                setLoading(false)

            })
            .catch((err) => {
                console.log(err)
                setLoading(false)

            })
    }

    const url1 = `https://progresspal-8rxj.onrender.com/progressPal/oneResult/${resultId.resultId}`

    async function GetStudentResult() {
        try {
            const response = await axios.get(url1);
            const fetchedData = response.data.data;
            return fetchedData; // Return the fetched data
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        async function fetchData() {
            const fetchedData = await GetStudentResult();
            setResultsData(fetchedData); // Set fetched data only once
        }

        fetchData();
    }, []);

    useEffect(() => {
        // Calculate subTotal for each subject
        const updatedResultsData = { ...resultsData }; // Create a copy of the resultsData
        for (let i = 1; i <= 10; i++) {
            const subTest = parseInt(resultsData[`subTest${i}`]) || 0;
            const subExam = parseInt(resultsData[`subExam${i}`]) || 0;
            const subTotal = subTest + subExam;
            updatedResultsData[`subTotal${i}`] = subTotal.toString(); // Update the copy
        }

        // Calculate resultTotal
        const subTotalValues = Object.keys(updatedResultsData)
            .filter((key) => key.startsWith('subTotal'))
            .map((key) => parseInt(updatedResultsData[key]) || 0);
        const resultTotal = subTotalValues.reduce((total, value) => total + value, 0);
        updatedResultsData.resultTotal = resultTotal.toString(); // Update the copy

        // Set the state with the updated data
        setResultsData(updatedResultsData);
    }, [resultsData]);






    return (
        <>
            <main className="EditResultBody">
                <section className="EditResultBodyWrapper">
                    <h2>Edit Student Results</h2>
                    <div className="EditResultsHolder">
                        <div className="EditResultHeader">
                            <ul>
                                <li>Subjects</li>
                                <li>Test Score</li>
                                <li>Exam Score</li>
                                <li>Total Score</li>
                            </ul>
                        </div>
                        <span className="EditSubjectScore">
                            <input className="EditScoreInput"
                                type="text"
                                value={resultsData.subName1}
                                name='subName1'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subTest1}
                                name='subTest1'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subExam1}
                                name='subExam1'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput" onChange={(e) => onInputChange(e)} type="number" name='subTotal1' value={resultsData.subTotal1} />
                        </span>
                        <span className="EditSubjectScore">
                            <input className="EditScoreInput"
                                type="text"
                                value={resultsData.subName2}
                                name='subName2'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subTest2}
                                name='subTest2'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subExam2}
                                name='subExam2'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput" type="number" onChange={(e) => onInputChange(e)} value={resultsData.subTotal2} />
                        </span>
                        <span className="EditSubjectScore">
                            <input className="EditScoreInput"
                                type="text"
                                value={resultsData.subName3}
                                name='subName3'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subTest3}
                                name='subTest3'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subExam3}
                                name='subExam3'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput" type="number" onChange={(e) => onInputChange(e)} value={resultsData.subTotal3} />
                        </span>
                        <span className="EditSubjectScore">
                            <input className="EditScoreInput"
                                type="text"
                                value={resultsData.subName4}
                                name='subName4'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subTest4}
                                name='subTest4'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subExam4}
                                name='subExam4'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput" type="number" onChange={(e) => onInputChange(e)} value={resultsData.subTotal4} />
                        </span>
                        <span className="EditSubjectScore">
                            <input className="EditScoreInput"
                                type="text"
                                value={resultsData.subName5}
                                name='subName5'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subTest5}
                                name='subTest5'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subExam5}
                                name='subExam5'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput" type="number" onChange={(e) => onInputChange(e)} value={resultsData.subTotal5} />
                        </span>
                        <span className="EditSubjectScore">
                            <input className="EditScoreInput"
                                type="text"
                                value={resultsData.subName6}
                                name='subName6'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subTest6}
                                name='subTest6'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subExam6}
                                name='subExam6'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput" type="number" onChange={(e) => onInputChange(e)} value={resultsData.subTotal6} />
                        </span>
                        <span className="EditSubjectScore">
                            <input className="EditScoreInput"
                                type="text"
                                value={resultsData.subName7}
                                name='subName7'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subTest7}
                                name='subTest7'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subExam7}
                                name='subExam7'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput" type="number" onChange={(e) => onInputChange(e)} value={resultsData.subTotal7} />
                        </span>
                        <span className="EditSubjectScore">
                            <input className="EditScoreInput"
                                type="text"
                                value={resultsData.subName8}
                                name='subName8'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subTest8}
                                name='subTest8'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subExam8}
                                name='subExam8'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput" type="number" onChange={(e) => onInputChange(e)} value={resultsData.subTotal8} />
                        </span>
                        <span className="EditSubjectScore">
                            <input className="EditScoreInput"
                                type="text"
                                value={resultsData.subName9}
                                name='subName9'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subTest9}
                                name='subTest9'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subExam9}
                                name='subExam9'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput" type="number" onChange={(e) => onInputChange(e)} value={resultsData.subTotal9} />
                        </span>
                        <span className="EditSubjectScore">
                            <input className="EditScoreInput"
                                type="text"
                                value={resultsData.subName10}
                                name='subName10'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subTest10}
                                name='subTest10'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput"
                                type="number"
                                value={resultsData.subExam10}
                                name='subExam10'
                                onChange={(e) => onInputChange(e)}
                            />
                            <input className="EditScoreInput" type="number" onChange={(e) => onInputChange(e)} value={resultsData.subTotal10} />
                        </span>
                        <div className='EditTeacherCreateRsltBtnDiv'>
                            <h4 className='EditTeacherCreateRsltBtnDivH4'>TOTAL: <span>{resultsData.resultTotal}</span></h4>

                            <div className="EditStudentResultButtonHolder">
                                <button onClick={showAlert} className='EditTeacherEditRsltBtn'>
                                    {
                                        loading ? (
                                            <SpinnerCircular
                                                size={35}
                                                thickness={99}
                                                speed={100}
                                                color="rgba(18, 124, 221, 1)"
                                            />
                                        ) : (
                                            "Save Result"
                                        )
                                    }</button>
                                <button
                                    className="EditTeacherBackBtn"
                                    onClick={() => {
                                        nav("/Dashboard/teacher/Teacher_resultSheet");
                                    }}
                                >
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </>
    )
}

export default EditReportCard
