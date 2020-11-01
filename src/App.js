import React from "react";
import { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

const AppContext = createContext();

const useAppContext = () => useContext(AppContext);

function App() {
	const [countryName, setCountryName] = useState("");

	return (
		<AppContext.Provider value={{ countryName, setCountryName }}>
			<Router>
				<Switch>
					<Route exact path="/continents">
						<Continents />
					</Route>
					<Route path="/continents/:name/:id/thingstodo/sharethingstodo">
						<ThingsToDoForm />
					</Route>
					<Route path="/continents/:name/:id/experiences/shareexperience">
						<ExperiencesForm />
					</Route>
					<Route path="/continents/:name/:id/laws">
						<Laws />
					</Route>
					<Route path="/continents/:name/:id/thingstodo">
						<ThingsToDo />
					</Route>
					<Route path="/continents/:name/:id/businesses">
						<Businesses />
					</Route>
					<Route path="/continents/:name/:id/experiences">
						<ExperienceContent />
					</Route>

					<Route path="/continents/:name">
						<Countries />
					</Route>
					<Route exact path="/">
						<LandingPage />
					</Route>
					<Route exact path="/admin/login">
						<LoginPage />
					</Route>
					<Route exact path="/admin/">
						<AdminDashboard />
					</Route>
				</Switch>
			</Router>
		</AppContext.Provider>
	);
}

export { App, useAppContext };
