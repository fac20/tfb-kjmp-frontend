import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import Button from "./../styled-components/Button";
import List from "./../styled-components/List";
import { useAppContext } from "../App";

export default function NavList() {
	const location = useLocation();
	const path = location.pathname.split("/");
	path.pop();
	let joinPath = path.join("/");
	const { countryName } = useAppContext();
	return (
		<>
			<ul>
				<Link to={`${joinPath}/laws`}>
					<List>
						<Button
							margin="0.9rem 0"
							medialeft="0.9rem">{`ABOUT ${countryName.toUpperCase()}`}</Button>
					</List>
				</Link>
				<Link to={`${joinPath}/thingstodo`}>
					<List>
						<Button margin="0.9rem 0" medialeft="0.9rem">
							THINGS TO DO
						</Button>
					</List>
				</Link>
				<Link to={`${joinPath}/experiences`}>
					<List>
						<Button margin="0.9rem 0" medialeft="0.9rem">
							EXPERIENCES
						</Button>
					</List>
				</Link>
				{/* <Link to={`${joinPath}/businesses`}>
					<List>
						<Button>BUSINESSES</Button>
					</List>
				</Link> */}
			</ul>
		</>
	);
}

const UL = styled.ul`
	@media all and (max-width: 768px) {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
`;
