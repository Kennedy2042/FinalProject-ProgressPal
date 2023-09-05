import { useEffect, useState } from "react";
import "../Student/TeacherViewStudentProfile.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import TeacherStudent from "./TeacherStudent";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2'
import { SpinnerCircular } from "spinners-react";



const TeacherViewStudentProfile = () => {
  const studentId = useParams()
  const nav = useNavigate()
  const [studentDetails, setStudentDetails] = useState(false);
  console.log(studentId);
  const studentInfo = useSelector(state => state.persisitedReducer.loginUser)
  const BearerToken = studentInfo.data.token
  console.log(BearerToken, "first")
  const [loading, setLoading] = useState(false)



  const oneStudentUrl = `https://progresspal-8rxj.onrender.com/progressPal/readOneStudent/${studentId.studentId}`;

  async function getOneStudentApi() {
    axios
      .get(oneStudentUrl)
      .then((res) => {
        console.log(res.data.data, "response from api");
        setStudentDetails(res.data.data)
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
      title: 'Delete Teacher',
      text: 'Are you sure',
      icon: 'warning',
      cancelButtonColor: '#127cdd',
      showCancelButton: true,
      confirmButtonText: 'yes',
      customClass: {
        confirmButton: 'sweet-alert-confirm-btn',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteStudent()
      }
    });
  };

  async function deleteStudent() {
    axios.delete(`https://progresspal-8rxj.onrender.com/progressPal/deleteStudent/${studentId.studentId}`, {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${BearerToken}`
      }
    })
      .then((res) => {
        console.log(res)
        nav('/Dashboard/teacher/teacher_student_dashboard')
        Swal.fire({
          title: "Success!",
          text: res.data.message,
          icon: "success",
          confirmButtonText: "Ok",
          showConfirmButton: false,
          timer: 1500
        })
        setLoading(false)

      })
      .catch((err) => {
        console.log(err);
        if (err?.message === "Network Error") {
          Swal.fire({
            title: "Update Failed",
            text: err.message,
            icon: "error",
            confirmButtonText: "okay",
            timer: 1800,
            showConfirmButton: false,
          })
          setLoading(false)

        }
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
          timer: 1800,
          showConfirmButton: false,
        })
        setLoading(false)

      })
  }

  return (
    <>
      <main className="TeacherViewStudentProfileMain">
        <div className="TeacherStudentProfilebody">
          <div
            className="TeacherStudentProfileClose"
            onClick={() => {
              nav('/Dashboard/teacher/teacher_student_dashboard')
            }}
          >
            x
          </div>
          <div className="TeacherStudentProfileImage">
            <img src={studentDetails?.studentPassport} alt="Student Passport" />
          </div>

          <div className="TeacherStudentProfileInput">
            <div className="TeacherStudentProfileInputName">
              <div className="TeacherStudentProfileInputNameinner">
                <div className="TeacherStudentProfileInputNameinnericonholder">
                  <p className="TeacherStudentName">Name</p>
                  <BiDotsVerticalRounded />
                </div>

                <div className="TeacherStudentProfileInputNameinnerName">
                  {studentDetails?.studentName}
                </div>
              </div>
            </div>
            <div className="TeacherStudentProfileInputName">
              <div className="TeacherStudentProfileInputNameinner">
                <div className="TeacherStudentProfileInputNameinnericonholder">
                  <p className="TeacherStudentName">Email</p>
                  <BiDotsVerticalRounded />
                </div>

                <div className="TeacherStudentProfileInputNameinnerName">
                  {studentDetails?.studentEmail}
                </div>
              </div>
            </div>
            <div className="TeacherStudentProfileInputName">
              <div className="TeacherStudentProfileInputNameinner">
                <div className="TeacherStudentProfileInputNameinnericonholder">
                  <p className="TeacherStudentName">Class</p>
                  <BiDotsVerticalRounded />
                </div>

                <div className="TeacherStudentProfileInputNameinnerName">
                  {studentDetails?.studentClass}
                </div>
              </div>
            </div>
            <div className="TeacherStudentProfileInputName">
              <div className="TeacherStudentProfileInputNameinner">
                <div className="TeacherStudentProfileInputNameinnericonholder">
                  <p className="TeacherStudentName">Age</p>
                  <BiDotsVerticalRounded />
                </div>

                <div className="TeacherStudentProfileInputNameinnerName">
                  {studentDetails?.studentAge}
                </div>
              </div>
            </div>

            {/* <div className="TeacherStudentProfileInputName">
              <div className="TeacherStudentProfileInputNameinner">
                <div className="TeacherStudentProfileInputNameinnericonholder">
                  <p className="TeacherStudentName">Name</p>
                  <BiDotsVerticalRounded />
                </div>

                <div className="TeacherStudentProfileInputNameinnerName">
                  teacherName
                </div>
              </div>
            </div> */}
            <div className="TeacherStudentProfileBtn">
              <button className="TeacherStudentProfileEditButton" onClick={() => { nav(`/teacherdashboard/editStudentProfile/${studentDetails._id}`) }} >Edit</button>
              <button className="TeacherStudentProfileDeleteButton" onClick={showAlert}>
              {loading ? (
                    <SpinnerCircular
                      size={44}
                      thickness={99}
                      speed={100}
                      color="rgba(18, 124, 221, 1)"
                    />
                  ) : (
                    "Delete"
                  )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default TeacherViewStudentProfile;
