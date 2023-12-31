import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <h1 className="navbar-brand text-light me-4 fs-2">
          WebTick 
          <i className="fa-solid fa-square-check ms-2"></i>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-light fs-5 me-2" aria-current="page" href="#/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fs-5 me-2" href="#/list">
                List
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
