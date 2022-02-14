import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="text-changer2 fixed-top navbar navbar-expand-lg navbar-light bg-dark2">
          <Link
            className="text-white navbar-brand btn btn-outline-info mr-5"
            to="/"
          >
            NewsTeller
          </Link>
          <button
            className="text-white navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-changer mr-auto">
              <li className="nav-item">
                <Link
                  className="nav-link text-white mx-2 text-changer2"
                  to="/business"
                >
                  Business
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-white mx-2 text-changer2"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-white mx-2 text-changer2"
                  to="/general"
                >
                  General
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-white mx-2 text-changer2"
                  to="/health"
                >
                  Health
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-white mx-2 text-changer2"
                  to="/science"
                >
                  Science
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-white mx-2 text-changer2"
                  to="/sports"
                >
                  Sports
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-white mx-2 text-changer2"
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
