import React, {useState} from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import AboutUsImage from "../../../../assets/AboutUsImage.png"
import "./AdminStudentDashboard.css"
import "./AdminStudentDashboardMedia.css"
import {AiOutlineCloseCircle} from "react-icons/ai"
import axios from 'axios'
import { useSelector } from 'react-redux'


const AdminStudentDashboard = () => {
    const teacherData = useSelector (state => state.persisitedReducer.loginUser)
    const BearerToken = teacherData.data.token
    console.log(BearerToken)
    const [addStudents, setAddStudents] = useState (false)
    const [studentName, setStudentName] = useState("")
    const [studentClass, setStudentClass] = useState("")
    const [studentAge, setStudentAge] = useState("")
    const [studentEmail, setStudentEmail] = useState("")
    const [password, setPassword] = useState("")
    const [studentPassport, setStudentPassport] = useState("")

    const File = (e) => {
        const file = e.target.files[0];
        setStudentPassport(file);
        console.log(file);
      };

      const url = `https://progresspal-8rxj.onrender.com/progressPal/newStudent/${teacherData.data.data._id}`;

  async function Register (e) {
    e.preventDefault()

    const data = new FormData()
    data.append ("studentName", studentName) 
    data.append ("studentClass", studentClass)
    data.append ("studentAge", studentAge)
    data.append ("studentEmail", studentEmail)
    data.append ("password", password)
    data.append("studentPassport", studentPassport)
    axios.post(url, data,{
        headers: {
            "Content-type": "multipart/form-data",
            Authorization : `Bearer ${BearerToken}`

        }
    })
    .then ((res)=>{
        console.log(res)
    })
    .catch ((err)=>{
        console.log(err)
    })
  }





    return (
        <>
            <div className='DashBoardRightBodyTitle'>
                <div className='DashBoardRightBodyTitleHolderDiv'>
                    <h1 className='DashboardRightBodyTitleH1'>Students</h1>
                </div>
                <div className='DashboardSearchIconDiv'>
                    <input type="text" placeholder='Search here' className='DashboardSearchIconInput' />
                    <div className="DashboardSearchIconInputImage">
                        <AiOutlineSearch size={20} />
                    </div>
                </div>
                <div className='AdminDashboardAddTeacherBtnDiv'>
                    <button className='AdminDashboardAddTeacherBtn' onClick={()=>{
                        setAddStudents(true)
                    }}>Add Student</button>
                </div>
            </div>
            <div className='AdminDashboardTeachersCard'>
                <div className='AdminDashboardTeachersCardBody'>
                    <div className='AdminDashboardTeachersImageDiv'>
                        <img src={AboutUsImage} alt="" />
                    </div>
                    <div className='AdminDashboardTeachersDetail'>
                        <div className='AdminDashboardTeachersDetailH3'>
                            Name: <h3></h3>
                        </div>
                        <div className='AdminDashboardTeachersDetailH3'>
                            Email: <h5></h5>
                        </div>
                        <h4></h4>
                        <button className='AdminDashboardViewTeachProfile'>View Profile</button>
                    </div>
                </div>
            </div>
            {
                addStudents ? <div className="AddStudentPop">
                    <AiOutlineCloseCircle size={50} style={{fill: "red" , cursor: "pointer"}} onClick={()=>{
                        setAddStudents(false)
                    }}/>
                <div className="AddStudentPopDiv">
                    
                    {/* <div className="StudentEmailInput"> */}
                    <h3>STUDENT INFO</h3>
                        <input type="text" placeholder='Student Name' className='StudentEmail' value={studentName} onChange={(e)=>setStudentName(e.target.value)}/>
                        <input type="text" placeholder='Student Class' className='StudentEmail' value={studentClass} onChange={(e)=>setStudentClass(e.target.value)}/>
                        <input type="text" placeholder='Student Age' className='StudentEmail' value={studentAge} onChange={(e)=>setStudentAge(e.target.value)}/>
                        <input type="email" placeholder='Student Email' className='StudentEmail' value={studentEmail} onChange={(e)=>setStudentEmail(e.target.value)}/>
                        <input type="text" placeholder='Student Pin' className='StudentEmail' value={password} onChange={(e)=>setPassword(e.target.value)}/>

                        <input type="file" placeholder='Student Passport' className='StudentEmail' onChange={File}/>
                        <button className='AddStudentButton' onClick={Register}>Send</button>
                    {/* </div> */}
                </div>
            </div> : null
            }
        </>
    )
}

export default AdminStudentDashboard