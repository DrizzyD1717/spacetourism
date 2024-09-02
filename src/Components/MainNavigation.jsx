import { Link } from "react-router-dom";
import "./mainNavigation.css";

const MainNavigation = () => {
  return (
    <div className="mainNavigation">
      <div className="logoAndLine">
        <img src="../src/assets/shared/logo.svg" alt="Logo" />
        <div className="line"></div>
      </div>
      <div className="navigation">
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
    </div>
  );
};

export default MainNavigation;
