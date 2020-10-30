import React from "react";

import { Container } from "./../styled-components/Containers";
import LoginForm from "../components/AdminLoginForm";
import { RowResponsive } from "./../styled-components/Responsive";
import { NavBarTitle } from "./../components/navbar";

export default function LoginPage() {
	return (
		<>
			<NavBarTitle />
			<RowResponsive>
				<Container justify="center" align="flex-start">
					<LoginForm />
				</Container>
			</RowResponsive>
		</>
	);
}
