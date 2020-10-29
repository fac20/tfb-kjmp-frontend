import React from "react";
import LandingPage from "./pages/landing.js";
import Businesses from "./pages/businesses.js";
import LoginPage from "./pages/login.js";
import ThingsToDo from "./pages/thingsToDo.js";
import ExperienceContent from "./pages/experiences.js";
import Laws from "./pages/laws.js";
import Countries from "./pages/countries";
import Continents from "./pages/continents";
import AdminDashboard from "./pages/admin/adminDashboard";
import ExperiencesForm from "./components/ExperiencesForm";
import ThingsToDoForm from "./components/ThingsToDoForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	const [countryName, setCountryName] = React.useState("");

	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/continents">
						<Continents />
					</Route>
					<Route path="/continents/:name/:id/thingstodo/sharethingstodo">
						<ThingsToDoForm
							countryName={countryName}
							setCountryName={setCountryName}
						/>
					</Route>
					<Route path="/continents/:name/:id/experiences/shareexperience">
						<ExperiencesForm
							countryName={countryName}
							setCountryName={setCountryName}
						/>
					</Route>
					<Route path="/continents/:name/:id/laws">
						<Laws countryName={countryName} setCountryName={setCountryName} />
					</Route>
					<Route path="/continents/:name/:id/thingstodo">
						<ThingsToDo
							countryName={countryName}
							setCountryName={setCountryName}
						/>
					</Route>

					<Route path="/continents/:name/:id/businesses">
						<Businesses
							countryName={countryName}
							setCountryName={setCountryName}
						/>
					</Route>

					<Route path="/continents/:name/:id/experiences">
						<ExperienceContent
							countryName={countryName}
							setCountryName={setCountryName}
						/>
					</Route>

					<Route path="/continents/:name">
						<Countries />
					</Route>

					<Route path="/test">
						<ExperiencesForm
							countryName={countryName}
							setCountryName={setCountryName}
						/>
					</Route>

					<Route exact path="/">
						<LandingPage />
					</Route>

					{/* Admin routes  */}

					<Route exact path="/admin">
						<AdminDashboard />
					</Route>

					<Route path="/admin/login">
						<LoginPage />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
