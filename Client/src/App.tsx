import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Demo from "./Pages/Demo";
import UnitList from "./Pages/UnitList";
import NewUnit from "./Pages/NewUnit";
import { Assignment } from "./Pages/Assignment";
import ShipDesigner from "./Pages/ShipDesigner";

function App() {
	return (
		<div className="App">
				{/* <Demo /> */}
				{/* <UnitList /> */}
				{/* <NewUnit /> */}
			{/* <Assignment /> */}
			<ShipDesigner />
		</div>
	);
}

export default App;
