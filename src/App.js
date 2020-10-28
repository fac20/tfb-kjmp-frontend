import React, { createContext, useContext, useState } from "react";
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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ROUTES from "./routes";

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

function App() {
	const [countryName, setCountryName] = useState("");
	const [searchString, setSearchString] = useState("");

	return (
		<AppContext.Provider value={{ countryName, searchString, setSearchString }}>
			<Router>
				<Switch>
					<Route path="/continents/:name/:id/laws">
						<Laws countryName={countryName} setCountryName={setCountryName} />
					</Route>

					<Route exact path="/continents">
						<Continents />
					</Route>

					<Route path="/continents/:name/:id/experiences/shareexperience">
						<ExperiencesForm
							countryName={countryName}
							setCountryName={setCountryName}
						/>
					</Route>

					<Route path="/continents/:name/:id/thingstodo">
						{" "}
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

					<Route path={ROUTES.COUNTRIES}>
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
		</AppContext.Provider>
	);
}

export default App;
