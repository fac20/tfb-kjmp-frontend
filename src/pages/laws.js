import React from "react";
import Card from "./../components/experiencecard";
import { Container } from "./../styled-components/Containers";
// import NavBar from "./../components/navbar";

export default function Laws() {
	return (
		<>
			{/* <NavBar /> */}
			<Container justify="center">
				<Card src="none" />
				<Card />
				<Card />
				<Card />
			</Container>
		</>
	);
}
