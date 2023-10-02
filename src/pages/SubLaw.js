import React from "react";
import "./index.css";
import NavbarLaw from "./Navbar";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function SubLaw() {
  //-----------------Routing Catching parameters
  let navigate = useNavigate();
  let location = useLocation();

  //------------Navigate to home---------
  const MoreInfoComponent = (text) => {
    navigate(`/${text}`, { state: "sub" });
  };

  //----------------Sections holding array---------------
  let [data, setdata] = useState([]);

  //-------------------Dark and Light mode method -------------
  let [mode, setmode] = useState(true);
  let [bgcol, setbgcol] = useState("white");
  let [txtcol, settxtcol] = useState("#262626");
  let [title, settitle] = useState("");

  const changeBG = () => {
    if (mode === "false") {
      setbgcol("white");
      settxtcol("#262626");
      setmode("true");
      localStorage.setItem("mode", mode);
    } else {
      setbgcol("#262626");
      settxtcol("white");
      setmode("false");
      localStorage.setItem("mode", mode);
    }
  };

  //-------------------------------------------------------------------------

  useEffect(() => {
    setdata(location.state[1]);
    settitle(location.state[2]);
  }, [location]);

  //---------------------Dom Elements --------------------
  let MainCon = (
    <div style={{ background: bgcol }}>
      <NavbarLaw />{" "}
      <div className="sub-title">
        <p className="path-container">
          <span className="path" onClick={() => MoreInfoComponent("")}>
            Home
          </span>{" "}
          /{" "}
          <span className="path" onClick={() => MoreInfoComponent("law")}>
            Laws
          </span>
        </p>
        <h1>{title}</h1>
      </div>
      <section
        className="search-container"
        style={{ background: bgcol, justifyContent: "flex-end" }}
      >
        <label class="switch">
          <input type="checkbox" onClick={changeBG} />
          <span class="slider"></span>
        </label>
      </section>
      <h3 className="sec-heading" style={{ color: txtcol, background: bgcol }}>
        Sections of {title}
      </h3>
      <div
        className="SubLawContainer"
        style={{ color: txtcol, background: bgcol }}
      >
        {data.map((e, ind) => {
          return (
            <div key={ind} className="sublaw">
              <li>
                {ind + 1} .{"  "}
                {e.name}
              </li>
              <p>{e.details}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );

  return MainCon;
}
