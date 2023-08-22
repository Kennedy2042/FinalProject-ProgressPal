import React, { useEffect, useState } from 'react'
// import './StudentProfile.css'
// import './StudentProfileMedia.css'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { teacherInformation } from '../../../../../Redux/ProductState'


const EditTeacherProfile = () => {
    const teacherId = useParams()
    const dispatch = useDispatch()
    const teacherProfileInfo = useSelector((state) => state.persisitedReducer.teacherInfo)
    const teacherInfo = useSelector(state => state.persisitedReducer.loginUser)
    const BearerToken = teacherInfo.data.token
    console.log(BearerToken, "first")

    const [teacherData, setTeacherData] = useState({
        teacherName: "",
        teacherClass: "",
        teacherAge: "",
        teacherEmail: "",
        teacherImage: "",
    })

    const {teacherName, teacherClass, teacherAge, teacherEmail, teacherImage} = teacherData

    const onInputChange = (e) => {
        setTeacherData({ ...teacherData, [e.target.name]: e.target.value })
    }

    async function editTeacherInfo() {
        axios.put(`https://progresspal-8rxj.onrender.com/progressPal/updateTeacher/${teacherProfileInfo._id}`, teacherData, {
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



    const url = `https://progresspal-8rxj.onrender.com/progressPal/readOneTeacher/${teacherProfileInfo._id}`

    async function GetTeacherInfo() {
        axios.get(url)
            .then((res) => {
                console.log(res)
                setTeacherData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        GetTeacherInfo()
    }, [])

    // console.log(teacherData)

    // console.log(teacherId)
    // console.log('first', teacherProfileInfo)

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

                        {/* <table> */}
                            
                                <p>Name:</p>
                                {/* <td>{teacherProfileInfo.teacherName}</td> */}
                                <input type="text" name='teacherName' value={teacherName} onChange={(e) => onInputChange(e)} />
                            
                                <p>Class:</p>
                                {/* <td>{teacherProfileInfo.teacherClass}</td> */}
                                <input type="text" name='teacherClass' value={teacherClass} onChange={(e) => onInputChange(e)} />

                            
                                <p>Age:</p>
                                {/* <td>{teacherProfileInfo.teacherAge}</td> */}
                                <input type="text" name='teacherAge' value={teacherAge} onChange={(e) => onInputChange(e)}/>
                            
                        
                                <p>Email:</p>
                                {/* <td>{teacherProfileInfo.teacherEmail}</td> */}
                                <input type="text" name='teacherEmail' value={teacherEmail} onChange={(e) => onInputChange(e)} />
                            
                            
                                <p>Image:</p>
                                {/* <td>{teacherProfileInfo.teacherImage}</td> */}
                                {/* <input type="file" name='teacherImage' onChange={(e) => onInputChange(e)} /> */}
                                <img src={teacherImage} alt="" />
                            
                        {/* </table> */}
                        <div className='ProfileBtn'>
                            <button onClick={editTeacherInfo}>Save</button>
                            {/* <button>Delete</button> */}
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

export default EditTeacherProfile