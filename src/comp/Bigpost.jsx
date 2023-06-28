import React from "react";
import { Link } from "react-router-dom";
function Bigpost() {
  const image =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC2noZG_sKE8glw4Btvh-XfZpQFggGacLQ1s0t-OXcdRWJHrzy5ofWItXZLpDFbglTgySJRao_7hFMKXqbdGTLVQViwPnJKvJE_jtyo2TWxd23IEoDnZ2RpnkOaryX1I-QsVWApVdz0PyVENvAFP8QzyC9A67TM5-oMgctgi8Eok72xHEfyEo6z-MurYE/s1280/agricreations%20webdeveloper.png";
  return (
    <>
    <a href="/">
      <div className="container mt-3 p-3 darkTheme">
        <div className="row rounded">
          <div className="card text-bg-dark">
            <img src={image} className="card-img" alt="Agri creations latest posts" style={{opacity:"50%"}} />
<Link to="/agricreations">
            <div className="card-img-overlay p-5 poppins ">
              <h3 className="card-title mb-auto heading bg-primary bg-opacity-25 text-info rounded p-1 my-1">About agricreations</h3>
              <p className="card-text info bg-primary bg-opacity-25 text-info rounded p-1 my-1">
              Hello, my name is Moovendhan,.....
              </p>
              <p className="card-text">
                <small className="badge bg-primary">Portfolio</small>
              </p>
            </div>
            </Link>
          </div>
        </div>
      </div>
      </a>
    </>
  );
}

export default Bigpost;
