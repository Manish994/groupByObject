import React from "react";
import "./App.css";
// import NormalGroup from "./normalGroupBy/stack";
import NormalGroupBY from "./normalGroupBy";
import AdvancedGroup from "./advancedGroupByFunction";

function App() {
  return (
    <div className="App">
      {/* <NormalGroup></NormalGroup> */}
      {/* <NormalGroupBY></NormalGroupBY> */}
      <AdvancedGroup></AdvancedGroup>
    </div>
  );
}

export default App;
