import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Demo from "./Pages/Demo";
import UnitList from "./Pages/UnitList";
import NewUnit from "./Pages/NewUnit";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload. Test2
				</p>
				{/* <Demo /> */}
				{/* <UnitList /> */}
				<NewUnit />
			</header>
		</div>
	);
}

export default App;
