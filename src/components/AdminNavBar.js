import React from "react";

import Button from "./../styled-components/Button";
import { ColumnResponsive } from "./../styled-components/Responsive";
import { Container } from "./../styled-components/Containers";

export default function AdminNavBar({ setPage }) {
	return (
		<Container border="solid black 1px" radius="20px">
			<ColumnResponsive>
				<Button background="transparent" onClick={() => setPage("experiences")}>
					Experiences
				</Button>
				<Button background="transparent" onClick={() => setPage("thingstodo")}>
					Things To Do
				</Button>
			</ColumnResponsive>
		</Container>
	);
}
