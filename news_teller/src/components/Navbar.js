import React, { Component } from "react";
import "../App.css";


export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="text-changer2 navbar navbar-expand-lg navbar-light bg-dark2">
          <a className="text-white navbar-brand btn btn-outline-info" href="/">
            NewsTeller
          </a>
          <button
            className=" text-white navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-changer mr-auto">
              <li className="nav-item">
                <a
                  className="nav-link ml-5 text-white mx-2 text-changer2"
                  href="/business"
                >
                  Business
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-white mx-2 text-changer2"
                  href="/entertainment"
                >
                  Entertainment
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-white mx-2 text-changer2"
                  href="/general"
                >
                  General
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-white mx-2 text-changer2"
                  href="/health"
                >
                  Health
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-white mx-2 text-changer2"
                  href="/science"
                >
                  Science
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-white mx-2 text-changer2"
                  href="/sports"
                >
                  Sports
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-white mx-2 text-changer2"
                  href="/technology"
                >
                  Technology
                </a>
              </li>
            </ul>
          </div> */}
        </nav>
      </div>
    );
  }
}

export default Navbar;
