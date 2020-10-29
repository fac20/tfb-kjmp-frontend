import React, { useState } from "react";
import { Container } from "../../styled-components/Containers";
import { RowResponsive } from "../../styled-components/Responsive";
import { NavBarTitle } from "../../components/navbar";
import ExperiencesAdmin from "../../components/AdminExperiences";

import { DivContainer } from "../../styled-components/Containers";

import AdminNavBar from "../../components/AdminNavBar";

export default function AdminDashboard() {
	const [page, setPage] = useState([""]);

	console.log(page);

	return (
		<div class="admindash">
			<NavBarTitle />
			<RowResponsive>
				<AdminNavBar setPage={setPage} />
				<Container justify="center" align="flex-start">
					<DivContainer>
						<ExperiencesAdmin />
						{/* {page === "thingstodo" ? <ThingsToDoAdmin /> : null} */}
					</DivContainer>
				</Container>
			</RowResponsive>
		</div>
	);
}
