import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="Logo" style={{ width: "90px" }} />
        </Link>
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Login">
                Login 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Login1">
                Login1 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Signup">
                Signup
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link
              to="/login"
              className="btn btn-outline-success me-2"
              style={{ background: "#063970", color: "white", width: "150px"}}
            >
               Buyer
            </Link>
            <Link
              to="/sellerlogin"
              className="btn btn-outline-success me-4"
              style={{ background: "#063970", color: "white", width: "150px"}}
            >
              Seller
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
