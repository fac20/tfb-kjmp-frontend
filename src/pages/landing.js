import React from "react";
import logo from "./../images/logo.png";
import { Container } from "./../styled-components/Containers";
import { Link } from "react-router-dom";

import Img from "./../styled-components/Img";
export default function LandingPage() {
	return (
		<>
			<Container justify="center">
				<Link to="/laws">
					<Img src={logo} width="55vw" />
				</Link>
			</Container>
		</>
	);
}
