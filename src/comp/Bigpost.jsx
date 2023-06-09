import React from "react";

function Bigpost() {
  const image =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiT7NPS1lkPkvtx5zMCPpZKVRQ2BqELg8ZeGtg8Z9vrLM99I7Wt120Lr9pg-8THQVje3hUBbkDydQ7UrU3UGnZJcIb3vicy2Zlo-8OnWL0ZdRmBzT_i_88zB-K4gh_Va8c595nJLuIt2eo9IspUODyKz1v9-13XQYNixWpzaAs4GJvaJSB1tB6x7yCM8g/s16000/firefox%20focus%20take%20your%20privacy%20to%20next%20level.jpg";
  return (
    <>
    <a href="/">
      <div className="container mt-3 p-3 darkTheme">
        <div className="row rounded">
          <div class="card text-bg-dark">
            <img src={image} class="card-img" alt="Agri creations latest posts" style={{opacity:"50%"}} />

            <div class="card-img-overlay p-5">
              <h3 class="card-title mt-auto heading">Card title</h3>
              <p class="card-text info">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small className="badge bg-primary">Technology</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      </a>
    </>
  );
}

export default Bigpost;
