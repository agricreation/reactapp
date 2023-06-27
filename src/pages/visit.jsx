import React from "react";
import RightSlide from "../comp/rightslide";
import Author from "../comp/author";
import Youtube from "../comp/youtube";
export default function VisitPosts() {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-9 darkTheme rounded">
            <div className="content-heading">
              <h3 className="py-3">About moovendhan (agricreations)</h3>
              <Author />
              
              <div className="content">
                <div className="content-img py-3">
                  <img
                    className="img-fluid border border-primary rounded"
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIR9DMEbkKrB7UwbstGcqVQ-1An4rn8K2F8oWlgjogdKD7QiHwUDBOHYtjbIwR_tx9tOTh7ar0QB1tdrmgBV_pNu8PAiJMGz40IL3kLiLNsXUNQber4U70H-LDlscWvHwpqLeL7DJ8uSVJeMDUM24OfJ4qiDA6ggn3lB8zC2OKc4daLx0vTcb4RF4l/s16000/moovendhan_linkedin_dark.png"
                    alt="moovendhan agricreations"
                  />
                </div>
                <p className="lh-base para">
                  Hello, my name is Moovendhan, and I am a professional web
                  developer. I have been actively engaged in writing articles
                  for a blog. Additionally, I possess a keen interest in
                  multimedia and have dedicated the past two years to working on
                  YouTube. During this time, I have acquired valuable skills in
                  applications such as Photoshop and Premiere Pro
                </p>
                <div className="m-3 content-videoediting rounded border border-primary p-3 darkTheme">
                  <div className="content-yt py-2">
                    <Youtube id="GnY3ewl2u_E" />
                    
                  </div>
                  <h3 className="h5 fw-bold text-center">
                    Engage our services as a professional video editor{" "} <br />
                    <span className="text-primary "><a href="https://link.agricreations.com/fiver">Hire now ...!</a> </span>
                  </h3>
                </div>
                <div className="m-3 content-videoediting rounded border border-danger p-3 darkTheme">
                  <h3 className="h5 fw-bold">
                    Hire me as a web developer
                    <span className="text-primary "> Hire now ...!</span>
                  </h3>
                  <div className="content-yt py-2">
                  <Youtube id="DxYOHja3d5w" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 ">
            <RightSlide />
          </div>
        </div>
      </div>
    </>
  );
}
