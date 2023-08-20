import React from 'react'
import "./TeacherResult.css"
import { PiStudentDuotone } from "react-icons/pi"

const TeacherResult = () => {
    return (
        <>
            <div className="TeacherResultContainer">
                <div className="TeacherResultContainerheader">
                    <div className="TeacherResultContainerheaderBody"></div>
                </div>
                <div className="TeacherResultHeader">
                    <div className="TeacherHeaderBody">
                        <h3>Exam Results</h3>
                    </div>
                </div>
                <div className="TeacherDashboardHeroContainer">
                    <div className="TeacherDashboardHero">
                        <div className="TeacherDashboardHeroUpperContainer">
                            <h2>Exam: unit 6 final exam</h2>
                            <h3>Course</h3>
                            <h3>20 Questions: All in one exam</h3>
                        </div>
                        <div className="TeacherDashboardHeroLowerContainer">
                            <div className="TeacherDashboardHeroLowerTotal">
                                <div className="TeacherDashboardHeroLowerIcons">
                                    <div className="TeacherDashboardHeroLowerIconsBody">
                                        <div className='TotalNumberIcon'>
                                            <PiStudentDuotone size={50} />
                                        </div>

                                    </div>

                                </div>
                                <div className="TeacherDashboardHeroLowerIcons">
                                    <div className="TeacherDashboardHeroLowerIconsBody">
                                        <div className='TotalNumberIcon'>
                                            <PiStudentDuotone size={50} />
                                        </div>

                                    </div>

                                </div>
                                <div className="TeacherDashboardHeroLowerIcons">
                                    <div className="TeacherDashboardHeroLowerIconsBody">
                                        <div className='TotalNumberIcon'>
                                            <PiStudentDuotone size={50} />
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="TeacherDashboardHeroLowerTotal">
                                <div className="TeacherDashboardHeroLowerIcons">
                                    <div className="TeacherDashboardHeroLowerIconsBody">
                                        <div className='TotalNumberIcon'>
                                            <PiStudentDuotone size={50} />
                                        </div>

                                    </div>

                                </div>
                                <div className="TeacherDashboardHeroLowerIcons">
                                    <div className="TeacherDashboardHeroLowerIconsBody">
                                        <div className='TotalNumberIcon'>
                                            <PiStudentDuotone size={50} />
                                        </div>

                                    </div>

                                </div>
                                <div className="TeacherDashboardHeroLowerIcons">
                                    <div className="TeacherDashboardHeroLowerIconsBody">
                                        <div className='TotalNumberIcon'>
                                            <PiStudentDuotone size={50} />
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='GradeHolder'>
                    <div className='GradeHolderHeader'>
                        {/* <div className='GradeHolderHeaderStudentname'>
                            <p>Student name</p>
                        </div>
                        <div className='GradeHolderHeaderRemark'>
                            <p>Passed/Failed</p>
                        </div>
                        <div className='GradeHolderHeaderScore'>
                            <p>Score</p>
                        </div>
                        <div className='GradeHolderHeaderGrade'>
                            <p>Grade</p>
                        </div>
                        <div className='GradeHolderHeaderTimeSpent'>
                            <p>Time Spent</p>
                        </div>
                        <div className='GradeHolderHeaderSubmit'>
                            <p>Submitted/Timeout</p>
                        </div>
                        <div className='GradeHolderHeaderDetals'>
                            <p> Details</p>
                        </div> */}
                        <ul>
                            <li>Student Name</li>
                            <li>Passed/Failed</li>
                            <li>Score</li>
                            <li>Grade</li>
                            {/* <li>Details</li> */}
                        </ul>
                    </div>
                    <div className='GradeHolderHeaderResultHolder'>
                        <div className='GradeHolderHeaderResultHolderBody'>
                            <div className='StudentsGradeHolder'>
                                <div className='StudentsGradeHolderStudentsName'>
                                    <div className='StudentsGradeHolderStudentsNameCircle'></div>
                                    <p>Aniku Kennedy</p>
                                </div>
                                <div className='StudentsGradeHolderStudentsRemark'>
                                    <div className='StudentsGradeHolderStudentsRemarkbtn'>
                                        <p>Passed</p>
                                    </div>
                                </div>
                                <div className='StudentsGradeHolderstudentsScore'>
                                    45/40 (85%)
                                </div>
                                <div className='StudentsGradeHolderstudentsGrade'>
                                    <p> Excellent  </p>
                                </div>
                            </div>
                            <div className='StudentsGradeHolder'>
                                <div className='StudentsGradeHolderStudentsName'>
                                    <div className='StudentsGradeHolderStudentsNameCircle'></div>
                                    <p>Aniku Kennedy</p>
                                </div>
                                <div className='StudentsGradeHolderStudentsRemark'>
                                    <div className='StudentsGradeHolderStudentsRemarkbtn'>
                                        <p>Passed</p>
                                    </div>
                                </div>
                                <div className='StudentsGradeHolderstudentsScore'>
                                    45/40 (85%)
                                </div>
                                <div className='StudentsGradeHolderstudentsGrade'>
                                    <p> Excellent  </p>
                                </div>
                            </div>
                            <div className='StudentsGradeHolder'>
                                <div className='StudentsGradeHolderStudentsName'>
                                    <div className='StudentsGradeHolderStudentsNameCircle'></div>
                                    <p>Aniku Kennedy</p>
                                </div>
                                <div className='StudentsGradeHolderStudentsRemark'>
                                    <div className='StudentsGradeHolderStudentsRemarkbtn'>
                                        <p>Passed</p>
                                    </div>
                                </div>
                                <div className='StudentsGradeHolderstudentsScore'>
                                    45/40 (85%)
                                </div>
                                <div className='StudentsGradeHolderstudentsGrade'>
                                    <p> Excellent  </p>
                                </div>
                            </div>
                            <div className='StudentsGradeHolder'>
                                <div className='StudentsGradeHolderStudentsName'>
                                    <div className='StudentsGradeHolderStudentsNameCircle'></div>
                                    <p>Aniku Kennedy</p>
                                </div>
                                <div className='StudentsGradeHolderStudentsRemark'>
                                    <div className='StudentsGradeHolderStudentsRemarkbtn'>
                                        <p>Passed</p>
                                    </div>
                                </div>
                                <div className='StudentsGradeHolderstudentsScore'>
                                    45/40 (85%)
                                </div>
                                <div className='StudentsGradeHolderstudentsGrade'>
                                    <p> Excellent  </p>
                                </div>
                            </div>
                            <div className='StudentsGradeHolder'>
                                <div className='StudentsGradeHolderStudentsName'>
                                    <div className='StudentsGradeHolderStudentsNameCircle'></div>
                                    <p>Aniku Kennedy</p>
                                </div>
                                <div className='StudentsGradeHolderStudentsRemark'>
                                    <div className='StudentsGradeHolderStudentsRemarkbtn'>
                                        <p>Passed</p>
                                    </div>
                                </div>
                                <div className='StudentsGradeHolderstudentsScore'>
                                    45/40 (85%)
                                </div>
                                <div className='StudentsGradeHolderstudentsGrade'>
                                    <p> Excellent  </p>
                                </div>
                            </div>
                            <div className='StudentsGradeHolder'>
                                <div className='StudentsGradeHolderStudentsName'>
                                    <div className='StudentsGradeHolderStudentsNameCircle'></div>
                                    <p>Aniku Kennedy</p>
                                </div>
                                <div className='StudentsGradeHolderStudentsRemark'>
                                    <div className='StudentsGradeHolderStudentsRemarkbtn'>
                                        <p>Passed</p>
                                    </div>
                                </div>
                                <div className='StudentsGradeHolderstudentsScore'>
                                    45/40 (85%)
                                </div>
                                <div className='StudentsGradeHolderstudentsGrade'>
                                    <p> Excellent  </p>
                                </div>
                            </div>
                            <div className='StudentsGradeHolder'>
                                <div className='StudentsGradeHolderStudentsName'>
                                    <div className='StudentsGradeHolderStudentsNameCircle'></div>
                                    <p>Aniku Kennedy</p>
                                </div>
                                <div className='StudentsGradeHolderStudentsRemark'>
                                    <div className='StudentsGradeHolderStudentsRemarkbtn'>
                                        <p>Passed</p>
                                    </div>
                                </div>
                                <div className='StudentsGradeHolderstudentsScore'>
                                    45/40 (85%)
                                </div>
                                <div className='StudentsGradeHolderstudentsGrade'>
                                    <p> Excellent  </p>
                                </div>
                            </div>
                            <div className='StudentsGradeHolder'>
                                <div className='StudentsGradeHolderStudentsName'>
                                    <div className='StudentsGradeHolderStudentsNameCircle'></div>
                                    <p>Aniku Kennedy</p>
                                </div>
                                <div className='StudentsGradeHolderStudentsRemark'>
                                    <div className='StudentsGradeHolderStudentsRemarkbtn'>
                                        <p>Passed</p>
                                    </div>
                                </div>
                                <div className='StudentsGradeHolderstudentsScore'>
                                    45/40 (85%)
                                </div>
                                <div className='StudentsGradeHolderstudentsGrade'>
                                    <p> Excellent  </p>
                                </div>
                            </div>
                            <div className='StudentsGradeHolder'>
                                <div className='StudentsGradeHolderStudentsName'>
                                    <div className='StudentsGradeHolderStudentsNameCircle'></div>
                                    <p>Aniku Kennedy</p>
                                </div>
                                <div className='StudentsGradeHolderStudentsRemark'>
                                    <div className='StudentsGradeHolderStudentsRemarkbtn'>
                                        <p>Passed</p>
                                    </div>
                                </div>
                                <div className='StudentsGradeHolderstudentsScore'>
                                    45/40 (85%)
                                </div>
                                <div className='StudentsGradeHolderstudentsGrade'>
                                    <p> Excellent  </p>
                                </div>
                            </div>
                            <div className='StudentsGradeHolder'>
                                <div className='StudentsGradeHolderStudentsName'>
                                    <div className='StudentsGradeHolderStudentsNameCircle'></div>
                                    <p>Aniku Kennedy</p>
                                </div>
                                <div className='StudentsGradeHolderStudentsRemark'>
                                    <div className='StudentsGradeHolderStudentsRemarkbtn'>
                                        <p>Passed</p>
                                    </div>
                                </div>
                                <div className='StudentsGradeHolderstudentsScore'>
                                    45/40 (85%)
                                </div>
                                <div className='StudentsGradeHolderstudentsGrade'>
                                    <p> Excellent  </p>
                                </div>
                            </div>
                            <div className='StudentsGradeHolder'>
                                <div className='StudentsGradeHolderStudentsName'>
                                    <div className='StudentsGradeHolderStudentsNameCircle'></div>
                                    <p>Aniku Kennedy</p>
                                </div>
                                <div className='StudentsGradeHolderStudentsRemark'>
                                    <div className='StudentsGradeHolderStudentsRemarkbtn'>
                                        <p>Passed</p>
                                    </div>
                                </div>
                                <div className='StudentsGradeHolderstudentsScore'>
                                    45/40 (85%)
                                </div>
                                <div className='StudentsGradeHolderstudentsGrade'>
                                    <p> Excellent  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default TeacherResult




