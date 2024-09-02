import React, { useRef, useState } from "react";
import "./mobileNavigation.css";
import { Link } from "react-router-dom";

const MobileNavigation = () => {
  const navBarRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mobileNavigationOpen" ref={navBarRef}>
        <div className="logo">
          <img src="../../src/assets/shared/logo.svg" alt="Logo" />
        </div>
        <div className="menu">
          <button className="openMenu" onClick={handleMobileNav}>
            <img src="../../src/assets/shared/icon-hamburger.svg" alt="Logo" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mobileMenuLinks">
          <button onClick={handleMobileNav} className="closeMenuBtn">
            <img src="../../src/assets/shared/icon-close.svg" alt="Logo" />
          </button>
          <div className="home">
            <Link to="/">
              <span>00</span>Home
            </Link>
          </div>
          <div className="destination">
            <Link to="/destination">
              <span>01</span>Destination
            </Link>
          </div>
          <div className="crew">
            <Link to="/crew">
              <span>02</span>Crew
            </Link>
          </div>
          <div className="technology">
            <Link to="/technology">
              <span>03</span>Technology
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
