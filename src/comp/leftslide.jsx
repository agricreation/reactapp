import React from "react";
import Tittle from "./heading";

function LeftCards() {
  return (
    <>
    <Tittle tittle="More For you" />
      <div className="row">
        <Cards
          heading="
Fire fox focus Take your private mode to next level
"
          dis="
Moovendhan agriculture
"
        />
        <Cards
          heading="
Fire fox focus Take your private mode to next level
"
          dis="
Moovendhan agriculture
"
        />
      </div>
    </>
  );
}

function Cards(props) {
  return (
    <div className="col-lg-6">
      <a href="/">
        <div className="card darkTheme">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiT7NPS1lkPkvtx5zMCPpZKVRQ2BqELg8ZeGtg8Z9vrLM99I7Wt120Lr9pg-8THQVje3hUBbkDydQ7UrU3UGnZJcIb3vicy2Zlo-8OnWL0ZdRmBzT_i_88zB-K4gh_Va8c595nJLuIt2eo9IspUODyKz1v9-13XQYNixWpzaAs4GJvaJSB1tB6x7yCM8g/s16000/firefox%20focus%20take%20your%20privacy%20to%20next%20level.jpg"
            alt="nothing"
          />
          <div className="card-body">
            <h3 className="card-title white h5 heading">{props.heading}</h3>
            <p className="card-text author">
              <i className="fa-solid fa-user"></i> {props.dis}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export { LeftCards };
