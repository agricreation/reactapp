import React from "react";
import Tittle from "./heading";
import {Link} from "react-router-dom";
function Postmodel() {
  return (
    <>
<Tittle tittle="Latest posts" />
<div className="container darkTheme p-3 mt-3 rounded">    
    <Link to="/agricreations">
  <div className="row">
    <div className="col-lg-4">
    <img className="rounded img-fluid" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC2noZG_sKE8glw4Btvh-XfZpQFggGacLQ1s0t-OXcdRWJHrzy5ofWItXZLpDFbglTgySJRao_7hFMKXqbdGTLVQViwPnJKvJE_jtyo2TWxd23IEoDnZ2RpnkOaryX1I-QsVWApVdz0PyVENvAFP8QzyC9A67TM5-oMgctgi8Eok72xHEfyEo6z-MurYE/s1280/agricreations%20webdeveloper.png" alt="" />
    </div>
    <div className="col-lg-8 d-flex flex-column">
      <h3 className="heading">About agricreations</h3>
      <p className="info">Hello, my name is Moovendhan, and I am a professional web developer. I have been actively engaged in writing articles for a blog. Additionally, I possess a keen interest in multimedia and have dedicated the past two years to working on YouTube. During this time, I have acquired valuable skills in applications such as Photoshop and Premiere Pro.</p>
      <p className="author align-items-end"><i className="fa-solid fa-user"></i> Moovendhan</p>
    </div>
  </div>
    </Link>
  </div>
    </>
  );
}

export default Postmodel;
