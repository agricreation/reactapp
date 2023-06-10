import React, { useState} from "react";
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
      <div className="card darkTheme px-3 pt-2 slideBar mt-4 mt-lg-0">
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
    <a href="https://facebook.com/moovendhanv" type="button" className="btn btn-facebook social">
    <i className="fa-brands fa-facebook"></i>
  </a>
  <a href="https://www.instagram.com/hkragritechs/" type="button" className="btn btn-instagram social">
    <i className="fa-brands fa-instagram"></i>
  </a>
  <a href="https://www.youtube.com/@moovendhanagri" type="button" className="btn btn-youtube social">
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
          <a  target="_blank" rel="noreferrer" href="https://agricreations.com">
          <img
            className="img-fluid rounded border border-primary"
            src={profile}
            alt="Moovendhan"
          /></a>
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
  const [hkrSubscriberCount, hkrSetSubscriberCount] = useState(null);
  const [BAITSubscriberCount, BAITSetSubscriberCount] = useState(null);
 function subCount(ID, sets) {
 const APIKey = "AIzaSyDbEgadnqHQCSVitn2tsnQsY1HXsfsS0dM";
  const UserId = ID;
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${UserId}&key=${APIKey}`)
      .then(response => response.json())
      .then(data => {
        const count = data['items'][0]['statistics']['subscriberCount'];
        sets(count);
      })
      .catch(error => {
        console.error("Error fetching subscriber count:", error);
      });
  }
 subCount("UCSjSmjY9cEI_ib-NrBElVXw",hkrSetSubscriberCount);
 subCount("UCdrrGvlDqvXo4H0aH8Rh8wQ",BAITSetSubscriberCount);

  return (
    <>
      <div className="card darkTheme px-3 pt-2 slideBar mt-3">
        <span className="text-center mb-3">Youtube</span>
        <a href="https://youtube.com/@hkragritechsYt" target="_blank" rel="noreferrer">
        <div className="btn btn-danger HkrAgriTechs mb-3 poppins youtube-author">
        <i className="fa-brands fa-youtube"></i> 
          {hkrSubscriberCount ? ` Hkr agri Techs: ${hkrSubscriberCount}` : " Fetching..."}
        </div>
        </a>
        <a href="https://youtube.com/@bestappsintamil" target="_blank" rel="noreferrer">
        <div className="btn btn-danger BestAppsInTamil mb-3 poppins youtube-author">
        <i className="fa-brands fa-youtube"></i>
        {BAITSubscriberCount ? ` BestApps: ${BAITSubscriberCount}` : " Fetching..."}
        </div>
        </a>
      </div>
    </>
  );
}


export default RightSlide;
export {SocialButton}
export {RightSlideYoutube}