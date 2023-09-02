import { useEffect, useState } from "react";
import "../Student/TeacherViewStudentProfile.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import TeacherStudent from "./TeacherStudent";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const TeacherViewStudentProfile = () => {
  const studentId = useParams()
  const nav = useNavigate()
  const [studentDetails, setStudentDetails] = useState(false);
  console.log(studentId);
  const studentInfo = useSelector(state => state.persisitedReducer.loginUser)
  const BearerToken = studentInfo.data.token
  console.log(BearerToken, "first")

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

  async function deleteStudent() {
    axios.delete(`https://progresspal-8rxj.onrender.com/progressPal/deleteStudent/${studentId.studentId}`,{
        headers: {
            "Content-type": "multipart/form-data",
            Authorization: `Bearer ${BearerToken}`
        }
    })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
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
            <img src={studentDetails?.studentPassport} alt="" />
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
             <button className="TeacherStudentProfileEditButton" onClick={() => {nav(`/teacherdashboard/editStudentProfile/${studentDetails._id}`)}} >Edit</button>
              <button className="TeacherStudentProfileDeleteButton" onClick={deleteStudent}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default TeacherViewStudentProfile;
