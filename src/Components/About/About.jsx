import React from 'react'
import "./About.css"
import "./AboutMedia.css"
import image1 from "../../assets/image1.svg"

const About = () => {
  return (
    <>
        <div className='AboutUsMainbody'>
    <div className='AboutPageInnerContent'>
      <div className='AboutUsTextdiv'>
        <div className='AboutPageaha1Holder'>
        <h1>We Provide A Complete Solution For Schools. </h1>
        </div>
        <p>ProgressPal is a platform based result Management System for educational institutions like Schools and Colleges. It provides completely automated tools to simplify the process of managing all your results. It helps manage student’s results and saves time for automated fee.
        Progresspal help school to manage their results.ProgressPal as a product targeted to meet Nigerian Schools, mainly Nursery, Primary and Secondary schools. 
        </p>

    </div>
    <div className=' AboutUsImagediv'>   
     <img src={image1} alt="" />
     </div>
    </div>
    </div>
    </>
  )
}

export default About

// import image1 from "../../assets/image1.svg" 
// import './Admin.css'
// import './Responses.css'
// const Admin = () => {
//   return (
    
//   )
// }

// export default Admin