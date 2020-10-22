import React from "react";
import Card from "./../components/card";
import { Container } from "./../styled-components/Containers";
import NavBar from "./../components/navbar";

export default function ThingsToDo() {
	return (
		<>
			<NavBar />
			<Container justify="center">
				<Card src="https://i.pinimg.com/564x/cd/91/fd/cd91fd565a1725fde927d0328ed3aafc.jpg" />
				<Card src="https://i.pinimg.com/564x/8b/aa/b8/8baab88372ad27a36bffba492c131f39.jpg" />
				<Card src="https://i.pinimg.com/564x/dc/e8/72/dce8724d9397650b002633f8ecdc082b.jpg" />
				<Card src="https://i.pinimg.com/564x/20/13/bc/2013bc454ca00461b2e9ffabcada3ea3.jpg" />
			</Container>
		</>
	);
}
