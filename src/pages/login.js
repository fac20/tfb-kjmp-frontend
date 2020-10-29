import React, { useEffect, useState } from "react";
import { Container } from "./../styled-components/Containers";
import LoginForm from "../components/AdminLoginForm";
import { RowResponsive } from "./../styled-components/Responsive";
import { NavBarSide, NavBarTitle } from "./../components/navbar";
// import { useParams } from "react-router-dom";

export default function LoginPage() {
	return (
		<>
			<NavBarTitle />
			<RowResponsive>
				<NavBarSide />
				<Container justify="center" align="flex-start">
					<LoginForm />
				</Container>
			</RowResponsive>
		</>
	);
}
