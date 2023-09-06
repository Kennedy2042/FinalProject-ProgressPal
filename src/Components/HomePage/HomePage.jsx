import Header from "../Header/Header";

import "./HomePage.css";
import herosectionimage from "../../assets/herosectionimage.svg";
import BenefitOneImage from "../../assets/BenefitOneImage.svg";
import BenefitTwoImage from "../../assets/BenefitTwoImage.svg";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import korapay from "../../assets/korapay.png"
import thecurveafrica from "../../assets/thecurveafrica.png"
import grading from "../../assets/grading.png"
import result from "../../assets/result.png"
import analytics from "../../assets/analytics.png"
import About from "../About/About";
import Plans from "../FathiaAbout/FathiaAbout";
import AboutPage from "../AboutPage/AboutPage";
// import Testimonial from "../Testimonial/Testimonial";

const HomePage = () => {
  const nav = useNavigate();

  return (
    <>
      <main>
        <div className="HomePageHeroSec">
          <Header />
          <section className="HeroSection" id="Hero">
            <article className="HeroSectionWrapper">
              <div className="HeroSectionText">
                <h1>Your Result, Our Priority</h1>
                <h2>Effective result management platform</h2>
                <button
                  className="GetStarted"
                  onClick={() => nav("/sch_register")}
                >
                  Get Started
                </button>
              </div>
              <div className="HeroSectionImage">
                <img src={herosectionimage} alt="" />
              </div>
            </article>
          </section>
          <div className="PartnersContainer">
            <div className="PartnersContainerWrapper">
              <span className="PartnersImage">
                <img src={korapay} alt="" />
              </span>
              <span className="PartnersImage">
                <img src={thecurveafrica} alt="" />
              </span>
              <span className="PartnersImage">
                <img src={korapay} alt="" />
              </span>
              <span className="PartnersImage">
                <img src={thecurveafrica} alt="" />
              </span>
            </div>
          </div>
        </div>

        <section className="BenefitsSection">
          <article className="BenefitsSectionWrapper">
            <div className="BenefitsBox">
              <article className="BenefitsImage">
                <img src={BenefitOneImage} alt="" />
              </article>
              <article className="BenefitsText">
                <h2 className="BenefitsTextTitle">PROGRESS<span style={{ color: "#f7b905" }}>PAL</span> BENEFITS</h2>
                <h1 className="BenefitsTextHead">
                  We aid in students Academic Performance
                </h1>
                <p className="BenefitsTextDescription">
                  Students can log in to check their results and know their
                  academic performance
                </p>
              </article>
            </div>
            <div className="BenefitsBox">
              <article className="BenefitsText2">
                <h2 className="BenefitsTextTitle">PROGRESS<span style={{ color: "#f7b905" }}>PAL</span> BENEFITS</h2>
                <h1 className="BenefitsTextHead">
                  Teachers can track students performance
                </h1>
                <p className="BenefitsTextDescription">
                  Our user-friendly app provides login access for teachers to
                  manage and analyze their students results
                </p>
              </article>
              <article className="BenefitsImage">
                <img src={BenefitTwoImage} alt="" />
              </article>
            </div>
          </article>
          <div className="Circle1"></div>
          <div className="Circle2"></div>
        </section>
        <AboutPage />

        <section className="ServicesContainer">
          <article className="ServicesContainerWrapper" id="Services">
            <div className="ServicesContainerText">Our Services</div>
            <div className="ServicesCardsHolder">
              <span className="ServicesCard">
                <div className="ServicesIconHolder">
                  <img src={result} alt="Result Image" />
                </div>
                <h3 className="ServicesHeading">Result Compilation</h3>
                <p className="ServicesDescription">
                  Instantly collect and collate student results, streamlining
                  the process for educators.
                </p>
              </span>
              <span className="ServicesCard">
                <div className="ServicesIconHolder2">
                  <img src={analytics} alt="Analytic Image" />
                </div>
                <h3 className="ServicesHeading">Real-Time Analytics</h3>
                <p className="ServicesDescription">
                  Gain valuable insights into student performance
                </p>
              </span>
              <span className="ServicesCard">
                <div className="ServicesIconHolder3">
                  <img src={grading} alt="Grading Image" />
                </div>
                <h3 className="ServicesHeading">Grading Systems</h3>
                <p className="ServicesDescription">
                  Tailor the app to your institution's unique grading systems,
                  ensuring accuracy and consistency
                </p>
              </span>
            </div>
          </article>
        </section>
        <About />
        {/* <Plans/> */}
        {/* <div className="AboutHolder">
<AboutPage/>

</div> */}

        {/* <Testimonial /> */}
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
