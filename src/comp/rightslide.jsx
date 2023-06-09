import React from "react";
import "../assets/css/rightslide.css";
import Images from "../assets/img/logo";

function RightSlide() {
  return (
    <>
      <RightSlideCardSocial />
      <RightSlideProfile />
      <RightSlideCard />
      <RightSlideYoutube />
    </>
  );
}

function RightSlideCardSocial() {
  return (
    <>
      <div className="card darkTheme px-3 pt-2 slideBar">
        <span className="text-center">Get in touch</span>
        <div className="card-body d-flex justify-content-center">
        <SocialButton />
        </div>
      </div>
    </>
  );
}

function SocialButton(){
  return(
    <>
    <a href="" type="button" className="btn btn-primary social">
    <i className="fa-brands fa-facebook"></i>
  </a>
  <a href="" type="button" className="btn btn-primary social">
    <i className="fa-brands fa-instagram"></i>
  </a>
  <a href="" type="button" className="btn btn-primary social">
    <i className="fa-brands fa-youtube"></i>
  </a></>
  )
}

function RightSlideCard() {
  const profile = Images.profile;
  return (
    <>
      <div className="card darkTheme px-3 pt-2 slideBar mt-3">
        <span className="text-center">Author</span>
        <div className="card-body d-flex justify-content-center">
          <img
            className="img-fluid"
            src={profile}
            alt="Moovendhan"
          />
        </div>
      </div>
    </>
  );
}

function RightSlideProfile() {
  return (
    <>
      <div className="card darkTheme px-3 pt-2 slideBar mt-3">
        <span className="text-center">Profile</span>
        <div className="card-body d-flex justify-content-between">
          <a
            href="https://agricreations.com"
            className="btn btn-primary"
            type="button"
          >
            Agricreations
          </a>
        </div>
      </div>
    </>
  );
}

function RightSlideYoutube() {
  const APIKey = "AIzaSyDbEgadnqHQCSVitn2tsnQsY1HXsfsS0dM";
  const UserId = "UCSjSmjY9cEI_ib-NrBElVXw";
  const datas = fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${UserId}&key=${APIKey}`)
  .then(responce => responce.json())
  .then(data => data)
  return (
    <>
      <div className="card darkTheme px-3 pt-2 slideBar mt-3">
      <span className="text-center mb-3">Youtube</span>
        <div className="btn btn-danger HkrAgriTechs mb-3">Fetching data...</div>
        <div className="btn btn-danger BestAppsInTamil mb-3">Fetching data...</div>
      </div>
    </>
  );
}

export default RightSlide;
export {SocialButton}
