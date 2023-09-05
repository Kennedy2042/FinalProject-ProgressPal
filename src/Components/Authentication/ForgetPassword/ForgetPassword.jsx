import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ForgetPassword.css";
import "./ForgetPasswordMedia.css";
import { PiWarningCircleBold } from "react-icons/pi";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { SpinnerCircular } from "spinners-react";
import ProgressPalLogo from "../../../assets/ProgressPalLogo.png";

const ForgetPassword = () => {
  const [schoolEmail, setSchoolEmail] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const [select, setSelect] = useState();
  const [loading, setloading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const url =
    "https://progresspal-8rxj.onrender.com/progressPal/forgot-password";
  const url2 =
    "https://progresspal-8rxj.onrender.com/progressPal/forgot-passwordTeacher";
  const url3 =
    "https://progresspal-8rxj.onrender.com/progressPal/forgot-passwordStudent";
  const data = { schoolEmail };
  const info = { teacherEmail };
  const detail = { studentEmail };

  const Forget = (e) => {
    setloading(true);
    e.preventDefault();
    axios
      .post(
        select === "schoolAdmin" ? url : select === "teacher" ? url2 : url3,
        select === "schoolAdmin" ? data : select === "teacher" ? info : detail
      )
      .then((res) => {
        console.log(res);
        setSuccess(res.data.message);
        Swal.fire({
          title: "Success",
          text: res.data.message,
          icon: "Success",
          confirmButtonText: "OK",
        });
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setSuccess(err.response.data.message);
        setloading(false);
        Swal.fire({
          title: "Failed",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      });

    console.log(data);
    console.log(info);
    console.log(detail);
  };

  useEffect(() => {
    setSelect("0");
  }, []);

  return (
    <div className="ForgetPasswordBody">
      <div className="ForgetPasswordMainBody">
        <img src={ProgressPalLogo} alt="" />
        {/* <PiWarningCircleBold size={70}/> */}
        <h1 className="ForgetPasswordH1">Forgotten Password</h1>
        <p className="ForgetPasswordP">
          Enter your email and we'll send you a link to reset your password
        </p>
        <select
          className="ForgetPasswordSelect"
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option value="0">Forgotten password as </option>
          <option value="schoolAdmin">School Admin</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>
        {/* <input className="ForgetPasswordInput" type="email" placeholder='Enter your Email'value={schoolEmail} onChange={(e)=>setSchoolEmail(e.target.value)}/> */}
        {select === "schoolAdmin" && (
          <input
            type="email"
            className="ForgetPasswordInput"
            placeholder="Email"
            value={schoolEmail}
            onChange={(e) => setSchoolEmail(e.target.value)}
          />
        )}
        {select === "teacher" && (
          <input
            type="email"
            className="ForgetPasswordInput"
            placeholder="Email"
            value={teacherEmail}
            onChange={(e) => setTeacherEmail(e.target.value)}
          />
        )}
        {select === "student" && (
          <input
            type="email"
            className="ForgetPasswordInput"
            placeholder="Email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
          />
        )}
        <button className="ForgetPasswordSubmitBtn" onClick={Forget}>
          {loading ? (
            <SpinnerCircular
              size={25}
              thickness={99}
              speed={100}
              color="rgba(18, 124, 221, 1)"
            />
          ) : (
            "Submit"
          )}
        </button>
        <div
          className="ForgetPasswordSubmitBtnLoginBtn"
          onClick={() => navigate("/login")}
        >
          <MdOutlineArrowBackIos />
          Back to Login
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
