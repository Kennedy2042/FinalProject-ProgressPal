import React, { useEffect, useState } from 'react'
// import './StudentProfile.css'
// import './StudentProfileMedia.css'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const TeacherProfile = () => {

    // const url = `https://progresspal-8rxj.onrender.com/progressPal/readOneTeacher/${teacherId}`

    // async function GetTeacherInfo(){
    //     axios.get(url)
    //     .then((res)=>{
    //         console.log(res)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }
    // useEffect(()=>{
    //     GetTeacherInfo()
    // }, [])

    // // console.log(viewProfileId)

    // console.log(teacherId)
    const teacherId = useParams()

    useEffect(() => {
        axios.get(`https://progresspal-8rxj.onrender.com/progressPal/readOneTeacher/${teacherId.studentId}`)
        .then(res => console.log(res))
        .catch((err) => {
          console.log(err)
        })
    }, [])

    console.log(teacherId)

    return (
        <>

            <div className='ProfilebodyHolder'>

                <div className='Profilebody'>
                    <div className='ProfileImage'>
                        <div className='ProfileImagecircle'></div>
                        <div className='ProfileImageName'>
                            <h2>{ }</h2>
                        </div>
                        <div className='ProfileImageEmail'>
                            <p>{ }</p>
                        </div>
                        <div className='ProfileImageState'>
                            <p>United state</p>
                        </div>
                    </div>

                    <div className='ProfileInput'>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p className='ProfileInputNameinnericonholderP'>Teacher Name</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{ }</div>
                            </div>
                        </div>

                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Teacher Class</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{ }</div>
                            </div>
                        </div>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Teacher Age</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{}</div>
                            </div>
                        </div>
                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Teacher Email</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{}</div>
                            </div>
                        </div>

                        <div className='ProfileInputName'>
                            <div className='ProfileInputNameinner'>
                                <div className='ProfileInputNameinnericonholder'>
                                    <p>Teacher Image</p>
                                    <BiDotsVerticalRounded />
                                </div>

                                <div className='ProfileInputNameinnerName'>{}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeacherProfile