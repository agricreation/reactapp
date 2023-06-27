import React from "react";
import Images from "../assets/img/logo";
import "../assets/css/aboutus.css";
import { RightSlideYoutube } from "../comp/rightslide";
function AboutUs() {
  const aboutBanner = Images.aboutBanner;
  return (
    <>
      <div className=" container AboutUs mt-3 p-3">
        <div className="AboutImg">
          <img
            src={aboutBanner}
            className="img-fluid"
            alt="moovendhan agricreations"
          />
        </div>
        <div className="content container darkTheme mt-3 rounded">
          <div className="AboutHeading mt-3 poppins">
            <h3>About Moovendhan v</h3>
          </div>
          <div className="AboutPara">
            <p>
              Hi, I am Moovendhan. Webdeveloper, I was writing an articles on a
              blog. And I am interested in multimedia also, for the past two
              years, I have been working on youtube. While doing youtube, I have
              learned lot of things like photoshop and premiere pro
            </p>
          </div>
          <VideoEditor />
        </div>
      </div>
    </>
  );
}

function VideoEditor() {
  return (
    <>
      <div className="row darkTheme p-3 rounded">
        <div className="col-lg-6">
          <>
            <div
              className="ratio ratio-16x9 border border-light"
              width="100%"
              height="auto"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#video-editor"
            >
              <iframe
                src="https://www.youtube.com/embed/GnY3ewl2u_E?rel=0"
                title="YouTube video"
                allowFullScreen=""
              />
            </div>
          </>
        </div>
        <div className="col-lg-6">
          <h3 className="title">
            Hire me as a video editor
            <RightSlideYoutube />
            <Freelancing />
          </h3>
        </div>
      </div>
    </>
  );
}

function Freelancing() {
  return (
    <>
      <div className="AboutFreelancing mt-3">
        <a
          href="https://www.fiverr.com/moovendhan_v?up_rollout=true"
          target="_blank"
          rel="noreferrer"
        >
          <div className="btn btn-success darkTheme poppins">
            Hire me on fiver
          </div>
        </a>
        <a
          href="https://link.agricreations.com/whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <div className="btn btn-success darkTheme poppins mt-2">
            <i className="fa-brands fa-whatsapp "></i> Whatsapp
          </div>
        </a>
      </div>
    </>
  );
}

export default AboutUs;
export {VideoEditor}