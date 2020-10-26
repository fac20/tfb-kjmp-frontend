import React from "react";
import LandingPage from "./pages/landing.js";
import Businesses from "./pages/businesses.js";
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
					<Route path="/businesses" component={Businesses} />
					<Route path="/thingstodo" component={ThingsToDo} />
					<Route path="/experiences" component={Experiences} />
					<Route path="/laws" component={Laws} />
					<Route path="/countries/:id/laws" component={Laws} />

					<Route path="/continents/:name/:id/laws" component={Laws} />
					<Route
						path="/continents/:name/:id/thingstodo"
						component={ThingsToDo}
					/>
					<Route
						path="/continents/:name/:id/businesses"
						component={Businesses}
					/>

					<Route path="/countries" component={Countries} />
					<Route path="/continents" component={Continents} />
					<Route exact path="/" component={LandingPage} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
