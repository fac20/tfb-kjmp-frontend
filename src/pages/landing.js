import React from "react";
import logo from "./../images/logo.svg";
import { Container } from "./../styled-components/Containers";
import { Link } from "react-router-dom";
import Button from "../styled-components/Button";
import Img from "./../styled-components/Img";

export default function LandingPage() {
	return (
		<>
			<Container justify="center">
				<Link to="/continents">
					<Img src={logo} width="55vw" />
				</Link>
			</Container>
			<footer>
				<Link to="/admin/login">Admin</Link>
			</footer>
		</>
	);
}
