import React from "react";
import { Container } from "./../styled-components/Containers";
import Img from "./../styled-components/Img";
import world from "./../images/world-map.svg";
import { Link } from "react-router-dom";
export default function Continents() {
	return (
		<>
			<Link to="/laws">
				<Container justify="center" padTop="5rem">
					<Img alt="" src={world} width="80vw" />
				</Container>
			</Link>
		</>
	);
}
