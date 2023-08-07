import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { AiOutlineMenu } from "react-icons/ai";
import ProgressPalLogo from "../../assets/ProgressPalLogo.png"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const nav = useNavigate()

  return (
    <>
      <div className="HeaderHolder">
        <header>
          <div className="Logo">
            <img
              src={ProgressPalLogo}
              alt=""
            />
          </div>
          <nav>
            <ul>
              <li onClick={() => nav("/")}>Home</li>
              <li>About</li>
              <li>Search</li>
              <li>Services</li>
            </ul>
          </nav>
          <div className="AuthHolder">
            <button className="LogIn" onClick={() => nav("/login")}>Log In</button>
            <button className="SignUp" onClick={() => nav("/sch_register")}>Register</button>
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
                  <li onClick={() => nav("/login")}>Login</li>
                  <li onClick={() => nav("/sch_register")}>Signup</li>
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
