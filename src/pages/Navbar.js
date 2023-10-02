import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";
import { useEffect, useState } from "react";

function NavbarLaw(props) {
  let [mode, setMode] = useState(true);
  let [bgcol, setbgcol] = useState("white");
  let [txtcol, settxtcol] = useState("#262626");
  const ChangeBg = () => {
    if (mode === true) {
      setbgcol("#262626");
      settxtcol("white");
    } else {
      setbgcol("white");
      settxtcol("#262626");
    }
  };

  let [ar1, setar1] = useState("0");
  let [ar3, setar3] = useState("0");
  let [ar2, setar2] = useState("block");
  let [state, setstate] = useState(0);
  let change = () => {
    if (state === 0) {
      setar1("40");
      setar2("none");
      setar3("-45");
      setstate(1);
    } else {
      setar1("0");
      setar2("block");
      setar3("0");
      setstate(0);
    }
  };
  return (
    <Navbar expand="lg" className="fixed-top" style={{ background: bgcol }}>
      <Container fluid>
        <Navbar.Brand href="/" className="title">
          Legis Law
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={change}
          className="togg"
        >
          <article id="ar1" style={{ rotate: `${ar1}deg` }}></article>
          <article id="ar2" style={{ display: ar2 }}></article>
          <article id="ar3" style={{ rotate: `${ar3}deg` }}></article>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link
              href="/law"
              className="nav-item"
              style={{ color: txtcol }}
            >
              Laws<article className="expander"></article>
            </Nav.Link>
            <Nav.Link
              href="/Blog"
              className="nav-item"
              style={{ color: txtcol }}
            >
              Blogs
              <article className="expander"></article>
            </Nav.Link>
            <Nav.Link href="" className="nav-item" style={{ color: txtcol }}>
              Legal Assistance<article className="expander"></article>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLaw;

// import React from "react";
// import logo from "../Images/logo.png";
// import "./Navbar.css";
// import { useState, useEffect } from "react";
// export default function Navbar() {
//   const [color, setcolor] = useState(15);

//   return (
//     <div
//       style={{
//         background: "white",
//         opacity: "1",
//         backgroundColor: "whitesmoke",
//         display: "flex",
//         flexDirection: "column",
//         transition: "all 0.3s linear",
//         boxShadow: `0px 0px 1px 0px lightgrey`,
//       }}
//     >
//       <div className="navbarheader">
//         <img className="logo" src={logo} />
//         <h2 className="title">Legis Law</h2>
//       </div>
//       <div className="nav-icons">
//         <ul className="nav-items">
//           <li className="nav-item">
//             Laws<article className="expander"></article>
//           </li>
//           <li className="nav-item">
//             Blogs<article className="expander"></article>
//           </li>
//           <li className="nav-item">
//             Legal Assistance<article className="expander"></article>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// .title {
//   font-family: "Lucida Handwriting", cursive;
//   height: fit-content;
//   font-size: 2rem;
//   width: auto;
//   width: 100%;
//   height: min-content;
//   margin-right: 10%;
// }

// .navbarheader {
//   height: 60px;
//   text-align: center;
//   margin: 0px;
//   padding: 0px;
//   display: flex;
//   align-items: center;
//   border-bottom: 0.1px solid rgb(234, 233, 233);
// }

// .logo {
//   width: 130px;
//   height: 80px;
//   float: left;
// }

// .nav-items {
//   list-style-type: none;
//   height: 20px;
//   width: auto;
// }

// .nav-item {
//   margin-right: 30px;
//   float: left;
//   cursor: pointer;
//   font-size: large;
//   font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
// }
// .nav-icons {
//   position: -webkit-sticky; /* Safari */
//   position: sticky;
//   top: 0;
// }
// .expander {
//   height: 2px;
//   width: 0px;
//   background-color: darkblue;
//   transition: all 0.5s ease-in-out;
// }

// .nav-item:hover .expander {
//   width: 100%;
// }

// @media (max-width: 700px) {
//   .title {
//     font-size: 1rem;
//   }
//   .logo {
//     width: 80px;
//     height: 50px;
//   }
//   .nav-item {
//     font-size: x-small;
//   }
// }
