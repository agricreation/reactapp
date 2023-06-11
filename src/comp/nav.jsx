import React from "react";
import MegaMenu from "./megamenu";
import Images from "../assets/img/logo";
import {Link} from "react-router-dom"

function Nav() {
  const items = [
    {id:1, item: "Home", link: "/" },
    {id:2, item: "About", link: "/aboutus" },
    {id:3, item: "Contact us", link: "/contactus"},
  ];
  return (
    <nav className="navbar darkTheme navbar-expand-lg">
      <div className="container-fluid">
        <BranLink />
        <Brand />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {items.map((data) => (
              <Navli  id={data.id} item={data.item} to={data.link} />
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
      <Link data-toggle="collapse"
              data-target="#navbarCollapse"
              activeClassName="active"
              className="nav-link" to={props.to} rel="noreferrer">
        {props.item}
      </Link>
    </li>
  );
}

export default Nav;




