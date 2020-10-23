import React from "react";
import Card from "./../components/experiencecard";
import { Container } from "./../styled-components/Containers";
// import NavBar from "./../components/navbar";
export default function Experiences() {
	return (
		<>
			{/* <NavBar /> */}
			<Container justify="center">
				<Card src="https://i.pinimg.com/564x/be/f0/b1/bef0b1f4e03923a74be689bb5ff413c6.jpg" />
				<Card src="https://i.pinimg.com/564x/be/f0/b1/bef0b1f4e03923a74be689bb5ff413c6.jpg" />
				<Card src="https://i.pinimg.com/564x/be/f0/b1/bef0b1f4e03923a74be689bb5ff413c6.jpg" />
				<Card src="https://i.pinimg.com/564x/be/f0/b1/bef0b1f4e03923a74be689bb5ff413c6.jpg" />
			</Container>
		</>
	);
}
