import { useState } from "react";
import "./technologyPage.css";
import { totalDestinations } from "../../allDestinations";

const TechnologyPage = () => {
  const [technologyDisplay, setTechnologyDisplay] = useState(1);

  const handleTechnologyDisplay = (e) => {
    setTechnologyDisplay(e.target.textContent);
  };

  return (
    <div className="technologyPage">
      <div className="technologyPageOverall">
        <div className="header">
          <span>03</span>
          <h1>SPACE LAUNCH 101</h1>
        </div>
        <div className="technologyPageContent">
          {totalDestinations.technology.map((technology, index) => {
            const { name, images, description } = technology;
            const id = index + 1;
            if (technologyDisplay == id) {
              return (
                <>
                  <div className="left" key={name}>
                    <div className="buttons">
                      <button
                        className={id == technologyDisplay + 1 ? "white" : ""}
                        onClick={handleTechnologyDisplay}
                      >
                        1
                      </button>
                      <button
                        className={id == technologyDisplay + 1 ? "white" : ""}
                        onClick={handleTechnologyDisplay}
                      >
                        2
                      </button>
                      <button
                        className={id == technologyDisplay + 1 ? "white" : ""}
                        onClick={handleTechnologyDisplay}
                      >
                        3
                      </button>
                    </div>
                    <div className="content">
                      <h2>THE TERMINOLOGY</h2>
                      <h3>{name.toUpperCase()}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <div className="right">
                    <img src={images.portrait} alt={name} />
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
