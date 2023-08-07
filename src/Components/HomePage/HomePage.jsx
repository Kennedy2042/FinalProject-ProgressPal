import Header from "../Header/Header"
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <main>
        <div className="HomePageHeroSec">
          <Header/>
          <section className="HeroSection">
            <article className="HeroSectionWrapper">
              <div className="HeroSectionText">
                <h1>Your Result, Our Priority</h1>
                <h2>Effective result management platform</h2>
                <button className="GetStarted">Get Started</button>
              </div>
              <div className="HeroSectionImage">
                <img src="./src/assets/herosectionimage.svg" alt="" />
              </div>
            </article>
          </section>
          <div className="PartnersContainer"></div>
        </div>
        <section className="ServicesContainer">
          <article className="ServicesContainerWrapper">
            <div className="ServicesContainerText">Our Services</div>
            <div className="ServicesCardsHolder">
              <span className="ServicesCard">
                <div className="ServicesIconHolder"></div>
                <h3 className="ServicesHeading">Lorem ipsum ipsum</h3>
                <p className="ServicesDescription">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                  quaerat porro voluptatem! Nisi
                </p>
              </span>
              <span className="ServicesCard">
                <div className="ServicesIconHolder"></div>
                <h3 className="ServicesHeading">Lorem ipsum ipsum</h3>
                <p className="ServicesDescription">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                  quaerat porro voluptatem! Nisi
                </p>
              </span>
              <span className="ServicesCard">
                <div className="ServicesIconHolder"></div>
                <h3 className="ServicesHeading">Lorem ipsum ipsum</h3>
                <p className="ServicesDescription">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                  quaerat porro voluptatem! Nisi
                </p>
              </span>
            </div>
          </article>
        </section>
        <section className="BenefitsSection">
          <article className="BenefitsSectionWrapper">
            <div className="BenefitsBox">
              <article className="BenefitsImage">
                <img src="./src/assets/BenefitOneImage.svg" alt="" />
              </article>
              <article className="BenefitsText">
                <h2 className="BenefitsTextTitle">PROGRESSPAL BENEFITS</h2>
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
              <article className="BenefitsText">
                <h2 className="BenefitsTextTitle">PROGRESSPAL BENEFITS</h2>
                <h1 className="BenefitsTextHead">
                  Teachers can track students performance
                </h1>
                <p className="BenefitsTextDescription">
                  Our user-friendly app provides login access for teachers to
                  manage and analyze their students results
                </p>
              </article>
              <article className="BenefitsImage">
                <img src="./src/assets/BenefitTwoImage.svg" alt="" />
              </article>
            </div>
          </article>
          <div className="Circle1"></div>
          <div className="Circle2"></div>
        </section>
        {/* <section classNamee="TestimonialSection">
          <article className="TestimonialSectionWrapper">
            <div className="TestimonialText">
              <h2>Testimonials</h2>
              <p>Hear what people say about us</p>
            </div>
            <div className="TestimonialCardsHolder"></div>
          </article>
        </section> */}
      </main>
    </>
  );
};

export default HomePage;
