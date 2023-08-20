import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid">
        <Link to={'/'} className="navbar-brand text-white">
          ShopCart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          >
            <li className="nav-item">
              <Link to={"/"} className="nav-link active text-white" aria-current="page" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/cart'} className="nav-link active text-white" >
                Cart
              </Link>
            </li>
            <span className="bg-dark bg-gradient text-white mx-2 p-2 rounded-3">Cart items : {items.length}</span>

            
           
          </ul>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;
