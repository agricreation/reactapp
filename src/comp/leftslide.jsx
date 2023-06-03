import React from "react";

function LeftCards() {
  return (
    <>
      <div className="row">
        <Cards
          heading="
Fire fox focus Take your private mode to next level
"
          dis="
Fire fox focus Take your private mode to next level
"
        />
        <Cards
          heading="
Fire fox focus Take your private mode to next level
"
          dis="
Fire fox focus Take your private mode to next level
"
        />
        <Cards
          heading="
Fire fox focus Take your private mode to next level
"
          dis="
Fire fox focus Take your private mode to next level
"
        />

      </div>
    </>
  );
}

function Cards(props) {
  return (
    <div className="col-lg-6 mt-3">
      <a href="/">
        <div className="card darkTheme">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiT7NPS1lkPkvtx5zMCPpZKVRQ2BqELg8ZeGtg8Z9vrLM99I7Wt120Lr9pg-8THQVje3hUBbkDydQ7UrU3UGnZJcIb3vicy2Zlo-8OnWL0ZdRmBzT_i_88zB-K4gh_Va8c595nJLuIt2eo9IspUODyKz1v9-13XQYNixWpzaAs4GJvaJSB1tB6x7yCM8g/s16000/firefox%20focus%20take%20your%20privacy%20to%20next%20level.jpg"
            alt="nothing"
          />
          <div className="card-body">
            <h3 className="card-title white h5 text-primary">
              {props.heading}
            </h3>
            <p className="card-text">{props.dis}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export { LeftCards };
