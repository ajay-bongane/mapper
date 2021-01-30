import React from "react";
import { links, UserLinks } from "../data/links";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="d-flex order-0">
        <a className="navbar-brand mr-1" href="/">
          Mapper
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsingNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        className="navbar-collapse collapse justify-content-between align-items-center w-100"
        id="navbar6"
      >
        {/* This is for center aligned links on Navbar */}
        <ul className="navbar-nav mx-auto text-center">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id} className="nav-item">
                <a className="nav-link" href={url}>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        {/* This is for right aligned links on Navbar */}
        <ul className="navbar-nav ml-auto">
          {UserLinks.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id} className="nav-item">
                <a className="nav-link" href={url}>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
