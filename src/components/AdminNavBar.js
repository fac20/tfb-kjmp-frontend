import { ColumnResponsive } from "./../styled-components/Responsive";
import { Container } from "./../styled-components/Containers";
// import { Link } from "react-router-dom";
import Button from "./../styled-components/Button";
import React from "react";

export default function AdminNavBar({ setPage }) {
	function changePage(name) {
		if (name === "thingstodo") {
			console.log("ttd:", "thingstodo");
			setPage("thingstodo");
		} else if (name === "businesses") {
			console.log("bus:", "business");
			setPage("businesses");
		} else {
			console.log("experiences");
			setPage("experiences");
		}
	}
	return (
		<Container border="solid black 1px" radius="20px">
			<ColumnResponsive>
				<Button background="transparent" onClick={changePage("experiences")}>
					Experiences
				</Button>
				<Button background="transparent" onClick={changePage("thingstodo")}>
					Things To Do
				</Button>
				<Button background="transparent" onClick={changePage("businesses")}>
					Businesses
				</Button>
			</ColumnResponsive>
		</Container>
	);
}
