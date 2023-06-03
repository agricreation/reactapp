import React from "react";

function Nav(props) {
  const items = [
    { item: "Home", link: "www.google.com" },
    { item: "About", link: "www.google.com" },
    { item: "Contact us", link: "www.blogs.agricreations.com"},
  ];
  return (
    <nav className="navbar darkTheme navbar-expand-lg">
      <div className="container-fluid">
        <BranLink />
        <Brand />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {items.map((data) => (
              <Navli item={data.item} href={data.link} />
            ))}
          </ul>
        </div>
      </div>
        {/* <Navright/> */}
    </nav>
  );
}

function BranLink() {
  return (
    <a className="navbar-brand" href="/" rel="noreferrer">
      <img src="https://blogger.googleusercontent.com/img/a/AVvXsEi2kABZXd7Fy7M-nN0KCnSL0AgLLTIy1YVkA35oDjeyMtXau8ua6tp7FiWSCUg2ee18XQbUSZX8sVs3qGqt9MkDpJ_JCQV60zPfqLg4URbvRMK4aqc8B8fnKpSoHmUSkqs-mG0x83faGlaxp8BtC4cXGYFoFPbNIBSSX3gtS-eFGvEjA9rNaD1ak6QG9w=s150" alt="" />
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




