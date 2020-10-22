import React from "react";
import Card from "./../components/card";
import { Container } from "./../styled-components/Containers";
import NavBar from "./../components/navbar";

export default function Laws() {
	return (
		<>
			<NavBar />
			<Container justify="center">
				<Card src="none" />
				<Card />
				<Card />
				<Card />
			</Container>
		</>
	);
}
