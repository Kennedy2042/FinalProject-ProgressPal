import React, { useEffect, useState } from 'react'
import './StudentProfile.css'
import './StudentProfileMedia.css'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import axios from 'axios'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'


const StudentProfile = (viewProfileId) => {
    const [studentProfile, setStudentProfile] = useState("")

    const url = `https://progresspal-8rxj.onrender.com/progressPal/readOneStudent/${viewProfileId.viewprofileId}`

    async function GetStudentInfo() {
        axios.get(url)
            .then((res) => {
                console.log(res)
                setStudentProfile(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        GetStudentInfo()
    }, [])

    console.log(studentProfile)
    const nav = useNavigate()



    return (
        <>
            <div className='ProfilebodyHolder'>

                <div className='Profilebody'>
                    <div className='ProfileImage'>
                        <div className="BackArrowDiv">
                            <MdOutlineKeyboardBackspace size={35} style={{cursor: "pointer"}} onClick={
                                ()=>{
                                    nav("/Dashboard/schoolAdmin/schoolAdminUser/:id")
                                    
                                }
                            }/>
                        </div>
                        <div className='ProfileImagecircle'>
                            <img src={studentProfile.studentPassport} alt="" />
                        </div>
                        <div className='ProfileImageName'>
                            <h2>{studentProfile.studentAge}</h2>
                        </div>
                        <div className='ProfileImageEmail'>
                            <p>{studentProfile.studentEmail }</p>
                        </div>
                        <div className='ProfileImageState'>
                            <p>{ studentProfile.studentName}</p>
                        </div>
                    </div>

                    <div className='ProfileInput'>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Name</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{studentProfile.studentName}</div>
                            </div>
                        </div>

                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Email</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{studentProfile.studentEmail}</div>
                            </div>
                        </div>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Age</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{studentProfile.studentAge}</div>
                            </div>
                        </div>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Class</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{studentProfile.studentClass}</div>
                            </div>
                        </div>

                        {/* <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p></p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'></div>
                            </div>
                        </div> */}


                    </div>
                </div>

            </div>
        </>
    )
}

export default StudentProfile










