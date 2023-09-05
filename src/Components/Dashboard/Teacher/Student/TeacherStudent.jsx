import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import AboutUsImage from "../../../../assets/AboutUsImage.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { allStudentApi } from "../../../../Redux/ProductState";
import ResultSheet from "../ResultSheet/ResultSheet";
import "../Teacher.css";
import "./TeacherStudentComponent.css";
import Swal from "sweetalert2";
import { SpinnerCircular } from "spinners-react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import TeacherViewStudentProfile from "./TeacherViewStudentProfile";

const TeacherStudent = () => {
  const nav = useNavigate();
  const [addStudents, setAddStudents] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studentPassport, setStudentPassport] = useState("");
  const [shareId, setShareId] = useState("");
  const [loading, setLoading] = useState(false);
  const [studentProfile, setStudentProfile] = useState(false);
  const [validMessage, setValidMessage] = useState({
    error: "false",
    value: "",
    msg: "",
  });
  const teacherData = useSelector((state) => state.persisitedReducer.loginUser);
  const BearerToken = teacherData.data.token;
  // console.log(BearerToken);
  const dispatch = useDispatch();
  const File = (e) => {
    const file = e.target.files[0];
    setStudentPassport(file);

    // if (file) {
    //   const fileType = file.type;
    //   if (fileType.startsWith("image/")) {
    //     setStudentPassport(file);
    //   } else {
    //     setValidMessage({
    //       error: "true",
    //       value: "schoolLogo",
    //       msg: "Please select an image",
    //     });
    //     e.target.value = "";
    //   }
    // }
    // console.log(file);
  };
  const StudentApi = useSelector((state) => state.persisitedReducer.studentApi);
  // const StudentDetails = useSelector(
  //   (state) => state.persisitedReducer.newStudentDetails
  // );
  const [result, setResult] = useState(false);
  // console.log("first", StudentDetails);

  const showAlert = () => {
    Swal.fire({
      title: "Register Link",
      text: "You are about to Register a Student",
      icon: "info",
      cancelButtonColor: "cyan",
      showCancelButton: true,
      confirmButtonText: "yes",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        Register();
      }
    });
  };

  const url = `https://progresspal-8rxj.onrender.com/progressPal/newStudent/${teacherData.data.data._id}`;

  async function Register(e) {
    console.log("test");

    // e.preventDefault()
    // console.log(teacherData);

    const data = new FormData();
    data.append("studentName", studentName);
    data.append("studentClass", studentClass);
    data.append("studentAge", studentAge);
    data.append("studentEmail", studentEmail);
    data.append("password", password);
    data.append("studentPassport", studentPassport);
    axios
      .post(url, data, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${BearerToken}`,
        },
      })
      .then((res) => {
        // console.log(res);
        Swal.fire({
          title: "Success!",
          text: res.data.message,
          icon: "success",
          confirmButtonText: "Ok",
          showConfirmButton: false,
          timer: 1500
        });
        setAddStudents(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        if (err?.message === "Network Error") {
          Swal.fire({
            title: "Student Registration Failed",
            text: err.message,
            icon: "error",
            confirmButtonText: "okay",
            timer: 1200,
            showConfirmButton: false,
          })
          setLoading(false)
        }
        // setSuccessErrorMessage(err.response.data.message);
        setLoading(false)
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
          timer: 1200,
          showConfirmButton: false,
        });
        setLoading(false);
      });
  }

  const getUrl = `https://progresspal-8rxj.onrender.com/progressPal/teacherStudents/${teacherData.data.data._id}`;
  async function getStudentApi() {
    axios
      .get(getUrl)
      .then((res) => {
        // console.log(res.data.data, "response from api");
        dispatch(allStudentApi(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getStudentApi();
    const interval = setInterval(getStudentApi, 5000);
    return () => clearInterval(interval);
    // getOneStudentApi();
  }, []);

  // function ShowPop(id) {
  //   setToogle(!toggle);
  //   getItemData(id);
  //   console.log(id);
  // }

  return (
    <>
      {/* {
                result ? <div className="TeacherResultSheetHolder">
                    <AiOutlineCloseCircle size={38} style={{ fill: "red", cursor: "pointer" }} onClick={() => {
                        setResult(false)
                    }} />
                    <ResultSheet shareId={shareId} />

                </div> : null
            } */}

      {studentProfile ? <TeacherViewStudentProfile /> : null}

      <div className="TeacherStudentDashBoardRightBodyTitle">
        <div className="TeacherDashBoardRightBodyTitleHolderDiv">
          <h1 className="TeacherDashboardRightBodyTitleH1">Students</h1>
        </div>
        <div className="TeacherDashboardSearchIconDiv">
          {/* <input
            type="text"
            placeholder="Search For Students..."
            className="TeacherDashboardSearchIconInput"
          />
          <div className="TeacherDashboardSearchIconInputImage">
            <AiOutlineSearch fill="rgb(218, 215, 215)" size={20} />
          </div> */}
        </div>
        <div className="AdminDashboardAddTeacherBtnDiv">
          <button
            className="AdminDashboardAddTeacherBtn"
            onClick={() => {
              setAddStudents(true);
            }}
          >
            Add Student
          </button>
        </div>
      </div>

      <div className="AdminDashboardTeachersCard">
        {StudentApi.length === 0 ? (
          <h2>No Students added</h2>
        ) : (
          Array.from(StudentApi)?.map((props) => (
            <span className="TeacherStudentDetailsCard" key={props?._id}>
              <div className="TeacherStudentMainDetailsHolder">
                <div className="TeacherStudentProfileImage2">
                  <img src={props?.studentPassport} alt="Student Passport" />
                </div>
                <h2 className="TeacherStudentName">{props?.studentName}</h2>
                <p className="TeacherStudentEmail">{props?.studentEmail}</p>
                <h4 className="TeacherStudentClass">{props?.studentClass}</h4>
              </div>
              <div className="TeacherUpdateStudentProfileHolder">
                <button
                  className="TeacherAddStudentResult"
                  onClick={() => {
                    setResult(true);
                    setShareId(props._id);
                    nav(`/teacher_create_studentResult/${props._id}`);
                  }}
                >
                  Add Result
                </button>
                <button className="TeacherViewStudentProfileBtn" onClick={() => {
                  nav(`/teacherdashboard/studentProfile/${props._id}`)
                }}>
                  View Profile
                </button>
              </div>
            </span>
          ))
        )}
      </div>

      {addStudents ? (
        <div className="AddStudentPop">
          <AiOutlineCloseCircle className="OutLineCloseIcon"
            // size={30}
            // style={{ fill: "red", cursor: "pointer" }}
            onClick={() => {
              setAddStudents(false);
            }}
          />
          <div className="AddStudentPopDiv">
            {/* <div className="StudentEmailInput"> */}
            <h3 className="studentinfotext">STUDENT INFO</h3>
            <input
              type="text"
              placeholder="Student Name"
              className="StudentEmail"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Student Class"
              className="StudentEmail"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
            />
            <input
              type="text"
              placeholder="Student Age"
              className="StudentEmail"
              value={studentAge}
              onChange={(e) => setStudentAge(e.target.value)}
            />
            <input
              type="email"
              placeholder="Student Email"
              className="StudentEmail"
              value={studentEmail}
              onChange={(e) => setStudentEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Student Pin"
              className="StudentEmail"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="StudentEmaildiv">
              <input
                type="file"
                accept="image/*"
                placeholder="Student Passport"
                className="StudentImageInput"
                onChange={File}
              />
            </div>
            <button className="AddStudentButton" onClick={showAlert}>
              {loading ? (
                <SpinnerCircular
                  size={35}
                  thickness={99}
                  speed={100}
                  color="rgba(18, 124, 221, 1)"
                />
              ) : (
                "Create"
              )}
            </button>
            {/* </div> */}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TeacherStudent;
