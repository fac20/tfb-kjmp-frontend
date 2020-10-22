import React from "react";
import Card from "./../components/card";
import { Container } from "./../styled-components/Containers";
import NavBar from "./../components/navbar";

export default function Businesses() {
	return (
		<>
			<NavBar />
			<Container justify="center">
				<Card src="https://i.pinimg.com/564x/d2/2a/61/d22a61cdd29f2958c2c61e535569a3b3.jpg" />
				<Card src="https://i.pinimg.com/564x/3d/6e/25/3d6e25e2a734c342f50a7e484048dac9.jpg" />
				<Card src="https://i.pinimg.com/564x/55/5b/6d/555b6d98584aa03364a5b27febe58849.jpg" />
				<Card src="https://i.pinimg.com/564x/79/52/87/7952875b9c463c473bc621c54bad0e01.jpg" />
			</Container>
		</>
	);
}
