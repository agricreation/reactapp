import React from "react";
import {LeftCards} from "./leftslide"
import RightSlide from "./rightslide";
import Tittle from "./heading";
import Postmodel from "./postmodel";
import Bigpost from "./Bigpost";


function Body() {
  return (
    <>
    <Postmodel />
    <Tittle tittle="Read more" />
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-9 darkTheme rounded">
            <Bigpost />
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