import React, { useState } from "react";

import { Container } from "../../styled-components/Containers";
import { RowResponsive } from "../../styled-components/Responsive";
import { NavBarTitle } from "../../components/navbar";
import ExperiencesAdmin from "../../components/AdminExperiences";
import ThingsToDoAdmin from "../../components/AdminThingsToDo";
import { DivContainer } from "../../styled-components/Containers";
import AdminNavBar from "../../components/AdminNavBar";

export default function AdminDashboard() {
	const [page, setPage] = useState("experiences");

	const renderPage = page => {
		if (page === "experiences") return <ExperiencesAdmin />;
		if (page === "thingstodo") return <ThingsToDoAdmin />;
	};

	return (
		<div class="admindash">
			<NavBarTitle />
			<RowResponsive>
				<AdminNavBar setPage={setPage} />
				<Container justify="center" align="flex-start">
					<DivContainer>{renderPage(page)}</DivContainer>
				</Container>
			</RowResponsive>
		</div>
	);
}
