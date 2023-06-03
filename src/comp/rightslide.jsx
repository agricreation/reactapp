import React from "react";
import "../assets/css/rightslide.css";

function RightSlide(){
    return(
      <>
        <RightSlideCardSocial />
        <RightSlideProfile />
        <RightSlideCard />
      </>

    )
}

function RightSlideCardSocial(){
    return(
                      <>
                <div className="card darkTheme px-3 pt-2 slideBar">
                  <span className="text-center">Get in touch</span>
                  <div className="card-body d-flex justify-content-between">
                    <a href="" type="button" className="btn btn-primary social"><i className="fa-brands fa-facebook"></i></a>
                    <a href="" type="button" className="btn btn-primary social"><i className="fa-brands fa-instagram"></i></a>
                    <a href="" type="button" className="btn btn-primary social"><i className="fa-brands fa-youtube"></i></a>
                  </div>
                </div>
              </>
    )
}

function RightSlideCard(){
  return(
    <>
    <div className="card darkTheme px-3 pt-2 slideBar mt-3">
      <span className="text-center">Author</span>
      <div className="card-body d-flex justify-content-between">
       <img className="img-fluid" src="https://blogger.googleusercontent.com/img/a/AVvXsEiabOqWqzTxIX_Q28LC4mYioRbigQdKDysM2FDjTRvp4qMTnEW1zziQQVgjUNzI9vpquHjGjth2ZHB2o6ODSLXthbIIaaGvQqayUW_LD0CDh7iNLKEPieevnZIWLF9PzOU9KEbnAr1j9cxcSsFq_qRe_Ax_hJB2pN_mMOKguUChnvLITU9cEU7cCKcIRw=s16000" alt="Moovendhan" />
      </div>
    </div>
  </>
  )
}

function RightSlideProfile(){
  return(
    <>
    <div className="card darkTheme px-3 pt-2 slideBar mt-3">
      <span className="text-center">Profile</span>
      <div className="card-body d-flex justify-content-between">
      <a href="https://agricreations.com" className="btn btn-primary" type="button">Agricreations</a>
      </div>
    </div>
  </>
  )
}

export default RightSlide;