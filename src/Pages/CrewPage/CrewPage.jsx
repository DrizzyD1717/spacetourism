import { useState } from "react";
import { totalDestinations } from "../../allDestinations";
import "./crewPage.css";

const CrewPage = () => {
  const [specificCrew, setSpecificCrew] = useState("Douglas Hurley");
  const handleSpecificCrew = (e) => {
    setSpecificCrew(e.target.value);
  };

  return (
    <div className="crewPage">
      <div className="crewPageOverall">
        <div className="header">
          <span>01</span>
          <h1>Meet Your Crew</h1>
        </div>
        {totalDestinations.crew.map((destination) => {
          const { name, images, role, bio } = destination;
          if (specificCrew == name) {
            return (
              <div className="crewContentsContainer" key={name}>
                <div className="left">
                  <h1>{role.toUpperCase()}</h1>
                  <h2>{name.toUpperCase()}</h2>
                  <p>{bio}</p>
                  <div className="radioBtn">
                    <button
                      type="radio"
                      name="crew"
                      value="Douglas Hurley"
                      onClick={handleSpecificCrew}
                      className={specificCrew == name ? "white" : ""}
                    ></button>
                    <button
                      type="radio"
                      name="crew"
                      value="Mark Shuttleworth"
                      onClick={handleSpecificCrew}
                      className={specificCrew == name ? "white" : ""}
                    ></button>
                    <button
                      type="radio"
                      name="crew"
                      value="Victor Glover"
                      onClick={handleSpecificCrew}
                      className={specificCrew == name ? "white" : ""}
                    ></button>
                    <button
                      type="radio"
                      name="crew"
                      value="Anousheh Ansari"
                      onClick={handleSpecificCrew}
                      className={specificCrew == name ? "white" : ""}
                    ></button>
                  </div>
                </div>
                <div className="right">
                  <img src={images.webp} alt="" />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CrewPage;
