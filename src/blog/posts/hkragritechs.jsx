import React from "react";
import RightSlide from "../../comp/rightslide";
import Author from "../../comp/author";
import Youtube from "../../comp/youtube";
export default function HkrAgriTechs() {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-9 darkTheme rounded">
            <div className="content-heading">
              <h3 className="py-3">About Hkr agri techs (agricreations)</h3>
              <Author />
              
              <div className="content">
                <div className="content-img py-3">
                  <img
                    className="img-fluid border border-primary rounded"
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhbZO7EycleoAe72ZnHULYjuiyo1yg-KWcfnFvCDfXRNolLV1ygPSQqzMf38WUdXQDThVWCV8o0BR5sGTCOZ5WqDEVN3UD5CFUW4PcT2EGY-aO2epxH8nykryUyUlhUmTX8wW7BlkchlYqeW1uVsjfc1j8L-9rIa_W_lfeDgIttMdRV13Rf-_8Uw0c/s16000/Beige%20Grey%20Vlogger%20YouTube%20Banner.jpg"
                    alt="moovendhan agricreations"
                  />
                </div>
                <p className="lh-base para">
                Hkr Agri Techs

                Here, we are going to discuss HkrAgriTech's YouTube channel. This channel is operated under Agricreations, and it provides information on technology. We are planning to offer high-quality content, so kindly check out our valuable videos on HkrAgriTech's YouTube channel.
<br /><br />
You can also explore all our playlists and videos on HkrAgriTech's YouTube channel.
<br /><br />
                </p>
                <div className="m-3 content-videoediting rounded border border-primary p-3 darkTheme">
                  <div className="content-yt py-2">
                    <Youtube id="/UBMOHEDY6Uk" /> 
                  </div>
                  <h3 className="h5 fw-bold text-center">
                    Visit channel now{" "} <br />
                    <span className="text-primary "><a className="btn btn-danger m-2" href="https://www.youtube.com/@HkragritechsYt">Subscribe</a> </span>
                  </h3>
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