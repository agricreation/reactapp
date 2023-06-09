import React from "react";
import "../assets/css/footer.css";
import Images from "../assets/img/logo";
import { SocialButton } from "./rightslide";
function Footer(){
    return(
        <>
        <div className="footer pb-3 background mt-3 pt-3">
        <FooterInfo />
            <div className="container">
                <div className="row ">
                    <div className="col-lg-8 mt-3">
                        <span>Copyright @ <a href="https://agricreations.com">Agricreations</a> All rights recived</span>
                    </div>
                    <div className="col-lg-4 mt-3">
                    <div className="d-lg-flex flex-row-reverse">
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

function FooterInfo(){
    const logo = Images.logo;
    return(
        <>
        <div className="container mt-3 darkTheme rounded">
<div className="row py-5">
    <div className="col-lg-2 d-flex justify-content-center align-items-center footerGrid logo text-center">
            <img  className="footerLogo" src={logo} alt="" />
    </div>
    <div className="col-lg-7 d-flex align-items-center p-lg-2 footerGrid info">Hi, I am Moovendhan. Webdeveloper, I was writing an articles on a blog. And I am interested in multimedia also, for the past two years, I have been working on youtube. While doing youtube, I have learned lot of things like photoshop and premiere pro.</div>
    <div className="col-lg-3 d-flex align-items-center footerGrid">
        <SocialButton />
    </div>
</div>
        </div>
        </>
    )
}
export default Footer;