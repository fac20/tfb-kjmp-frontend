import React from "react";
import LandingPage from "./pages/landing.js";
import Businesses from "./pages/businesses.js";
import ThingsToDo from "./pages/thingsToDo.js";
import Experiences from "./pages/experiences.js";
import Laws from "./pages/laws.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/businesses" component={Businesses} />
					<Route path="/thingstodo" component={ThingsToDo} />
					<Route path="/experiences" component={Experiences} />
					<Route path="/laws" component={Laws} />
					<Route path="/" component={LandingPage} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
