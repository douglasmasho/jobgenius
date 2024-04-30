import { useState, useEffect } from "react";
import "../App.css";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
// import BG from "../assets/logo.png"

function SelectLevel() {
  const logSomething = () => {
    console.log("Hello world");
  };

  const navigate = useNavigate();
  return (
    <div className="selectbg">
      <nav className="nav2">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo-small" />
        </Link>
      </nav>
      <div className="select-content">
        <h1 className="header center-text">Select Your Level</h1>
        <p className="normal-text black-text center-text u-margin-bottom">
          Choose your current academic level, this will help JobGenius with the type of questions it will ask you
        </p>

        <div className="grid">
            <div className="level">
                <div className="level-pic level-pic-1" onClick={()=>navigate("/chatprimary")}>

                </div>
                <h4 className="level-name black-text">Primary School</h4>
                <p className="level-description">Grade 0 - Grade 7</p>
            </div>

            <div className="level">
                <div className="level-pic level-pic-2" onClick={()=>navigate("/chatsecondary")}>
                    
                </div>
                <h4 className="level-name black-text">Secondary School</h4>
                <p className="level-description">Grade 8 -  Grade 12 (AS)</p>
            </div>

            <div className="level">
                <div className="level-pic level-pic-3" onClick={()=>navigate("/chatuni")}>
                    
                </div>
                <h4 className="level-name black-text">University</h4>
                <p className="level-description">Undergraduate</p>
            </div>

            <div className="level">
                <div className="level-pic level-pic-4" onClick={()=>navigate("/chatpostgrad")}>
                    
                </div>
                <h4 className="level-name black-text">Postgrad</h4>
                <p className="level-description">Already Graduated</p>
            </div>

        </div>
      </div>
    </div>
  );
}

export default SelectLevel;
