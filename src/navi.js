import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div>
      {/* <div className="routes">
                <Link className="btn-danger routingBtn" to={"/"}>Home</Link>
                <br />
                <Link className="btn-danger routingBtn" to={"/compare"}>Compare</Link>
            </div> */}
      <nav class="navbar navbar-expand-lg light">
        <div class="container">
          {/* <!-- Logo --> */}
          <a class="logo" href="#">
            <img src="/img/Logowhite.png" alt="logo" />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="icon-bar">
              <i class="fas fa-bars"></i>
            </span>
          </button>

          {/* <!-- navbar links --> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link class="nav-link" to={"/"}>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/blogs"}>
                  Blogs
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/news"}>
                  News
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/contact"}>
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link headerBtn" to={"/home"}>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link headerBtn" to={"/compare"}>
                  Compare
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
