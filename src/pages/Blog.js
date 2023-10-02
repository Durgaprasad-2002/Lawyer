import React from "react";
import NavbarLaw from "./Navbar";
import "./index.css";
import { BsLink45Deg } from "react-icons/bs";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  let navigate = useNavigate();
  const MoreInfoComponent = (text) => {
    navigate("/sub", { state: "sub" });
  };
  const MoreInfoComponentH = (text) => {
    navigate("/", { state: "sub" });
  };
  return (
    <>
      <NavbarLaw />

      <div className="blog-title">
        <p className="path-container">
          {" "}
          <span className="path" onClick={() => MoreInfoComponentH("")}>
            Home
          </span>{" "}
          / <span className="path">Blogs</span>
        </p>
        <h1>Blogs Pannel</h1>
      </div>
      <section>
        <div className="columns">
          <div className="col-item">
            {" "}
            <img
              onClick={() => MoreInfoComponent()}
              className="img-blog"
              src="https://plus.unsplash.com/premium_photo-1683140667256-d9057b396ac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
            <div className="outer-linker">
              <BsLink45Deg className="linker" />
            </div>
            <h6 className="date">October 31,2023</h6>
            <h3 onClick={() => MoreInfoComponent()}>
              Women's reservation bill signed into law by President Droupadi
              Murmu
            </h3>
          </div>

          <div className="col-item">
            {" "}
            <img
              onClick={() => MoreInfoComponent()}
              className="img-blog"
              src="https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            />
            <div className="outer-linker">
              <BsLink45Deg className="linker" />
            </div>
            <h6 className="date">October 31,2023</h6>
            <h3 onClick={() => MoreInfoComponent()}>
              Law Commission advises against reducing age of consent to 16 under
              POCSO Act
            </h3>
          </div>

          <div className="col-item">
            {" "}
            <img
              onClick={() => MoreInfoComponent()}
              className="img-blog"
              src="https://plus.unsplash.com/premium_photo-1683140667256-d9057b396ac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
            <div className="outer-linker">
              <BsLink45Deg className="linker" />
            </div>
            <h6 className="date">October 31,2023</h6>
            <h3 onClick={() => MoreInfoComponent()}>
              Women's reservation bill signed into law by President Droupadi
              Murmu
            </h3>
          </div>

          <div className="col-item">
            {" "}
            <img
              onClick={() => MoreInfoComponent()}
              className="img-blog"
              src="https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            />
            <div className="outer-linker">
              <BsLink45Deg className="linker" />
            </div>
            <h6 className="date">October 31,2023</h6>
            <h3 onClick={() => MoreInfoComponent()}>
              Law Commission advises against reducing age of consent to 16 under
              POCSO Act
            </h3>
          </div>

          <div className="col-item">
            {" "}
            <img
              onClick={() => MoreInfoComponent()}
              className="img-blog"
              src="https://plus.unsplash.com/premium_photo-1683140667256-d9057b396ac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
            <div className="outer-linker">
              <BsLink45Deg className="linker" />
            </div>
            <h6 className="date">October 31,2023</h6>
            <h3 onClick={() => MoreInfoComponent()}>
              Women's reservation bill signed into law by President Droupadi
              Murmu
            </h3>
          </div>

          <div className="col-item">
            {" "}
            <img
              onClick={() => MoreInfoComponent()}
              className="img-blog"
              src="https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            />
            <div className="outer-linker">
              <BsLink45Deg className="linker" />
            </div>
            <h6 className="date">October 31,2023</h6>
            <h3 onClick={() => MoreInfoComponent()}>
              Law Commission advises against reducing age of consent to 16 under
              POCSO Act
            </h3>
          </div>

          <div className="col-item">
            {" "}
            <img
              onClick={() => MoreInfoComponent()}
              className="img-blog"
              src="https://plus.unsplash.com/premium_photo-1683140667256-d9057b396ac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
            <div className="outer-linker">
              <BsLink45Deg className="linker" />
            </div>
            <h6 className="date">October 31,2023</h6>
            <h3 onClick={() => MoreInfoComponent()}>
              Women's reservation bill signed into law by President Droupadi
              Murmu
            </h3>
          </div>

          <div className="col-item">
            {" "}
            <img
              onClick={() => MoreInfoComponent()}
              className="img-blog"
              src="https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            />
            <div className="outer-linker">
              <BsLink45Deg className="linker" />
            </div>
            <h6 className="date">October 31,2023</h6>
            <h3 onClick={() => MoreInfoComponent()}>
              Law Commission advises against reducing age of consent to 16 under
              POCSO Act
            </h3>
          </div>
          <div className="col-item">
            {" "}
            <img
              onClick={() => MoreInfoComponent()}
              className="img-blog"
              src="https://plus.unsplash.com/premium_photo-1683140667256-d9057b396ac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
            <div className="outer-linker">
              <BsLink45Deg className="linker" />
            </div>
            <h6 className="date">October 31,2023</h6>
            <h3 onClick={() => MoreInfoComponent()}>
              Women's reservation bill signed into law by President Droupadi
              Murmu
            </h3>
          </div>
          <div className="col-item">
            {" "}
            <img
              onClick={() => MoreInfoComponent()}
              className="img-blog"
              src="https://plus.unsplash.com/premium_photo-1683140667256-d9057b396ac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
            <div className="outer-linker">
              <BsLink45Deg className="linker" />
            </div>
            <h6 className="date">October 31,2023</h6>
            <h3 onClick={() => MoreInfoComponent()}>
              Women's reservation bill signed into law by President Droupadi
              Murmu
            </h3>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
