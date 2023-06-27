import React from "react";
import Tittle from "./heading";
import { Link } from "react-router-dom";
function LeftCards() {
  return (
    <>
      <Tittle tittle="More For you" />
      <div className="row">
        <Cards
          heading="
Learn technologies with Hkr agri techs
"
          dis="
Moovendhan
"
img="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhbZO7EycleoAe72ZnHULYjuiyo1yg-KWcfnFvCDfXRNolLV1ygPSQqzMf38WUdXQDThVWCV8o0BR5sGTCOZ5WqDEVN3UD5CFUW4PcT2EGY-aO2epxH8nykryUyUlhUmTX8wW7BlkchlYqeW1uVsjfc1j8L-9rIa_W_lfeDgIttMdRV13Rf-_8Uw0c/s16000/Beige%20Grey%20Vlogger%20YouTube%20Banner.jpg"
alt="Hkr agri techs youtube"
to="hkragritechs"
        />

        <Cards
          heading="
          Discover the Best Apps in Tamil Language on ( best apps in tamil) 
"
          dis="
Moovendhan
"
img="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd-PzIh2JYNwRyPtQ9jUCtiXHRZ88GXJafffOt22exQBJJXgQvDY_rv_R8pNlTAfif1uRcyIZEWiRg-z5CWI-ltULNlP8BSSR2keiAB5O4ZKt5c9JhumVJth3ghWfweuzEwx-eahZdjHaGHLgw9qbU06OnItTT0hciOOrbJoQ3eB6CfgW3QY3YCeUp/s16000/best%20apps%20in%20tamil.jpg"

alt="Best apps in tamil youtube"
to="bestappsintamil"
        />
      </div>
    </>
  );
}

function Cards(props) {
  return (
    <div className="col-lg-6">
      <Link to={props.to}>
        <div className="card darkTheme">
          <img
            src={props.img} alt={props.alt}
          />
          <div className="card-body">
            <h3 className="card-title white h5 heading">{props.heading}</h3>
            <p className="card-text author">
              <i className="fa-solid fa-user"></i> {props.dis}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export { LeftCards };
