import React from "react";
import LandingPage from "./pages/landing.js";
import Businesses from "./pages/businesses.js";
import LoginPage from "./pages/login.js";
import ThingsToDo from "./pages/thingsToDo.js";
import Experiences from "./pages/experiences.js";
import Laws from "./pages/laws.js";
import Countries from "./pages/countries";
import Continents from "./pages/continents";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/continents/:name/:id/laws" component={Laws} />
					<Route exact path="/continents" component={Continents} />{" "}
					{/* map of world */}
					<Route
						path="/continents/:name/:id/thingstodo"
						component={ThingsToDo}
					/>
					<Route
						path="/continents/:name/:id/businesses"
						component={Businesses}
					/>
					<Route
						path="/continents/:name/:id/experiences"
						component={Experiences}
					/>
					<Route path="/continents/:name" children={<Countries />} />
					<Route exact path="/" component={LandingPage} />
					<Route path="/admin/login" component={LoginPage} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
