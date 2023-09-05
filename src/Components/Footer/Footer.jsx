import "./Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import ProgressPalLogo from "../../assets/ProgressPalLogo.png"

const Footer = () => {
  return (
    <>
      <section className="Footer">
        <article className="FooterWrapper">
          <div className="FooterTextHolder">
            <article className="ProgressPalText">
              <span className="ProgressPalLogo">
                <img src={ProgressPalLogo} alt="progress pal logo" />
              </span>
              <p>
                ProgressPal builds educational software to manage students
                results and saves time for automated fees.
              </p>
              <div className="ContactUs">
                <h4 className="LinksHeader">Contact Us</h4>
                <span className="Contact">
                  <MdLocationOn className="ContactIcons" />
                  <p>161/163, Muyibi Street, Lagos</p>
                </span>
                <span className="Contact">
                  <BsFillTelephoneFill className="ContactIcons" />
                  <p>08137253138, 08186793482</p>
                </span>
                <span className="Contact">
                  <AiTwotoneMail className="ContactIcons" />
                  <p>admin@the-curveafrica</p>
                </span>
              </div>
            </article>
            <article className="LinksHolder">
              <div className="CompanyHolder">
                <h4 className="LinksHeader">Quick Links</h4>
                <ul>
                  <li>About</li>
                  <li>Services</li>
                  {/* <l1></l1> */}
                </ul>
              </div>
              <div className="QuickLinksHolder">
                <h4 className="LinksHeader">Legal Links</h4>
                <ul>
                  <li>Terms and Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Project Protection</li>
                </ul>
              </div>
              <div className="MediaHolder">
                <h4 className="LinksHeader">Social Media</h4>
                <div className="SocialMedia">
                  <span className="Media">
                    <AiFillFacebook className="facebook" />
                    <p>Facebook</p>
                  </span>
                  <span className="Media">
                    <AiOutlineTwitter className="facebook" />
                    <p>Twitter</p>
                  </span>
                  <span className="Media">
                    <BiLogoLinkedin className="facebook" />
                    <p>Linkedin</p>
                  </span>
                  <span className="Media">
                    <BiLogoInstagram className="facebook" />
                    <p>Instagram</p>
                  </span>
                </div>
              </div>
              {/* <div></div> */}
            </article>
          </div>
          <hr />
          <div className="Copyright">Copyright 2023 ProgressPal</div>
        </article>
        <article className="FooterWrapper2">
            <article className="ProgressPalText2">
              <span className="ProgressPalLogo2">
                <img src={ProgressPalLogo} alt="progress pal logo" />
              </span>
              <p>
                ProgressPal builds educational software to manage students
                results and saves time for automated fees.
              </p>
              <div className="ContactUs2">
                <h4 className="LinksHeader">Contact Us</h4>
                <span className="Contact2">
                  <MdLocationOn className="ContactIcons2" />
                  <p>161/163, Muyibi Street, Lagos</p>
                </span>
                <span className="Contact2">
                  <BsFillTelephoneFill className="ContactIcons2" />
                  <p>08137253138, 08186793482</p>
                </span>
                <span className="Contact2">
                  <AiTwotoneMail className="ContactIcons2" />
                  <p>admin@the-curveafrica</p>
                </span>
              </div>
            </article>
            <article className="LinksHolder2">
              <div className="CompanyHolder2">
                <h4 className="LinksHeader">Quick Links</h4>
                <ul>
                  <li>About</li>
                  <li>Services</li>
                  {/* <l1></l1> */}
                </ul>
              </div>
              <div className="QuickLinksHolder2">
                <h4 className="LinksHeader">Legal Links</h4>
                <ul>
                  <li>Terms and Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Project Protection</li>
                </ul>
              </div>
              <div className="MediaHolder2">
                <h4 className="LinksHeader">Social Media</h4>
                <div className="SocialMedia2">
                  <span className="Media2">
                    <AiFillFacebook className="facebook2" />
                    <p>Facebook</p>
                  </span>
                  <span className="Media2">
                    <AiOutlineTwitter className="facebook2" />
                    <p>Twitter</p>
                  </span>
                  <span className="Media2">
                    <BiLogoLinkedin className="facebook2" />
                    <p>Linkedin</p>
                  </span>
                  <span className="Media2">
                    <BiLogoInstagram className="facebook2" />
                    <p>Instagram</p>
                  </span>
                </div>
              </div>
              {/* <div></div> */}
            </article>
          
          <hr />
          <div className="Copyright2">Copyright 2023 ProgressPal</div>
        </article>
      </section>
    </>
  );
};

export default Footer;
