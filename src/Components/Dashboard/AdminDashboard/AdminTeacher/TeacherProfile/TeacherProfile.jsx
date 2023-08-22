import React, { useEffect, useState } from 'react'
// import './StudentProfile.css'
// import './StudentProfileMedia.css'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { teacherInformation } from '../../../../../Redux/ProductState'


const TeacherProfile = () => {
    const teacherId = useParams()
    const dispatch = useDispatch()
    const teacherProfileInfo = useSelector((state) => state.persisitedReducer.teacherInfo)


    const[teacherName, setTeacherName] = useState("")
    const[readOnly, setReadOnly] = useState(true)



    const url = `https://progresspal-8rxj.onrender.com/progressPal/readOneTeacher/${teacherId.studentId}`

    async function GetTeacherInfo() {
        axios.get(url)
            .then((res) => {
                console.log(res)
                dispatch(teacherInformation(res.data.data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        GetTeacherInfo()
    }, [])

    // console.log(viewProfileId)

    console.log(teacherId)
    console.log('first', teacherProfileInfo)

    // useEffect(() => {
    //     axios.get(`https://progresspal-8rxj.onrender.com/progressPal/readOneTeacher/${teacherId.studentId}`)
    //     .then(res => console.log(res))
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // }, [])


    return (
        <>

            <div className='ProfilebodyHolder'>

                <div className='Profilebody'>
                    <div className='ProfileImage'>
                        <img className='ProfileImagecircle' src={teacherProfileInfo.teacherImage} alt="" />
                        {/* <div className='ProfileImagecircle'></div> */}
                        <div className='ProfileImageName'>
                            <h2>{teacherProfileInfo.teacherName}</h2>
                            {/* <input type="text" value={teacherProfileInfo.teacherName} /> */}
                        </div>
                        <div className='ProfileImageEmail'>
                            <p>{teacherProfileInfo.teacherEmail}</p>
                            {/* <input type="text" value={teacherProfileInfo.teacherEmail} /> */}
                        </div>
                        {/* <div className='ProfileImageState'>
                            <p>United state</p>
                        </div> */}
                    </div>

                    <div className='ProfileInput'>
                        {/* <input type="text" {edie?/> */}

                        <table>
                            <tr>
                                <th>Name:</th>
                                <td>{teacherProfileInfo.teacherName}</td>
                                {/* <input type="text" readOnly={readOnly} value={teacherProfileInfo.teacherName } onChange={(e) => setTeacherName(e.target.value)} /> */}
                            </tr>
                            <tr>
                                <th>Class:</th>
                                <td>{teacherProfileInfo.teacherClass}</td>
                                {/* <input type="text" value={teacherProfileInfo.teacherClass} /> */}
                            </tr>
                            <tr>
                                <th>Age:</th>
                                <td>{teacherProfileInfo.teacherAge}</td>
                                {/* <input type="text" value={teacherProfileInfo.teacherAge} /> */}
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td>{teacherProfileInfo.teacherEmail}</td>
                                {/* <input type="text" value={teacherProfileInfo.teacherEmail} /> */}
                            </tr>
                            <tr>
                                <th>Image:</th>
                                <td>{teacherProfileInfo.teacherImage}</td>
                                {/* <input type="text" value={teacherProfileInfo.teacherImage} /> */}
                            </tr>
                        </table>
                        <div className='ProfileBtn'>
                            <Link to={`/admindashboard/editteacherProfile/${teacherProfileInfo._id}`}><button>Edit</button></Link>
                            <button>Save</button>
                            <button>Delete</button>
                        </div>
                    </div>


                    {/* <div className='ProfileInput'>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p className='ProfileInputNameinnericonholderP'>Name</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{teacherProfileInfo.teacherName}</div>
                            </div>
                        </div>

                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Class</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{teacherProfileInfo.teacherClass}</div>
                            </div>
                        </div>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Age</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{teacherProfileInfo.teacherAge}</div>
                            </div>
                        </div>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Email</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{teacherProfileInfo.teacherEmail}</div>
                            </div>
                        </div>

                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Image</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{teacherProfileInfo.teacherImage}</div>
                            </div>
                        </div>
                        <div className='ProfileBtn'>
                            <button>Edit</button>
                            <button>Save</button>
                            <button>Delete</button>
                        </div>

                    </div> */}
                </div>
            </div>
        </>
    )
}

export default TeacherProfile