import React from 'react'
import { useEffect, useState } from "react";
import "./ResultSheet.css"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { SpinnerCircular } from 'spinners-react';
import Swal from 'sweetalert2';


const ResultSheet = ({shareId}) => {
    // const {id} = useParams
    const [loading, setLoading] = useState(false)
    const [subName1, setSubName1] = useState("");
    const [subTest1, setSubTest1] = useState(0);
    const [subExam1, setSubExam1] = useState(0);
    const [subName2, setSubName2] = useState("");
    const [subTest2, setSubTest2] = useState(0);
    const [subExam2, setSubExam2] = useState(0);
    const [subName3, setSubName3] = useState("");
    const [subTest3, setSubTest3] = useState(0);
    const [subExam3, setSubExam3] = useState(0);
    const [subName4, setSubName4] = useState("");
    const [subTest4, setSubTest4] = useState(0);
    const [subExam4, setSubExam4] = useState(0);
    const [subName5, setSubName5] = useState("");
    const [subTest5, setSubTest5] = useState(0);
    const [subExam5, setSubExam5] = useState(0);
    const [subName6, setSubName6] = useState("");
    const [subTest6, setSubTest6] = useState(0);
    const [subExam6, setSubExam6] = useState(0);
    const [subName7, setSubName7] = useState("");
    const [subTest7, setSubTest7] = useState(0);
    const [subExam7, setSubExam7] = useState(0);
    const [subName8, setSubName8] = useState("");
    const [subTest8, setSubTest8] = useState(0);
    const [subExam8, setSubExam8] = useState(0);
    const [subName9, setSubName9] = useState("");
    const [subTest9, setSubTest9] = useState(0);
    const [subExam9, setSubExam9] = useState(0);
    const [subName10, setSubName10] = useState("");
    const [subTest10, setSubTest10] = useState(0);
    const [subExam10, setSubExam10] = useState(0);
    // const [Total, setTotal] = useState(0);
    const [successMessage, setSuccessMessage] = useState("");

    const subTotal1 = parseInt(subTest1) + parseInt(subExam1);
    const subTotal2 = parseInt(subTest2) + parseInt(subExam2);
    const subTotal3 = parseInt(subTest3) + parseInt(subExam3);
    const subTotal4 = parseInt(subTest4) + parseInt(subExam4);
    const subTotal5 = parseInt(subTest5) + parseInt(subExam5);
    const subTotal6 = parseInt(subTest6) + parseInt(subExam6);
    const subTotal7 = parseInt(subTest7) + parseInt(subExam7);
    const subTotal8 = parseInt(subTest8) + parseInt(subExam8);
    const subTotal9 = parseInt(subTest9) + parseInt(subExam9);
    const subTotal10 = parseInt(subTest10) + parseInt(subExam10);

    const resultTotal = parseInt(
        subTotal1 +
        subTotal2 +
        subTotal3 +
        subTotal4 +
        subTotal5 +
        subTotal6 +
        subTotal7 +
        subTotal8 +
        subTotal9 +
        subTotal10
    );
    const StudentApi = useSelector(state => state.persisitedReducer.studentApi)
    const studentId = StudentApi._id
    console.log(studentId)
    // setTotal(resultTotal,)

    const url =
        `https://progresspal-8rxj.onrender.com/progressPal/addResult/${shareId}`;
    const resultsData = {
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
    };

    const showAlert = () => {
        Swal.fire({
            title: 'Result',
            text: 'Create Student Result',
            icon: 'info',
            cancelButtonColor: 'cyan',
            showCancelButton: true,
            confirmButtonText: 'yes',
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true)

                CreateResult()
            }
        });
    }
    const nav = useNavigate()

    const CreateResult = () => {
        axios.post(url, resultsData)
        .then((res) => {
            console.log(res)
            setLoading(false)
            Swal.fire({
                title: 'Success',
                text: res.data.message,
                icon: 'success',
                cancelButtonColor: 'cyan',
                showCancelButton: false,
                confirmButtonText: 'yes',
            }).then((result) => {
            if (result.isConfirmed) {
                nav("/Dashboard/teacher/teacherUser/:id")
                return
            }
        });
        })
            
        // setSuccessMessage(res.data.message)
        .catch((err) => {
            console.log(err);
            setLoading(false)
            Swal.fire({
                title: 'Fail',
                text: err.data.data.message,
                icon: 'error',
                cancelButtonColor: 'cyan',
                showCancelButton: false,
                confirmButtonText: 'yes',
            })

        });
    };
    console.log(shareId)





    return (
        <>

            <main className="ResultBody">
                <section className="ResultBodyWrapper">
                    <h2>Enter Student Results</h2>
                    <div className="ResultsHolder">
                        <div className="ResultHeader">
                            <ul>
                                <li>Subjects</li>
                                <li>Test Score</li>
                                <li>Exam Score</li>
                                <li>Total Score</li>
                            </ul>
                        </div>
                        <span className="SubjectScore">
                            <input
                                type="text"
                                value={subName1}
                                onChange={(e) => setSubName1(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subTest1}
                                onChange={(e) => setSubTest1(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subExam1}
                                onChange={(e) => setSubExam1(e.target.value)}
                            />
                            <input type="number" value={subTotal1} />
                        </span>
                        <span className="SubjectScore">
                            <input
                                type="text"
                                value={subName2}
                                onChange={(e) => setSubName2(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subTest2}
                                onChange={(e) => setSubTest2(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subExam2}
                                onChange={(e) => setSubExam2(e.target.value)}
                            />
                            <input type="number" value={subTotal2} />
                        </span>
                        <span className="SubjectScore">
                            <input
                                type="text"
                                value={subName3}
                                onChange={(e) => setSubName3(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subTest3}
                                onChange={(e) => setSubTest3(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subExam3}
                                onChange={(e) => setSubExam3(e.target.value)}
                            />
                            <input type="number" value={subTotal3} />
                        </span>
                        <span className="SubjectScore">
                            <input
                                type="text"
                                value={subName4}
                                onChange={(e) => setSubName4(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subTest4}
                                onChange={(e) => setSubTest4(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subExam4}
                                onChange={(e) => setSubExam4(e.target.value)}
                            />
                            <input type="number" value={subTotal4} />
                        </span>
                        <span className="SubjectScore">
                            <input
                                type="text"
                                value={subName5}
                                onChange={(e) => setSubName5(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subTest5}
                                onChange={(e) => setSubTest5(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subExam5}
                                onChange={(e) => setSubExam5(e.target.value)}
                            />
                            <input type="number" value={subTotal5} />
                        </span>
                        <span className="SubjectScore">
                            <input
                                type="text"
                                value={subName6}
                                onChange={(e) => setSubName6(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subTest6}
                                onChange={(e) => setSubTest6(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subExam6}
                                onChange={(e) => setSubExam6(e.target.value)}
                            />
                            <input type="number" value={subTotal6} />
                        </span>
                        <span className="SubjectScore">
                            <input
                                type="text"
                                value={subName7}
                                onChange={(e) => setSubName7(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subTest7}
                                onChange={(e) => setSubTest7(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subExam7}
                                onChange={(e) => setSubExam7(e.target.value)}
                            />
                            <input type="number" value={subTotal7} />
                        </span>
                        <span className="SubjectScore">
                            <input
                                type="text"
                                value={subName8}
                                onChange={(e) => setSubName8(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subTest8}
                                onChange={(e) => setSubTest8(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subExam8}
                                onChange={(e) => setSubExam8(e.target.value)}
                            />
                            <input type="number" value={subTotal8} />
                        </span>
                        <span className="SubjectScore">
                            <input
                                type="text"
                                value={subName9}
                                onChange={(e) => setSubName9(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subTest9}
                                onChange={(e) => setSubTest9(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subExam9}
                                onChange={(e) => setSubExam9(e.target.value)}
                            />
                            <input type="number" value={subTotal9} />
                        </span>
                        <span className="SubjectScore">
                            <input
                                type="text"
                                value={subName10}
                                onChange={(e) => setSubName10(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subTest10}
                                onChange={(e) => setSubTest10(e.target.value)}
                            />
                            <input
                                type="number"
                                value={subExam10}
                                onChange={(e) => setSubExam10(e.target.value)}
                            />
                            <input type="number" value={subTotal10} />
                        </span>
                        <div className='TeacherCreateRsltBtnDiv'>
                            <h4>TOTAL: {resultTotal}</h4>
                            <h4>TEACHER'S REMARK</h4>
                            <button onClick={showAlert} className='TeacherCreateRsltBtn'>
                            {
                                loading ? (
                                    <SpinnerCircular
                                        size={35}
                                        thickness={99}
                                        speed={100}
                                        color="rgba(18, 124, 221, 1)"
                                    />
                                ) : (
                                    "Create Result"
                                )
                            }</button>
                        </div>
                    </div>
                </section>
                {/* {successMessage === "Success creating student result" ? (
          <SuccessMessage />
        ) : null} */}
            </main>


        </>
    )
}

export default ResultSheet






const TeacherResult = () => {

    return (
        <>

        </>
    );
};

// export default TeacherResult;

// const StudentResult = () => {
//   const [schools, setSchools] = useState([])
//   const url = "https://progresspal-8rxj.onrender.com/progressPal/readAllSchools"
//   useEffect(() => {
//       axios.get(url)
//       .then(res => console.log(res))
//       .catch((err) => {
//         console.log(err)
//      })
//   }, [])
//   return (
//     <>
//       <main>
//           <button>Get Schools</button>
//       </main>
//     </>
//   )
// }
// export default StudentResult;