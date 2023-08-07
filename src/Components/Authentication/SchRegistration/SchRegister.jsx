import React, { useState } from 'react'
import "./SchRegister.css"
import './SchRegMedia.css'
import { FaUniversity } from 'react-icons/fa'
import { AiOutlineFileImage, AiOutlineMail } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import { TbBuildingSkyscraper, TbWorldWww } from 'react-icons/tb'
import { BiWorld, BiSolidHide, BiSolidShow } from 'react-icons/bi'
import { RiMailSendLine, RiLockPasswordFill } from 'react-icons/ri'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




const SchRegister = () => {
    const nav = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)


    const [schoolEmail, setSchoolEmail] = useState("")
    const [schoolAddress, setSchoolAddress] = useState("")
    const [state, setState] = useState("")
    const [schoolName, setSchoolName] = useState("")
    const [country, setCountry] = useState("")
    const [schoolLogo, setSchoolLogo] = useState("")
    const [regNo, setRegNo] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [website, setWebsite] = useState("")
    const [successErrorMessage, setSuccessErrorMessage] = useState('')
    const [emailError, setEmailError] = useState("")


    // const data = [schoolEmail, schoolAddress, state, schoolName, country, schoolLogo, regNo, password, confirmPassword, website]

    const File = (e) => {
        const file = e.target.files[0];
        setSchoolLogo(file);
        console.log(file);
    };

    const url = "https://progresspal-8rxj.onrender.com/progressPal/register";

    async function Register(e) {
        e.preventDefault()

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (schoolEmail === "" || !emailRegex.test(schoolEmail)) {
            return setEmailError("Please input a valid email address.");
        }

        const data = new FormData()
        data.append("schoolEmail", schoolEmail)
        data.append("schoolAddress", schoolAddress)
        data.append("state", state)
        data.append("schoolName", schoolName)
        data.append("country", country)
        data.append("schoolLogo", schoolLogo)
        data.append("regNo", regNo)
        data.append("password", password)
        data.append("confirmPassword", confirmPassword)
        data.append("website", website)

        axios
            .post(url, data, {
                headers: { "Content-type": "multipart/form-data" },
            })

            .then((res) => {
                console.log(res, data)
                setSuccessErrorMessage(res.data.message)
            })
            .catch((err) => {
                console.log(err)
                setSuccessErrorMessage(err.response.data.message);
            });
    }



    return (
        <>
            <div className="schRegContainer">
                <div className="SchRegLogo">
                    <div className="SchRegLogoContainer">
                        <img src="./src/Components/ProgressPalLogo.png" alt="" />
                    </div>
                </div>
                <div className="SchRegLogoInputs">
                    <div className="leftInput">
                    <h1 className="formTitle" >Register your Institute</h1>
                        <div className="leftRegister">
                            <div className="instituteName">
                                <h3 className="inputTitle">Institute Name</h3>
                                <div className="instituteNameHolder">
                                    <div className="instituteNameIconDiv">
                                        <FaUniversity className='instituteNameIcon'/>
                                    </div>
                                    <input className='InstituteNameInput' type="text" placeholder='Institute Name' value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
                                </div>
                            </div>
                            <div className="instituteLogo">
                                <h3 className="inputTitle">Institute Logo</h3>
                                <div className="instituteLogoHolder">
                                    <div className="instituteLogoIconDiv">
                                        <AiOutlineFileImage  className='instituteNameIcon'/>
                                    </div>
                                    <div className='InstituteLogoInputDiv'>
                                        <input className='InstituteLogoInput' type="file" accept='image*/'  onChange={File} />
                                    </div>
                                </div>
                            </div>
                            <div className="instituteEmail">
                                <h3 className="inputTitle">Institute Email</h3>
                                <div className="instituteEmailHolder">
                                    <div className="instituteEmailIconDiv">
                                        <AiOutlineMail  className='instituteNameIcon'/>
                                    </div>
                                    <input className='InstituteEmailInput' type="text" placeholder="Email Address" value={schoolEmail} onChange={(e) => setSchoolEmail(e.target.value)} />
                                    <p>{emailError}</p>
                                </div>
                            </div>
                            <div className="instituteAddress">
                                <h3 className="inputTitle">Institute Address</h3>
                                <div className="instituteAddressHolder">
                                    <div className="instituteAddressIconDiv">
                                        <MdLocationOn  className='instituteNameIcon'/>
                                    </div>
                                    <input className='InstituteAddressInput' type="text" placeholder='Enter School Address' value={schoolAddress} onChange={(e) => setSchoolAddress(e.target.value)} />
                                </div>
                            </div>
                            <div className="instituteState">
                                <h3 className="inputTitle">Institute State</h3>
                                <div className="instituteStateHolder">
                                    <div className="instituteStateIconDiv">
                                        <TbBuildingSkyscraper  className='instituteNameIcon'/>
                                    </div>
                                    <input className='InstituteStateInput' type="text" placeholer="Institution State" value={state} onChange={(e) => setState(e.target.value)} />
                                </div>
                            </div>
                            <div className="instituteRegistrationNo">
                                <h3 className="inputTitle">Institute Registration Code</h3>
                                <div className="instituteRegistrationNoHolder">
                                    <div className="instituteRegistrationNoIconDiv">
                                        <RiMailSendLine  className='instituteNameIcon'/>
                                    </div>
                                    <input className='instituteRegistrationNoInput' type="text" placeholder="Enter School Registration Number" value={regNo} onChange={(e) => setRegNo(e.target.value)} />
                                </div>
                            </div>
                            <div className="instituteCountry">
                                <h3 className="inputTitle">Institute Country</h3>
                                <div className="instituteCountryHolder">
                                    <div className="instituteCountryIconDiv">
                                        <BiWorld  className='instituteNameIcon'/>
                                    </div>
                                    <input className='InstituteCountryInput' type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
                                </div>
                            </div>
                            <div className="instituteWebsite">
                                <h3 className="inputTitle">Institute Website</h3>
                                <div className="instituteWebsiteHolder">
                                    <div className="instituteWebsiteIconDiv">
                                        <TbWorldWww  className='instituteNameIcon'/>
                                    </div>
                                    <input className='InstituteWebsiteInput' type="text" placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} />
                                </div>
                            </div>
                            <div className="institutePassword">
                                <h3 className="inputTitle">Password</h3>
                                <div className="institutePasswordHolder">
                                    <div className="institutePasswordIconDiv">
                                        <RiLockPasswordFill  className='instituteNameIcon'/>
                                    </div>
                                    <input className='InstitutePasswordInput' type={showPassword ? "text" : "password"} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <div className="instituteShowPasswordIconDiv" >
                                        {
                                            showPassword ? <BiSolidHide className='showPassIcon' onClick={() => { setShowPassword(false) }} /> : <BiSolidShow className='showPassIcon' onClick={() => { setShowPassword(true) }} />
                                        }
                                    </div>
                                </div>



                            </div>
                            <div className="confirmPassword">
                                <h3 className="inputTitle">Confirm Password</h3>
                                <div className="instituteConfirmPasswordHolder">
                                    <div className="instituteConfrimPasswordIconDiv">
                                        <RiLockPasswordFill  className='instituteNameIcon'/>
                                    </div>
                                    <input className='InstituteConfirmPasswordInput' type={showConfirmPassword ? "text" : "password"} placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                    <div className="instituteShowPasswordIconDiv">
                                        {
                                            showConfirmPassword ? <BiSolidHide className='showPassIcon' onClick={() => { setShowConfirmPassword(false) }} /> : <BiSolidShow className='showPassIcon' onClick={() => { setShowConfirmPassword(true) }} />
                                        }
                                    </div>
                                </div>
                            </div>
                            <p>{successErrorMessage}</p>
                            <div className="RegisterSubmitBtnDiv">
                                <button className='RegisterBackBtn' onClick={() => nav("/")}>Back</button>
                                <button className='RegisterSubmitBtn' onClick={Register}>Submit</button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="rightInputs">
                        <img src="./src/Components/undraw_onboarding_re_6osc 1.png" alt="" />
                        <div className="rightregister">
                            <div className="instituteCountry">
                                <h3 style={{ color: "#3f3d56", width: "95%" }}>Institute Logo</h3>
                                <div className="instituteCountryHolder">
                                    <div className="instituteCountryIconDiv">
                                        <FaUniversity />
                                    </div>
                                        <input className='InstituteCountryInput' type="text" placeholder='Enter Institution Country'/>
                                </div>
                            </div>
                            <div className="instituteCountry">
                                <h3 style={{ color: "#3f3d56", width: "95%" }}>Institute Logo</h3>
                                <div className="instituteCountryHolder">
                                    <div className="instituteCountryIconDiv">
                                        <FaUniversity />
                                    </div>
                                        <input className='InstituteCountryInput' type="text" placeholder='Enter Institution Country'/>
                                </div>
                            </div>
                            <div className="instituteCountry">
                                <h3 style={{ color: "#3f3d56", width: "95%" }}>Institute Logo</h3>
                                <div className="instituteCountryHolder">
                                    <div className="instituteCountryIconDiv">
                                        <FaUniversity />
                                    </div>
                                        <input className='InstituteCountryInput' type="text" placeholder='Enter Institution Country'/>
                                </div>
                            </div>
                            <div className="instituteCountry">
                                <h3 style={{ color: "#3f3d56", width: "95%" }}>Institute Logo</h3>
                                <div className="instituteCountryHolder">
                                    <div className="instituteCountryIconDiv">
                                        <FaUniversity />
                                    </div>
                                        <input className='InstituteCountryInput' type="text" placeholder='Enter Institution Country'/>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        </>
    )
}

export default SchRegister





// const SchRegister = () => {

//     const [showPassword, setShowPassword] = useState(false)
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false)

//     const [schoolName, setSchoolName] = useState("")
//     const [schoolLogo, setSchoolLogo] = useState("")
//     const [schoolEmail, setSchoolEmail] = useState("")
//     const [state, setState] = useState("")
//     const [schoolAddress, setSchoolAddress] = useState("")
//     const [country, setCountry] = useState("")
//     const [website, setWebsite] = useState("")
//     const [password, setPassword] = useState("")
//     const [confirmPassword, setConfirmPassword] = useState("")
//     const [successErrorMessage, setSuccessErrorMessage] = useState("")
//     const [emailError, setEmailError] = useState("")
//     const [regNo, setRegno] = useState("")

//     const File = (e) => {
//         const file = e.target.files[0];
//         setSchoolLogo(file);
//         console.log(file);
//     };

//     const url = "https://progresspal-8rxj.onrender.com/progressPal/register";

//     async function SignUp(e) {
//         e.preventDefault();

//         console.log(schoolEmail)

//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         if (schoolEmail === "" || !emailRegex.test(schoolEmail)) {
//             return setEmailError("Please input a valid email address.");
//         }


//         const data = new FormData();
//         data.append("schoolName", schoolName);
//         data.append("schoolLogo", schoolLogo);
//         data.append("schoolEmail", schoolEmail);
//         data.append("schoolAddress", schoolAddress);
//         data.append("state", state);
//         data.append("country", country);
//         data.append("website", website);
//         data.append("password", password);
//         data.append("confirmPassword", confirmPassword);
//         data.append("regNo", regNo);



//         axios
//             .post(url, data, {
//                 headers: { "Content-type": "multipart/form-data" },
//             })

//             .then((res) => {
//                 console.log(res, data)
//                 setSuccessErrorMessage(res.data.message)
//             })
//             .catch((err) => {
//                 console.log(err)
//                 setSuccessErrorMessage(err.response.data.message);
//             });
//     }


//     return (
//         <>
//             <div className="SchRegContainer">
//                 <div className="SchRegLogo">
//                     <div className="SchRegLogoContainer">
//                         <img src="./src/Components/ProgressPalLogo.png" alt="" />
//                     </div>
//                 </div>
//                 <div className="SchRegLogoInputs">

//                     {/* Mobile Screen Starts here*/}
//                     <div className="MobileUpperInput">
//                         <div className="RegisterMobile">
//                             <h3 style={{ color: "#3f3d56" }}>Register your institute</h3>
//                             <div className="instituteName">
//                                 <h5 style={{ color: "#3f3d56" }}>Institute Name</h5>
//                                 <input className='InstituteNameInput' type="text" value={schoolName} placeholder='Institute Name' onChange={(e) => setSchoolName(e.target.value)} />
//                                 <FaUniversity className='InstitutionNameLogo' />
//                             </div>
//                             <div className="instituteName">
//                                 <h5 style={{ color: "#3f3d56" }}>Institute Logo</h5>
//                                 <input className='InstituteNameInput' type='file' accept='image*/' placeholder='Institute Logo' onChange={File} />
//                                 <AiOutlineFileImage className='InstitutionNameLogo' />
//                             </div>
//                             <div className="instituteName">
//                                 <h5 style={{ color: "#3f3d56" }}>Institute Email</h5>
//                                 <input className={`${emailError.length > 0 ? "error" : ""} InstituteNameInput`} type="email" placeholder='Institute Email' value={schoolEmail} onChange={(e) => setSchoolEmail(e.target.value)} />
//                                 <AiOutlineMail className='InstitutionNameLogo' />
//                                 <p>{emailError}</p>
//                             </div>
//                             <div className="instituteName">
//                                 <h5 style={{ color: "#3f3d56" }}>Institute Address</h5>
//                                 <input className='InstituteNameInput' type="text" placeholder='Institute Address' value={schoolAddress} onChange={(e) => setSchoolAddress(e.target.value)} />
//                                 <MdLocationOn className='InstitutionNameLogo' />
//                             </div>
//                             <div className="instituteName">
//                                 <h5 style={{ color: "#3f3d56" }}>State</h5>
//                                 <input className='InstituteNameInput' type="text" placeholder='State' value={state} onChange={(e) => setState(e.target.value)} />
//                                 <TbBuildingSkyscraper className='InstitutionNameLogo' />
//                             </div>
//                             <div className="instituteName">
//                                 <h5 style={{ color: "#3f3d56" }}>Postal Code</h5>
//                                 <input className='InstituteNameInput' type="text" placeholder='Postal Code' value={regNo} onChange={(e) => setRegno(e.target.value)} />
//                                 <RiMailSendLine className='InstitutionNameLogo' />
//                             </div>
//                             <div className="instituteName">
//                                 <h5 style={{ color: "#3f3d56" }}>Password</h5>
//                                 <input className='InstituteNameInput' type={showPassword ? "text" : "password"} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
//                                 <RiLockPasswordFill className='InstitutionNameLogo' />
//                                 {showPassword ? <BiSolidHide className='HidePasswordIcon' onClick={() => { setShowPassword(false) }} /> : <BiSolidShow className='HidePasswordIcon' onClick={() => { setShowPassword(true) }} />
//                                 }
//                             </div>
//                             <div className="instituteName">
//                                 <h5 style={{ color: "#3f3d56" }}>Confirm Password</h5>
//                                 <input className='InstituteNameInput' type={
//                                     showConfirmPassword ? "text" : "password"
//                                 } placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//                                 <RiLockPasswordFill className='InstitutionNameLogo' />
//                                 {
//                                     showConfirmPassword ?
//                                         <BiSolidHide className='HidePasswordIcon' onClick={() => { setShowConfirmPassword(false) }} /> : <BiSolidShow className='HidePasswordIcon' onClick={() => { setShowConfirmPassword(true) }} />
//                                 }

//                             </div>
//                             <div className="instituteName">
//                                 <h5 style={{ color: "#3f3d56" }}>Country</h5>
//                                 <input className='InstituteNameInput' type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Country' />
//                                 <BiWorld className='InstitutionNameLogo' />
//                             </div>
//                             <div className="instituteName">
//                                 <h5 style={{ color: "#3f3d56" }}>Website</h5>
//                                 <input className='InstituteNameInput' type="text" value={website} placeholder='Website' onChange={(e) => setWebsite(e.target.value)} />
//                                 <TbWorldWww className='InstitutionNameLogo' />
//                             </div>

//                         </div>
//                         <div className="BackAndSubmitBtn">
//                             <button className='backButtonMobie'>Back</button>
//                             <button className='submitButtonMobile' onClick={SignUp}>Submit</button>
//                             <p>{successErrorMessage}</p>

//                         </div>
//                     </div>

//                     {/* Mobile screen ends here */}


//                     <div className="upperInput">
//                         <div className='Register'>
//                             <h1 style={{ color: "#3f3d56" }}>Register your institute</h1>
//                             <div className="instituteName">
//                                 <h3 style={{ color: "#3f3d56" }}>Institute Name</h3>
//                                 <input className='InstituteNameInput' type="text" placeholder='Institute Name' value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
//                                 <FaUniversity className='InstitutionNameLogo' />
//                             </div>
//                             <div className="instituteName">
//                                 <h3 style={{ color: "#3f3d56" }}>Institute Logo</h3>
//                                 <input className='InstituteNameInput' type="file" accept='image*/' placeholder='Institute Logo' onChange={(e) => setSchoolLogo(e.target.value)} />
//                                 <AiOutlineFileImage className='InstitutionNameLogo' />
//                             </div>
//                             <div className="instituteName">
//                                 <h3 style={{ color: "#3f3d56" }}>Institute Email</h3>
//                                 <input className='InstituteNameInput' type="text" placeholder='Institute Email' value={schoolEmail} onChange={(e) => setSchoolEmail(e.target.value)} />
//                                 <AiOutlineMail className='InstitutionNameLogo' />
//                             </div>
//                             <div className="instituteName">
//                                 <h3 style={{ color: "#3f3d56" }}>Institute Address</h3>
//                                 <input className='InstituteNameInput' type="text" placeholder='Institute Address' value={schoolAddress} onChange={(e) => setSchoolAddress(e.target.value)} />
//                                 <MdLocationOn className='InstitutionNameLogo' />
//                             </div>
//                         </div>
//                         <div className='RegistrationImage'>
//                             <img src="./src/Components/undraw_onboarding_re_6osc 1.png" alt="" />
//                         </div>
//                     </div>
//                     <div className="lowerInput">
//                         <div className="RegisterLowerLeft">
//                             <div className="instituteName">
//                                 <h3 style={{ color: "#3f3d56" }}>State</h3>
//                                 <input className='InstituteNameInput' type="text" placeholder='State' value={state} onChange={(e) => setState(e.target.value)} />
//                                 <TbBuildingSkyscraper className='InstitutionNameLogo' />
//                             </div>
//                             <div className="instituteName">
//                                 <h3 style={{ color: "#3f3d56" }}>Postal Code</h3>
//                                 <input className='InstituteNameInput' type="text" placeholder='Postal Code' value={regNo} onChange={(e) => setRegno(e.target.value)} />
//                                 <RiMailSendLine className='InstitutionNameLogo' />
//                             </div>
//                             <div className="instituteName">
//                                 <h3 style={{ color: "#3f3d56" }}>Password</h3>
//                                 <input className='InstituteNameInput' type={showPassword ? "text" : "password"} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
//                                 <RiLockPasswordFill className='InstitutionNameLogo' />
//                                 {
//                                     showPassword ?
//                                         <BiSolidHide className='HidePasswordIcon' onClick={() => { setShowPassword(false) }} /> : <BiSolidShow className='HidePasswordIcon' onClick={() => { setShowPassword(true) }} />
//                                 }
//                             </div>
//                             <div className="backBtn">
//                                 <button className='backButton'>Back</button>
//                             </div>
//                         </div>
//                         <div className="RegisterLowerRight">
//                             <div className="instituteName">
//                                 <h3 style={{ color: "#3f3d56" }}>Country</h3>
//                                 <input className='InstituteNameInput' type="text" placeholder='Country' value={country} onChange={(e) => setCountry(e.target.value)} />
//                                 <BiWorld className='InstitutionNameLogo' />
//                             </div>
//                             <div className="instituteName">
//                                 <h3 style={{ color: "#3f3d56" }}>Website</h3>
//                                 <input className='InstituteNameInput' type="text" placeholder='Website' value={website} onChange={(e) => setWebsite(e.target.value)} />
//                                 <TbWorldWww className='InstitutionNameLogo' />
//                             </div>
//                             <div className="instituteName">
//                                 <h3 style={{ color: "#3f3d56" }}>Confirm Password</h3>
//                                 <input className='InstituteNameInput' type={showConfirmPassword ? "text" : "password"} placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//                                 <RiLockPasswordFill className='InstitutionNameLogo' />
//                                 {
//                                     showConfirmPassword ? <BiSolidHide className='HidePasswordIcon' onClick={() => { setShowConfirmPassword(false) }} /> : <BiSolidShow className='HidePasswordIcon' onClick={() => { setShowConfirmPassword(true) }} />
//                                 }


//                             </div>

//                             <div className="submitBtn">
//                                 <button className='Submit' onClick={SignUp}>Submit</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default SchRegister;