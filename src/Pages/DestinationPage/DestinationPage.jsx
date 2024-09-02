import { useState } from "react";
import "./destinationPage.css";
import { totalDestinations } from "../../allDestinations";

const DestinationPage = () => {
  const [specificDestination, setSpecificDestination] = useState("Moon");

  const handleSpecificDestination = (e) => {
    setSpecificDestination(e.target.textContent);
  };

  return (
    <div className="destinationPage">
      <div className="contentsOverall">
        <div className="header">
          <span>01</span>
          <h1>Pick Your Destination</h1>
        </div>
        {/* <div className="destinationNavigation">
          <button onClick={handleSpecificDestination}>Moon</button>
          <button onClick={handleSpecificDestination}>Mars</button>
          <button onClick={handleSpecificDestination}>Europa</button>
          <button onClick={handleSpecificDestination}>Titan</button>
        </div> */}
        {totalDestinations.destinations.map((destination) => {
          const { name, description, travel, distance, images } = destination;
          const id = name;
          if (specificDestination == id) {
            return (
              <div key={id} className="destinationContentOverall">
                <div className="imageContainer">
                  <img src={images.webp} alt="Image of the moon" />
                </div>
                <div className="destinationContent">
                  <div className="destinationNavigation">
                    <button onClick={handleSpecificDestination}>Moon</button>
                    <button onClick={handleSpecificDestination}>Mars</button>
                    <button onClick={handleSpecificDestination}>Europa</button>
                    <button onClick={handleSpecificDestination}>Titan</button>
                  </div>
                  <div className="name">
                    <h1>{name}</h1>
                  </div>
                  <div className="description">
                    <p>{description}</p>
                  </div>
                  <div className="line"></div>
                  <div className="distanceAndTime">
                    <div className="distance">
                      <p className="title">AVG DISTANCE</p>
                      <p className="actualDistance">{distance}</p>
                    </div>
                    <div className="time">
                      <p className="title">EST. Travel Time</p>
                      <p className="actualDistance">{travel}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
        <div className="differentDestinations"></div>
      </div>
    </div>
  );
};

export default DestinationPage;

// import "./destinationPage.css";

// const DestinationPage = () => {
//   return (
//     <div className="destinationPage">
//       <div className="contentsOverall">
//         <div className="header">
//           <span>01</span>
//           <h1>Pick Your Destination</h1>
//         </div>
//         <div className="differentDestinations"></div>
//       </div>
//     </div>
//   );
// };

// export default DestinationPage;
