import React from "react";
import MegaMenu from "./megamenu";
import Images from "../assets/img/logo";
function Nav(props) {
  const items = [
    {id:1, item: "Home", link: "www.google.com" },
    {id:2, item: "About", link: "www.google.com" },
    {id:3, item: "Contact us", link: "www.blogs.agricreations.com"},
  ];
  return (
    <nav className="navbar darkTheme navbar-expand-lg">
      <div className="container-fluid">
        <BranLink />
        <Brand />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {items.map((data) => (
              <Navli id={data.id} item={data.item} href={data.link} />
            ))}
          <MegaMenu />
          </ul>
        </div>
      </div>
        {/* <Navright/> */}
    </nav>
  );
}

function BranLink() {
  const brand = Images.logo;
  return (
    <a className="navbar-brand" href="/" rel="noreferrer">
      <img className="brandLogo" src={brand} alt="agricreations" />
    </a>
  );
}
function Brand() {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}

function Navli(props) {
  return (
    <li className="nav-item navbarItems">
      <a className="nav-link" href={props.href} rel="noreferrer">
        {props.item}
      </a>
    </li>
  );
}

export default Nav;




