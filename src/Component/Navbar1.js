
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Navbar1 = () => {
  const Navigate = useNavigate();
  const buyerToken = localStorage.getItem("buyerToken");
  const sellerToken = localStorage.getItem("sellerToken");

  const logout = () => {

    localStorage.removeItem("sellerToken");
    localStorage.removeItem("buyerToken");
    if (buyerToken) {
      Navigate('/login1');
    }
    if (sellerToken) {
      Navigate('/sellerlogin');
    }
    window.location.reload();

  }

  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-expand-lg navbar-dark p-md-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          <img src="/images/logo-1.png" alt="Logo" width="60px" className="me-2" />
          e-Commerce
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
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
          {/* <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="btn btn-outline-warning me-2 mb-2" style={{ width: '90px' }} to="/SellerLogin">
                Seller
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-warning me-2 mb-2 active" style={{ width: '90px' }} to="/login1">
                Buyer
              </Link>
            </li>
          
          </ul> */}
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}

          {
            buyerToken || sellerToken ? (
              <button className="btn btn-outline-warning me-2 mb-2" style={{ width: '90px' }} onClick={logout}  >
                Logout
              </button>
            ) : (
              <>

                <Link className="btn btn-outline-warning me-2 mb-2" style={{ width: '90px' }} to="/SellerLogin">
                  Seller
                </Link>
                <Link className="btn btn-outline-warning me-2 mb-2 active" style={{ width: '90px' }} to="/login1">
                  Buyer
                </Link>
              </>
            )
          }
          


        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
