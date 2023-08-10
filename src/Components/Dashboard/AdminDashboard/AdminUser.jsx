import React from 'react'
import "../Admin.css"

const AdminUser = () => {
    return (
        <>
            <div className='AdminDashBoardRightBodyUpperBody'>tfufyufguygyu</div>
            <div className='AdminDashBoardLowerBodyUpperBody'>
                <div className='AdminDashBoardLowerBodyUpperBodyTitle'>
                    <h3>Admin Dashboard</h3>
                </div>
                <div className='AdminDashboardTotalStudentsCards'>
                    <div className='AdminTotalTeacher'></div>
                    <div className='AdminTotalTeacher'></div>
                    <div className='AdminTotalTeacher'></div>
                </div>
                <div className='AdminDashboardPerformance'>
                    <div className='AdminDashboardPerformanceDetailCard'>
                        <div className='AdminDashboardPerformanceDetailCardTop'>
                            <h4>
                                Exam Details
                            </h4>
                            <div className="ExamDetailsCard"></div>
                        </div>
                        <div className='AdminDashboardPerformanceDetailCardDown'>
                            <h4>
                                Performance Details
                            </h4>
                            <div className="PerformanceDetailsCard"></div>
                        </div>
                    </div>
                    <div className='AdminDashboardPerformanceDetailCardRight'></div>
                </div>
            </div>
        </>
    )
}

export default AdminUser