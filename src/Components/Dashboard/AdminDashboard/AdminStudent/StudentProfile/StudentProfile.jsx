import React, { useEffect, useState } from 'react'
import './StudentProfile.css'
import './StudentProfileMedia.css'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import axios from 'axios'


const StudentProfile = (viewProfileId) => {

    const url = `https://progresspal-8rxj.onrender.com/progressPal/readOneStudent/${viewProfileId}`

    async function GetStudentInfo(){
        axios.get(url)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        GetStudentInfo()
    }, [])

    console.log(viewProfileId)

    

    return (
        <>
            <div className='ProfilebodyHolder'>

                    <div className='Profilebody'>
                        <div className='ProfileImage'>
                            <div className='ProfileImagecircle'></div>
                            <div className='ProfileImageName'>
                                <h2>{}</h2>
                            </div>
                            <div className='ProfileImageEmail'>
                                <p>{}</p>
                            </div>
                            <div className='ProfileImageState'>
                                <p>United state</p>
                            </div>
                        </div>

                        <div className='ProfileInput'>
                            <div className='ProfileInputName'>
                                <div className='ProfileInputNameinner'>
                                    <div className='ProfileInputNameinnericonholder'>
                                        <p>Name</p>
                                        <BiDotsVerticalRounded />
                                    </div>

                                    <div className='ProfileInputNameinnerName'>{}</div>
                                </div>
                            </div>

                            <div className='ProfileInputName'>
                                <div className='ProfileInputNameinner'>
                                    <div className='ProfileInputNameinnericonholder'>
                                        <p>Email</p>
                                        <BiDotsVerticalRounded />
                                    </div>

                                    <div className='ProfileInputNameinnerName'>{    }</div>
                                </div>
                            </div>
                            <div className='ProfileInputName'>
                                <div className='ProfileInputNameinner'>
                                    <div className='ProfileInputNameinnericonholder'>
                                        <p>Contact</p>
                                        <BiDotsVerticalRounded />
                                    </div>

                                    <div className='ProfileInputNameinnerName'>09134568790</div>
                                </div>
                            </div>
                            <div className='ProfileInputName'>
                                <div className='ProfileInputNameinner'>
                                    <div className='ProfileInputNameinnericonholder'>
                                        <p>Role</p>
                                        <BiDotsVerticalRounded />
                                    </div>

                                    <div className='ProfileInputNameinnerName'>User</div>
                                </div>
                            </div>

                            <div className='ProfileInputName'>
                                <div className='ProfileInputNameinner'>
                                    <div className='ProfileInputNameinnericonholder'>
                                        <p>Status</p>
                                        <BiDotsVerticalRounded />
                                    </div>

                                    <div className='ProfileInputNameinnerName'>Active</div>
                                </div>
                            </div>


                        </div>
                    </div>

            </div>
        </>
    )
}

export default StudentProfile










