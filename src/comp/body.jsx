import React from "react";
import {LeftCards} from "./leftslide"
import RightSlide from "./rightslide";
import Tittle from "./heading";

function Body() {
  return (
    <>
    <Tittle tittle="Read more" />
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-9 darkTheme rounded">
            <LeftCards />
          </div>
          <div className="col-lg-3 ">
            <RightSlide />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;