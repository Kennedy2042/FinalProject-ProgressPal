import React, { useEffect, useState } from 'react'
// import './StudentProfile.css'
// import './StudentProfileMedia.css'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { teacherInformation } from '../../../../../Redux/ProductState'


const StudentEditProfile = () => {  
    const studentId = useParams()
    // console.log(studentId)
    const studentInfo = useSelector(state => state.persisitedReducer.loginUser)
    const BearerToken = studentInfo.data.token
    // console.log(BearerToken, "first")
    const nav = useNavigate()

    const [studentData, setStudentData] = useState({
        studentName: "",
        studentClass: "",
        studentAge: "",
        studentEmail: "",
        studentPassport: "",
    })
    

    const { studentName, studentClass, studentAge, studentEmail, studentPassport } = studentData

    const onInputChange = (e) => {
        setStudentData({ ...studentData, [e.target.name]: e.target.value })
    }


    async function editStudentInfo() {
        axios.put(`https://progresspal-8rxj.onrender.com/progressPal/updateStudent/${studentId.studentId}`, studentData, {
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



     const oneStudentUrl = `https://progresspal-8rxj.onrender.com/progressPal/readOneStudent/${studentId.studentId}`;

    async function getOneStudentApi() {
      axios
        .get(oneStudentUrl)
        .then((res) => {
        //   console.log(res.data.data, "response from api");
          setStudentData(res.data.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    useEffect(() => {
      getOneStudentApi();
    }, []);


    return (
        <>

            <div className='ProfilebodyHolder'>

                <div className='Profilebody'>
                    <div className='ProfileImage'>
                        <img className='ProfileImagecircle' src={studentPassport} alt="Student Passport" />
                        {/* <div className='ProfileImagecircle'></div> */}
                        <div className='ProfileImageName'>
                            <h2>{studentName}</h2>
                            {/* <input type="text" value={teacherProfileInfo.teacherName} /> */}
                        </div>
                        <div className='ProfileImageEmail'>
                            <p>{studentEmail}</p>
                            {/* <input type="text" value={teacherProfileInfo.teacherEmail} /> */}
                        </div>
                        {/* <div className='ProfileImageState'>
                            <p>United state</p>
                        </div> */}
                    </div>
                    <div className='ProfileInput'>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p className='ProfileInputNameinnericonholderP'>Name</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                {/* <div className='ProfileInputNameinnerName'>{teacherProfileInfo.teacherName}</div> */}
                                <input className='ProfileInputNameinnerName' type="text" name='studentName' value={studentName} onChange={(e) => onInputChange(e)} />
                            </div>
                        </div>

                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Class</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <input className='ProfileInputNameinnerName' type="text" name='studentClass' value={studentClass} onChange={(e) => onInputChange(e)} />                            </div>
                        </div>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Age</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <input className='ProfileInputNameinnerName' type="text" name='studentAge' value={studentAge} onChange={(e) => onInputChange(e)}/>                            </div>
                        </div>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Email</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <input className='ProfileInputNameinnerName' type="text" value={studentEmail} onChange={(e) => onInputChange(e)} />                            </div>
                        </div>

                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Image</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <input className='ProfileInputNameinnerName' type="file" name='studentPassport' accept='image/*' onChange={(e) => onInputChange(e)} />                            </div>
                        </div>
                        <div className='ProfileBtn'>
                                <button className='ProfileSendButton' onClick={editStudentInfo}>Save</button>
                            <button className='ProfileDeleteButton' onClick={()=>{
                                nav(`/Dashboard/student/studentUser/${studentId.studentId}`)
                            }} >Back</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentEditProfile;