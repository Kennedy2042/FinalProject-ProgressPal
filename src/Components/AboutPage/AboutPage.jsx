import React from "react";
import "./AboutPage.css"
import education from "../../assets/education.jpg"
import Vision from "../../assets/Vision.svg"

const AboutPage = () => {
    return (
        <>
            <div className="AboutMainContainer"  id="About">
                <div className="main">
                    <header className="aboutHead">
                        <h1>About Us</h1>
                        <p>ProgressPal Result Management is a platform which aims empower your school success for Time, Effort & Student Excellence!</p>
                    </header>

                    <section className="AboutVision">
                        <div className="MainAboutVision">
                            <div className="AboutVisionText">
                                <div className="AboutVisionHeader">
                                    <h1 className="ourVisionH1">Our Vision</h1>
                                </div>
                                <div className="AboutVisionBody">
                                    <p className="AboutVisionBodyP">Our vision is to manage the details of a student Result, and to track the Pogress of a particular Student.</p>
                                </div>
                            </div>
                            <div className="AboutVisionImg">
                                <img src={education} alt="Illustrative Image" />

                            </div>
                        </div>
                    </section>



                    <section className="AboutApproach">
                        <div className="MainAboutApproach">

                            <div className="AboutApproachImg">
                                <img src={Vision} alt="Illustrative Image" />

                            </div>

                            <div className="AboutApproachText">
                                <div className="AboutApproachHeader">
                                    <h1 className="ourApproachH1">Our Approach</h1>
                                </div>
                                <div className="AboutApproachBody">
                                    <p className="AboutApproachBodyP">To  brings best ethical values and serve the right purpose to the society by delivering top-notch educational services with the help of modern technologies without any hurdles relating to any geographical or technical medium.</p>

                                </div>
                            </div>
                        </div>
                    </section>


                    {/* <section className="AboutVision">
                        <div className="MainAboutVision">
                            <div className="AboutVisionText">
                                <div className="AboutVisionHeader">
                                    <h1 className="ourVisionH1">Our Process</h1>
                                </div>
                                <div className="AboutVisionBody">
                                    <p className="AboutVisionBodyP">Our vision is to manage the details of Result, </p>
                                    <p> quia error?Ipsum deserunt commodi non, ut npariatur dolores reiciendis  </p>
                                    <p> And to track the Pogress of a particular Student.</p>
                                    <p> It manages all the information about Result, Activity, Exam, Result</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates,</p>
                                    <p> illo minima qui provident expedita, officia laboriosam? Pariatur expedita minus eum.</p>
                                </div>
                            </div>
                            <div className="AboutVisionImg">
                                <img src="./src/assets/Myk.jpg" alt="" />
                            </div>
                        </div>
                    </section> */}

                </div>
            </div>
        </>
    )
}

export default AboutPage