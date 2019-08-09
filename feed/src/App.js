import React from "react";
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  return (
    <div id="outer-container">
      <div>
        <SideBar />
      </div>
      <div id="page-wrap">
        <div className="feeder-post">
          <div>username</div>
          <div>feed data</div>
        </div>
        <div className="feeder-post">tweet</div>
        <div className="feeder-post">tweet</div>
      </div>
    </div>
  );
}

export default App;
