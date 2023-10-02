import React from "react";
import "./index.css";
import NavbarLaw from "./Navbar";
import { useState } from "react";
import RoundAni from "./RoundAni";
import Footer from "./Footer";
import {
  BsArrowUpShort,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

export default function Home() {
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
  let maincon = (
    <div>
      <div className="titlebg" id="#">
        <NavbarLaw />
        <br />
        <br />
        <br />
        <section className="title-main">
          <p className="quote-text">
            <q className="quote">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque quis erat sit amet urna tincidunt euismod.
              Pellentesque accumsan massa et dolor tincidunt, gravida luctus
              elit feugiat. Praesent iaculis mauris suscipit hendrerit luctus.
              Morbi sit amet dui elementum, ultrices arcu ut, finibus ligula.
              Praesent at porttitor arcu. In dui tellus, congue non dapibus et,
              pretium sit amet enim. Pellentesque ornare a lacus ut convallis.
              Etiam gravida elit nec ex molestie aliquam. Vestibulum id tellus
              gravida, facilisis diam eget, molestie augue.
              <br />
              <br /> Mauris dignissim elit id augue congue rutrum. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Etiam at arcu non tellus fringilla condimentum.
              Donec quis faucibus leo. Phasellus posuere, neque non porta
              commodo, ex risus eleifend sem, id varius lorem orci id magna.
              <br />
              <br />
              <span className="mission">
                <strong>mission</strong>
              </span>
            </q>
          </p>
        </section>
      </div>
      <div className="vision-outer">
        <br />
        <br />
        <br />
        <RoundAni />
        <section className="vision">
          <h3>vision</h3>
          <p>
            {" "}
            We strive for a world where lawyers can practice law freely and
            independently to effectively fulfil their role in upholding the rule
            of law and the protection of human rights. Lawyers should be able to
            do their job without improper interference or fear of reprisal.
            Always and everywhere. Also, when that does not suit the government,
            the bar association, or the establishment.
          </p>
        </section>
      </div>
      <Footer />

      <BsArrowUpShort
        onClick={topFunction}
        style={{ display: pos }}
        id="toptoggle"
      />
    </div>
  );

  return maincon;
}
