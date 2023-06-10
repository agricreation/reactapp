import React from "react";
import RightSlide from "../comp/rightslide";
import Logo from "../assets/img/logo";
import "../assets/css/visitpost.css"
import Author from "../comp/author";

function VisitPost() {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-9 darkTheme rounded">
           <MainPost />
          </div>
          <div className="col-lg-3 ">
            <RightSlide />
          </div>
        </div>
      </div>
    </>
  );
}

function MainPost(){
  const sample = Logo.sample
    return(
        <>
        <div className="poppins p-3">
            <h3 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <Author />
            <div className="content mt-4">
            <h3 className="mainTitle h5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam eos sint illum nihil explicabo autem culpa maiores ullam voluptatum quam.</h3>
            <div className="py-4">
              <img src={sample} className="img-fluid" alt="sample images" />
            </div>
            <div className="contentPara">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cum quae molestias. Cupiditate blanditiis voluptas iure, eius possimus quasi magni enim quae delectus libero, animi itaque praesentium aspernatur? Vero, voluptatum.</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default VisitPost;