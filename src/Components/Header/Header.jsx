import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="HeaderHolder">
        <header>
          <div className="Logo">
            <img
              src="./src/assets/WhatsApp_Image_2023-07-28_at_10.26 11.png"
              alt=""
            />
          </div>
          <nav>
            <ul>
              <Link to="/"><li>Home</li></Link>
              <li>About</li>
              <li>Search</li>
              <li>Services</li>
            </ul>
          </nav>
          <div className="AuthHolder">
            <Link to="/login"><button className="LogIn">Log In</button></Link>
            <Link to="/sch_register"><button className="SignUp">Register</button></Link>
          </div>
          <div className="Menu">
            {showMenu ? (
              <span onClick={() => setShowMenu(false)}>X</span>
            ) : (
              <AiOutlineMenu onClick={() => setShowMenu(!showMenu)} />
            )}
          </div>
        </header>
        {showMenu ? (
          <article className="MenuWrapper">
            <div className="MenuHolder">
              <div className="Close">
                <span onClick={() => setShowMenu(false)}>X</span>
              </div>
              <div className="LinksHolder">
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Search</li>
                  <li>Services</li>
                  <li>Login</li>
                  <li>Signup</li>
                </ul>
              </div>
            </div>
            <div className="Dark"></div>
          </article>
        ) : null}
      </div>
    </>
  );
};

export default Header;
