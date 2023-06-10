import React from "react";
import Logo from "../assets/img/logo";


function Author() {
    const authorLogo = Logo.logo
  return (
    <div className="darkTheme rounded p-2">
    <a href="https://agricreations.com">
      <p className="card-text author p-1">
        <img
          src={authorLogo}
          target="_blank"
          rel="noreferrer"
          className="authorLogo"
          alt="Moovendhan agricreations"
        />
         {" "} <span className="text-light">by </span> Moovendhan
      </p>
    </a></div>
  );
}

export default Author;
