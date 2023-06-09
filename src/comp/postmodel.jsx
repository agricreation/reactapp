import React from "react";
import Tittle from "./heading"
function Postmodel() {
  return (
    <>
<Tittle tittle="Latest posts" />
<div class="container darkTheme p-3 mt-3 rounded">    
  <div class="row">
    <div className="col-lg-4">
    <img className="rounded img-fluid" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiT7NPS1lkPkvtx5zMCPpZKVRQ2BqELg8ZeGtg8Z9vrLM99I7Wt120Lr9pg-8THQVje3hUBbkDydQ7UrU3UGnZJcIb3vicy2Zlo-8OnWL0ZdRmBzT_i_88zB-K4gh_Va8c595nJLuIt2eo9IspUODyKz1v9-13XQYNixWpzaAs4GJvaJSB1tB6x7yCM8g/s16000/firefox%20focus%20take%20your%20privacy%20to%20next%20level.jpg" alt="" />
    </div>
    <div class="col-lg-8 d-flex flex-column">
      <h3 className="heading">Agri </h3>
      <p className="info">Welcome to agri creations world Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deserunt sunt unde natus delectus minima enim repellat optio iusto ipsum mollitia ea, esse perferendis blanditiis.</p>
      <p className="author align-items-end"><i class="fa-solid fa-user"></i> Moovendhan</p>
    </div>
  </div>
  </div>
    </>
  );
}

export default Postmodel;
