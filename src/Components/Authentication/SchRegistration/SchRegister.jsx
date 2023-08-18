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
import ProgressPalLogo from "../../../assets/ProgressPalLogo.png"
import { useDispatch, useSelector } from 'react-redux'
import { schoolUserData } from '../../../Redux/ProductState'
import { SpinnerCircular } from "spinners-react";





const SchRegister = () => {
  const schoolUsers = useSelector(state => state.persisitedReducer.School)
  console.log(schoolUsers._id)
  const dispatch = useDispatch()
  const nav = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)


  const [schoolEmail, setSchoolEmail] = useState("")
  // const [schoolAddress, setSchoolAddress] = useState("")
  // const [state, setState] = useState("")
  const [schoolName, setSchoolName] = useState("")
  // const [country, setCountry] = useState("")
  const [schoolLogo, setSchoolLogo] = useState("")
  // const [regNo, setRegNo] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  // const [website, setWebsite] = useState("")
  const [successErrorMessage, setSuccessErrorMessage] = useState('')
  const [validMessage, setValidMessage] = useState({
    error: "false",
    value: "",
    msg: "",
  });
  const [loading, setLoading] = useState(false)



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
    const schoolNameRegex = /^[\w\s]{11,}$/;
    const schoolAddressRegex = /^[\w\s\S]{9,}$/;
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{}|:;"'<>,.?/])[A-Za-z\d!@#$%^&*()_\-+=\[\]{}|:;"'<>,.?/]{8,}$/;

    if (schoolName === "") {
      setValidMessage({
        error: "true",
        value: "schoolName",
        msg: "Please input your school name",
      });
    } else if (!schoolNameRegex.test(schoolName)) {
      setValidMessage({
        error: "true",
        value: "schoolNameError",
        msg: "Characters should be at least 11 characters",
      });
    } else if (schoolLogo === "") {
      setValidMessage({
        error: "true",
        value: "schoolLogo",
        msg: "Provide a school logo",
      });
    } else if (schoolEmail === "") {
      setValidMessage({
        error: "true",
        value: "schoolEmail",
        msg: "Please input your email",
      });
    } else if (!emailRegex.test(schoolEmail)) {
      setValidMessage({
        error: "true",
        value: "schoolEmailError",
        msg: "Provide a valid email",
      });
    // } else if (schoolAddress === "") {
    //   setValidMessage({
    //     error: "true",
    //     value: "schoolAddress",
    //     msg: "Please provide your school address",
    //   });
    // } else if (!schoolAddressRegex.test(schoolAddress)) {
    //   setValidMessage({
    //     error: "true",
    //     value: "schoolAddressError",
    //     msg: "Please input a valid address",
    //   });
    // } else if (state === "") {
    //   setValidMessage({
    //     error: "true",
    //     value: "state",
    //     msg: "Please input your state",
    //   });
    // } else if (country === "") {
    //   setValidMessage({
    //     error: "true",
    //     value: "country",
    //     msg: "Pleae input a country",
    //   });
    // } else if (country !== "Nigeria") {
    //   setValidMessage({
    //     error: "true",
    //     value: "countryError",
    //     msg: "Country must be Nigeria",
    //   });
    // } else if (website === "") {
    //   setValidMessage({
    //     error: "true",
    //     value: "schoolWebsite",
    //     msg: "Please input your school website",
    //   });
    } else if (password === "") {
      setValidMessage({
        error: "true",
        value: "password",
        msg: "Please input your password",
      });
    } else if (!strongPasswordRegex.test(password)) {
      setValidMessage({
        error: "true",
        value: "passwordError",
        msg: "Invalid format",
      });
    } else if (confirmPassword === "") {
      setValidMessage({
        error: "true",
        value: "confirmPassword",
        msg: "Please input your confirm password",
      });
    } else if (confirmPassword !== password) {
      setValidMessage({
        error: "true",
        value: "confirmPasswordError",
        msg: "Password do not match",
      });
    } else {
      setValidMessage("");
      setLoading(!loading);
      const data = new FormData();
      data.append("schoolEmail", schoolEmail);
      // data.append("schoolAddress", schoolAddress);
      // data.append("state", state);
      data.append("schoolName", schoolName);
      // data.append("country", country);
      data.append("schoolLogo", schoolLogo);
      // data.append("regNo", regNo);
      data.append("password", password);
      data.append("confirmPassword", confirmPassword);
      // data.append("website", website);

      axios
        .post(url, data, {
          headers: { "Content-type": "multipart/form-data" },
        })

        .then((res) => {
          console.log(res.data.user);
          dispatch(schoolUserData(res.data.user))
          setSuccessErrorMessage(res.data.message);
          setLoading(false)
        })
        .catch((err) => {
          console.log(err);
          setSuccessErrorMessage(err.response.data.message);
          setLoading(false)

        });
      // showAlert();
    }
  }



  return (
    <>
      <div className="schRegContainer">
        <div className="SchRegLogo">
          <div className="SchRegLogoContainer" onClick={()=>{
            nav("/")
          }}>
            <img src={ProgressPalLogo} alt="" />
          </div>
        </div>
        <div className="SchRegLogoInputs">
          <div className="SchRegLogoInputsBody"></div>
          <div className="leftInput">
            <h1 className="formTitle" >Register your Institute</h1>
            <div className="leftRegister">
              <div className="instituteName">
                <h3 className="inputTitle">Institute Name</h3>
                <div className="instituteNameHolder">
                  <div className={ `${validMessage.value === "schoolName" || validMessage.value === "schoolNameError" ? "schoolInputIconError" : ""} instituteNameIconDiv`}>
                    <FaUniversity className= "instituteNameIcon" />
                  </div>
                  <input className={ `${validMessage.value === "schoolName" || validMessage.value === "schoolNameError" ? "schoolNameInputError" : ""} InstituteNameInput`} 
                  type="text" 
                  placeholder='Institute Name' 
                  value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
                </div>
              </div>
              {validMessage.value === "schoolName" ? (
                <p className='errorParagraph'>{validMessage.msg}</p>
              ) : null}
              {validMessage.value === "schoolNameError" ? (
                <p className='errorParagraph'>{validMessage.msg}</p>
              ) : null}
              <div className="instituteLogo">
                <h3 className="inputTitle">Institute Logo</h3>
                <div className="instituteLogoHolder">
                  <div className={validMessage.value === "schoolLogo"? "instituteLogoIconDivError" :  "instituteLogoIconDiv"}>
                    <AiOutlineFileImage className='instituteNameIcon' />
                  </div>
                  <div className={validMessage.value === "schoolLogo" ? 'instituteLogoInputDivError':'InstituteLogoInputDiv'}>
                    <input className='InstituteLogoInput' type="file" name='file' accept="image*/" onChange={File} />
                    
                  </div>
                </div>
                {validMessage.value === "schoolLogo" ? (
                      <p className='errorParagraph'>{validMessage.msg}</p>
                    ) : null}
              </div>
              <div className="instituteEmail">
                <h3 className="inputTitle">Institute Email</h3>
                <div className="instituteEmailHolder">
                  <div className={ validMessage.value === "schoolEmail" ? "instituteLogoIconDivError": "instituteEmailIconDiv"}>
                    <AiOutlineMail className='instituteNameIcon' />
                  </div>
                  <input className={ validMessage.value === "schoolEmail" ? "InstituteEmailInputError": 'InstituteEmailInput'} type="text" placeholder="Email Address" value={schoolEmail} onChange={(e) => setSchoolEmail(e.target.value)} />

                </div>
                {validMessage.value === "schoolEmail" ? (
                  <p className='errorParagraph'>{validMessage.msg}</p>
                ) : null}
                {validMessage.value === "schoolEmailError" ? (
                  <p className='errorParagraph'>{validMessage.msg}</p>
                ) : null}
                {/* <p className='errorParagraph'>{validMessage}</p> */}

              </div>
              {/* <div className="instituteAddress">
                <h3 className="inputTitle">Institute Address</h3>
                <div className="instituteAddressHolder">
                  <div className={ validMessage.value === "schoolAddress" || validMessage.value === "schoolAddressError" ? "instituteAddressIconDivError" : "instituteAddressIconDiv"}>
                    <MdLocationOn className='instituteNameIcon' />
                  </div>
                  <input className={validMessage.value === "schoolAddress" || validMessage.value === "schoolAddressError" ? "InstituteAddressInputError" : 'InstituteAddressInput'} type="text" placeholder='Enter School Address' value={schoolAddress} onChange={(e) => setSchoolAddress(e.target.value)} />

                </div>
                {validMessage.value === "schoolAddress" ? (
                  <p className='errorParagraph'>{validMessage.msg}</p>
                ) : null}
                {validMessage.value === "schoolAddressError" ? (
                  <p className='errorParagraph'>{validMessage.msg}</p>
                ) : null}
              </div>
              <div className="instituteState">
                <h3 className="inputTitle">Institute State</h3>
                <div className="instituteStateHolder">
                  <div className={validMessage.value === "state" ? "instituteStateIconDivError" : "instituteStateIconDiv"}>
                    <TbBuildingSkyscraper className='instituteNameIcon' />
                  </div>
                  <input className={validMessage.value === "state" ? "InstituteStateInputError" :'InstituteStateInput'} type="text" placeholder="Institution State" value={state} onChange={(e) => setState(e.target.value)} />

                </div>
                {validMessage.value === "state" ? (
                  <p className='errorParagraph'>{validMessage.msg}</p>
                ) : null}
              </div>
              <div className="instituteRegistrationNo">
                <h3 className="inputTitle">Institute Registration Code</h3>
                <div className="instituteRegistrationNoHolder">
                  <div className="instituteRegistrationNoIconDiv">
                    <RiMailSendLine className='instituteNameIcon' />
                  </div>
                  <input className='instituteRegistrationNoInput' type="text" placeholder="Enter School Registration Number" value={regNo} onChange={(e) => setRegNo(e.target.value)} />
                </div>
              </div>
              <div className="instituteCountry">
                <h3 className="inputTitle">Institute Country</h3>
                <div className="instituteCountryHolder">
                  <div className={validMessage.value === "country" || validMessage.value === "countryError" ? "instituteCountryIconDivError" : "instituteCountryIconDiv"}>
                    <BiWorld className='instituteNameIcon' />
                  </div>
                  <input className={validMessage.value === "country" || validMessage.value === "countryError" ? "InstituteCountryInputError" :'InstituteCountryInput'} type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>
                {validMessage.value === "country" ? (
                  <p className='errorParagraph'>{validMessage.msg}</p>
                ) : null}
                {validMessage.value === "countryError" ? (
                  <p className='errorParagraph'>{validMessage.msg}</p>
                ) : null}
              </div>
              <div className="instituteWebsite">
                <h3 className="inputTitle">Institute Website</h3>
                <div className="instituteWebsiteHolder">
                  <div className={validMessage.value === "schoolWebsite" ? "instituteWebsiteIconDivError" : "instituteWebsiteIconDiv"}>
                    <TbWorldWww className='instituteNameIcon' />
                  </div>
                  <input className={validMessage.value === "schoolWebsite" ? "InstituteWebsiteInputError" : 'InstituteWebsiteInput'} type="text" placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} />

                </div>
                {validMessage.value === "schoolWebsite" ? (
                  <p className='errorParagraph'>{validMessage.msg}</p>
                ) : null}
              </div> */}
              <div className="institutePassword">
                <h3 className="inputTitle">Password</h3>
                <div className="institutePasswordHolder">
                  <div className={validMessage.value === "password" || validMessage.value === "passwordError" ? "institutePasswordIconDivError" : "institutePasswordIconDiv"}>
                    <RiLockPasswordFill className='instituteNameIcon' />
                  </div>
                  <input className={validMessage.value === "password" || validMessage.value === "passwordError" ? "InstitutePasswordInputError" :'InstitutePasswordInput'} type={showPassword ? "text" : "password"} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />

                  <div className={validMessage.value === "password" || validMessage.value === "passwordError" ? "instituteShowPasswordIconDivError" :"instituteShowPasswordIconDiv"} >
                    {
                      showPassword ? <BiSolidHide className='showPassIcon' onClick={() => { setShowPassword(false) }} /> : <BiSolidShow className='showPassIcon' onClick={() => { setShowPassword(true) }} />
                    }
                  </div>

                </div>
                {validMessage.value === "password" ? (
                  <p className='errorParagraph'>{validMessage.msg}</p>
                ) : null}
                {validMessage.value === "passwordError" ? (
                  <p className='errorParagraph'>{validMessage.msg}</p>
                ) : null}



              </div>
              <div className="confirmPassword">
                <h3 className="inputTitle">Confirm Password</h3>
                <div className="instituteConfirmPasswordHolder">
                  <div className={validMessage.value === "confirmPassword" || validMessage.value === "confirmPasswordError" ? "instituteConfrimPasswordIconDivError" : "instituteConfrimPasswordIconDiv"}>
                    <RiLockPasswordFill className='instituteNameIcon' />
                  </div>
                  <input className={validMessage.value === "confirmPassword" || validMessage.value === "confirmPasswordError" ? "InstituteConfirmPasswordInputError" : 'InstituteConfirmPasswordInput'} type={showConfirmPassword ? "text" : "password"} placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                  <div className={validMessage.value === "confirmPassword" || validMessage.value === "confirmPasswordError" ? "instituteShowPasswordIconDivError" : "instituteShowPasswordIconDiv"}>
                    {
                      showConfirmPassword ? <BiSolidHide className='showPassIcon' onClick={() => { setShowConfirmPassword(false) }} /> : <BiSolidShow className='showPassIcon' onClick={() => { setShowConfirmPassword(true) }} />
                    }
                  </div>
                </div>
                {validMessage.value === "confirmPassword" ? (
                  <p className='errorParagraph'>{validMessage.msg}</p>
                ) : null}
                {validMessage.value === "confirmPasswordError" ? (
                  <p className='errorParagraph'>{validMessage.msg}</p>
                ) : null}
              </div>
              {/* <p>{successErrorMessage}</p> */}
              <div className="RegisterSubmitBtnDiv">
                {/* <button className='RegisterBackBtn' onClick={() => nav("/")}>Back</button> */}
                <button className='RegisterSubmitBtn' onClick={Register}>
                  {loading ? (
                    <SpinnerCircular
                      size={44}
                      thickness={99}
                      speed={100}
                      color="rgba(18, 124, 221, 1)"
                    />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
};
export default SchRegister;