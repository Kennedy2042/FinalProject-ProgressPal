import React from "react";
import { useEffect, useState } from "react";
import "./ResultSheet.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { SpinnerCircular } from "spinners-react";
import Swal from "sweetalert2";

const ResultSheet = () => {
  const { shareId } = useParams();
  const nav = useNavigate();

  const [loading, setLoading] = useState(false);
  const [subName1, setSubName1] = useState("");
  const [subTest1, setSubTest1] = useState("");
  const [subExam1, setSubExam1] = useState("");
  const [subName2, setSubName2] = useState("");
  const [subTest2, setSubTest2] = useState("");
  const [subExam2, setSubExam2] = useState("");
  const [subName3, setSubName3] = useState("");
  const [subTest3, setSubTest3] = useState("");
  const [subExam3, setSubExam3] = useState("");
  const [subName4, setSubName4] = useState("");
  const [subTest4, setSubTest4] = useState("");
  const [subExam4, setSubExam4] = useState("");
  const [subName5, setSubName5] = useState("");
  const [subTest5, setSubTest5] = useState("");
  const [subExam5, setSubExam5] = useState("");
  const [subName6, setSubName6] = useState("");
  const [subTest6, setSubTest6] = useState("");
  const [subExam6, setSubExam6] = useState("");
  const [subName7, setSubName7] = useState("");
  const [subTest7, setSubTest7] = useState("");
  const [subExam7, setSubExam7] = useState("");
  const [subName8, setSubName8] = useState("");
  const [subTest8, setSubTest8] = useState("");
  const [subExam8, setSubExam8] = useState("");
  const [subName9, setSubName9] = useState("");
  const [subTest9, setSubTest9] = useState("");
  const [subExam9, setSubExam9] = useState("");
  const [subName10, setSubName10] = useState("");
  const [subTest10, setSubTest10] = useState("");
  const [subExam10, setSubExam10] = useState("");
  const [teacherRemark, setTeacherRemark] = useState("");
  // const [Total, setTotal] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  const calculateSubTotal1 = (subTest1, subExam1) => {
    const parsedTest1 = subTest1 === "" ? 0 : parseFloat(subTest1);
    const parsedExam1 = subExam1 === "" ? 0 : parseFloat(subExam1);
    return parsedTest1 + parsedExam1;

  }
  const calculateSubTotal2 = (subTest2, subExam2) => {
    const parsedTest2 = subTest2 === "" ? 0 : parseFloat(subTest2);
    const parsedExam2 = subExam2 === "" ? 0 : parseFloat(subExam2);
    return parsedTest2 + parsedExam2;

  }

  const calculateSubTotal3 = (subTest3, subExam3) => {
    const parsedTest3 = subTest3 === "" ? 0 : parseFloat(subTest3);
    const parsedExam3 = subExam3 === "" ? 0 : parseFloat(subExam3);
    return parsedTest3 + parsedExam3;

  }

  const calculateSubTotal4 = (subTes4, subExa4) => {
    const parsedTes4 = subTes4 === "" ? 0 : parseFloat(subTes4);
    const parsedExa4 = subExa4 === "" ? 0 : parseFloat(subExam4);
    return parsedTes4 + parsedExa4;

  }

  const calculateSubTotal5 = (subTest5, subExam5) => {
    const parsedTest5 = subTest5 === "" ? 0 : parseFloat(subTest5);
    const parsedExam5 = subExam5 === "" ? 0 : parseFloat(subExam5);
    return parsedTest5 + parsedExam5;

  }

  const calculateSubTotal6 = (subTest6, subExam6) => {
    const parsedTest6 = subTest6 === "" ? 0 : parseFloat(subTest6);
    const parsedExam6 = subExam6 === "" ? 0 : parseFloat(subExam6);
    return parsedTest6 + parsedExam6;

  }

  const calculateSubTotal7 = (subTest7, subExam7) => {
    const parsedTest7 = subTest7 === "" ? 0 : parseFloat(subTest7);
    const parsedExam7 = subExam7 === "" ? 0 : parseFloat(subExam7);
    return parsedTest7 + parsedExam7;

  }

  const calculateSubTotal8 = (subTest8, subExam8) => {
    const parsedTest8 = subTest8 === "" ? 0 : parseFloat(subTest8);
    const parsedExam8 = subExam8 === "" ? 0 : parseFloat(subExam8);
    return parsedTest8 + parsedExam8;

  }

  const calculateSubTotal9 = (subTest9, subExam9) => {
    const parsedTest9 = subTest9 === "" ? 0 : parseFloat(subTest9);
    const parsedExam9 = subExam9 === "" ? 0 : parseFloat(subExam9);
    return parsedTest9 + parsedExam9;

  }

  const calculateSubTotal10 = (subTest10, subExam10) => {
    const parsedTest10 = subTest10 === "" ? 0 : parseFloat(subTest10);
    const parsedExam10 = subExam10 === "" ? 0 : parseFloat(subExam10);
    return parsedTest10 + parsedExam10;

  }

  const subTotal1 = calculateSubTotal1(subTest1, subExam1);
  const subTotal2 = calculateSubTotal2(subTest2, subExam2);
  const subTotal3 = calculateSubTotal3(subTest3, subExam3);
  const subTotal4 = calculateSubTotal4(subTest4, subExam4);
  const subTotal5 = calculateSubTotal5(subTest5, subExam5);
  const subTotal6 = calculateSubTotal6(subTest6, subExam6);
  const subTotal7 = calculateSubTotal7(subTest7, subExam7);
  const subTotal8 = calculateSubTotal8(subTest8, subExam8);
  const subTotal9 = calculateSubTotal9(subTest9, subExam9);
  const subTotal10 = calculateSubTotal10(subTest10, subExam10);

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
    subTotal10)
    ;

  // setTotal(resultTotal,)
  // const resultPercentage = resultTotal/10
  // const resultPercentage1 = resultPercentage/10
  // console.log(resultPercentage)

  // if (resultTotal <= 450 ) {
  //   setTeacherRemark("POOR RESULT")
  // } else if (resultTotal >= 460 ) {
  //   setTeacherRemark("FAIR RESULT")
  // } else if (resultTotal >= 600 ) {
  //   setTeacherRemark("GOOD RESULT")
  // } else if (resultTotal >= 460 ) {
  //   setTeacherRemark("FAIR RESULT")
  // }



  const url = `https://progresspal-8rxj.onrender.com/progressPal/addResult/${shareId}`;
  console.log(shareId)
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
      title: "Result",
      text: "Create Student Result",
      icon: "info",
      cancelButtonColor: "cyan",
      showCancelButton: true,
      confirmButtonText: "yes",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);

        CreateResult();
      }
    });
  };

  const CreateResult = () => {
    axios
      .post(url, resultsData)
      .then((res) => {
        console.log(res);
        setLoading(false);
        Swal.fire({
          title: "Success",
          text: res.data.message,
          icon: "success",
          cancelButtonColor: "cyan",
          showCancelButton: false,
          confirmButtonText: "yes",
          showConfirmButton: false,
          timer: 2000
        })

        nav("/Dashboard/teacher/teacher_student_dashboard");
      })

      // setSuccessMessage(res.data.message)
      .catch((err) => {
        console.log(err);
        setLoading(false);
        Swal.fire({
          title: "Fail",
          text: err.response.data,
          icon: "error",
          cancelButtonColor: "cyan",
          showCancelButton: false,
          confirmButtonText: "Try again",
        });
      });
  };
  console.log(shareId);

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
                className="ScoreInput"
                type="text"
                value={subName1}
                onChange={(e) => setSubName1(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subTest1}
                onChange={(e) => setSubTest1(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subExam1}
                onChange={(e) => setSubExam1(e.target.value)}
              />
              <input className="ScoreInput" type="number" value={subTotal1} />
            </span>
            <span className="SubjectScore">
              <input
                className="ScoreInput"
                type="text"
                value={subName2}
                onChange={(e) => setSubName2(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subTest2}
                onChange={(e) => setSubTest2(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subExam2}
                onChange={(e) => setSubExam2(e.target.value)}
              />
              <input className="ScoreInput" type="number" value={subTotal2} />
            </span>
            <span className="SubjectScore">
              <input
                className="ScoreInput"
                type="text"
                value={subName3}
                onChange={(e) => setSubName3(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subTest3}
                onChange={(e) => setSubTest3(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subExam3}
                onChange={(e) => setSubExam3(e.target.value)}
              />
              <input className="ScoreInput" type="number" value={subTotal3} />
            </span>
            <span className="SubjectScore">
              <input
                className="ScoreInput"
                type="text"
                value={subName4}
                onChange={(e) => setSubName4(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subTest4}
                onChange={(e) => setSubTest4(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subExam4}
                onChange={(e) => setSubExam4(e.target.value)}
              />
              <input className="ScoreInput" type="number" value={subTotal4} />
            </span>
            <span className="SubjectScore">
              <input
                className="ScoreInput"
                type="text"
                value={subName5}
                onChange={(e) => setSubName5(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subTest5}
                onChange={(e) => setSubTest5(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subExam5}
                onChange={(e) => setSubExam5(e.target.value)}
              />
              <input className="ScoreInput" type="number" value={subTotal5} />
            </span>
            <span className="SubjectScore">
              <input
                className="ScoreInput"
                type="text"
                value={subName6}
                onChange={(e) => setSubName6(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subTest6}
                onChange={(e) => setSubTest6(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subExam6}
                onChange={(e) => setSubExam6(e.target.value)}
              />
              <input className="ScoreInput" type="number" value={subTotal6} />
            </span>
            <span className="SubjectScore">
              <input
                className="ScoreInput"
                type="text"
                value={subName7}
                onChange={(e) => setSubName7(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subTest7}
                onChange={(e) => setSubTest7(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subExam7}
                onChange={(e) => setSubExam7(e.target.value)}
              />
              <input className="ScoreInput" type="number" value={subTotal7} />
            </span>
            <span className="SubjectScore">
              <input
                className="ScoreInput"
                type="text"
                value={subName8}
                onChange={(e) => setSubName8(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subTest8}
                onChange={(e) => setSubTest8(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subExam8}
                onChange={(e) => setSubExam8(e.target.value)}
              />
              <input className="ScoreInput" type="number" value={subTotal8} />
            </span>
            <span className="SubjectScore">
              <input
                className="ScoreInput"
                type="text"
                value={subName9}
                onChange={(e) => setSubName9(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subTest9}
                onChange={(e) => setSubTest9(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subExam9}
                onChange={(e) => setSubExam9(e.target.value)}
              />
              <input className="ScoreInput" type="number" value={subTotal9} />
            </span>
            <span className="SubjectScore">
              <input
                className="ScoreInput"
                type="text"
                value={subName10}
                onChange={(e) => setSubName10(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subTest10}
                onChange={(e) => setSubTest10(e.target.value)}
              />
              <input
                className="ScoreInput"
                type="number"
                value={subExam10}
                onChange={(e) => setSubExam10(e.target.value)}
              />
              <input className="ScoreInput" type="number" value={subTotal10} />
            </span>
            <div className="TeacherCreateRsltBtnDiv">
              <div className="StudentResultTotalScoresDiv">
                <h4 className="StudentResultTotalScores">
                  TOTAL: {resultTotal}
                </h4>
              </div>
              <div className="StudentResultButtonHolder">
                <button onClick={showAlert} className="TeacherCreateRsltBtn">
                  {loading ? (
                    <SpinnerCircular
                      size={35}
                      thickness={99}
                      speed={100}
                      color="rgba(18, 124, 221, 1)"
                    />
                  ) : (
                    "Create Result"
                  )}
                </button>
                <button
                  className="TeacherBackBtn"
                  onClick={() => {
                    nav("/Dashboard/teacher/teacher_student_dashboard");
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* {successMessage === "Success creating student result" ? (
          <SuccessMessage />
        ) : null} */}
      </main>
    </>
  );
};

export default ResultSheet;

const TeacherResult = () => {
  return <></>;
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
