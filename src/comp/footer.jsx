import React from "react";
import "../assets/css/footer.css";


function Footer(){

    return(
        <>
        <div className="footer pb-3 background mt-3">
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-lg-8 mt-3">
                        <span>Copyright @ <a href="https://agricreations.com">Agricreations</a> All rights recived</span>
                    </div>
                    <div className="col-lg-4 mt-3">
        <div className="d-lg-flex justify-content-between">
        <a className="px-2" href="/">Home</a>
        <a className="px-2" href="/">About</a>
        <a className="px-2" href="/">Hireme</a>
        <a className="px-2" href="/">Get in touch</a>
        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;