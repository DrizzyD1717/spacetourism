import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import CrewPage from "./Pages/CrewPage/CrewPage";
import DestinationPage from "./Pages/DestinationPage/DestinationPage";
import TechnologyPage from "./Pages/TechnologyPage/TechnologyPage";
import MainNavigation from "./Components/MainNavigation";
import MobileNavigation from "./Components/MobileNavigation/MobileNavigation";

function App() {
  return (
    <div className="mainPageContainer">
      <BrowserRouter>
        <MainNavigation></MainNavigation>
        <MobileNavigation></MobileNavigation>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/destination"
            element={<DestinationPage></DestinationPage>}
          ></Route>
          <Route path="/crew" element={<CrewPage></CrewPage>}></Route>
          <Route
            path="/technology"
            element={<TechnologyPage></TechnologyPage>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
