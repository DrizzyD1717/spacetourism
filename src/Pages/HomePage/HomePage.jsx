import { Link } from "react-router-dom";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="space">Space</div>
      <div className="hiddenText">
        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link to="/destination">Explore</Link>
    </div>
  );
};

export default HomePage;
