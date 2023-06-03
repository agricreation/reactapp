import React from "react";
import {LeftCards} from "./leftslide"
import RightSlide from "./rightslide";

function Body() {
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-9">
            <LeftCards />
          </div>
          <div className="col-lg-3 mt-3">
            <RightSlide />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;