import React from "react";
import "./index.css";
import { useState } from "react";
import {
  BsArrowUpShort,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
export default function Footer() {
  let [pos, changepos] = useState("none");

  window.onscroll = () => scrollFunction();

  function scrollFunction() {
    if (
      document.body.scrollTop > 130 ||
      document.documentElement.scrollTop > 130
    )
      changepos("block");
    else changepos("none");
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      <footer>
        <section className="footer-details">
          <div className="details-pannel">
            <h3>Where to find us</h3>
            <p>
              1200 JB Towers
              <br />
              Hill Park
              <br />
              533255{" "}
            </p>
          </div>
          <div className="details-pannel">
            <h3>Email Us at</h3>
            <p>
              Legislaw@gmail.com
              <br />
              sdp1234@gmail.com
            </p>
          </div>
          <div className="details-pannel">
            <h3>Call Us At</h3>
            <p>
              {" "}
              <span>Phone:</span>
              {"  "}+91 9177943677
              <br />
              <span>Mobile:</span>
              {"  "}+91 995574335
              <br />
              <span>Lan:</span>
              {"  "}334406 330855
            </p>
          </div>
        </section>
        <section className="profile-icons">
          <BsFacebook className="profile-icon" />
          <hr className="sep" />
          <BsInstagram className="profile-icon" />
          <hr className="sep" />
          <BsTwitter className="profile-icon" />
          <hr className="sep" />
          <BsLinkedin className="profile-icon" />
        </section>
        <section className="copyrightsection">
          CopyRights ©️ 2023 - Legis Law
        </section>
      </footer>

      <BsArrowUpShort
        onClick={topFunction}
        style={{ display: pos }}
        id="toptoggle"
      />
    </>
  );
}
