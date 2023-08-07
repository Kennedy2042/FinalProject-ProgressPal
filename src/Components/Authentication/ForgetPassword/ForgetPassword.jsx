import axios from 'axios'
import React, { useState } from 'react'
import "./ForgetPassword.css"

const ForgetPassword = () => {
    const [schoolEmail, setSchoolEmail] = useState("")
    const [success, setSuccess] = useState("")



    const url = "https://progresspal-8rxj.onrender.com/progressPal/forgot-password"
    const data = { schoolEmail }

    const Forget = (e) => {
        e.preventDefault();
        axios.post(url, data)
            .then((res) => {
                console.log(res.data)
                setSuccess(res.data.message)
            })
            .catch((err) => {
                console.log(err)
                setSuccess(err.response.data.message)
            })


        console.log(data)

    };

    return (



        <div style={{ width: "100%", height: "40vh", display: "flex", flexDirection: "column" }}>
            <input type="email" placeholder='Input your email' className='forgetPasswordInput' value={schoolEmail} onChange={(e) => setSchoolEmail(e.target.value)} />
            <p>{success}</p>
            <button onClick={Forget}>send</button>
        </div>
    )
}

export default ForgetPassword