import React from "react";
import Button from "./../styled-components/Button";
import ListTag from "./../styled-components/List";
import { Link, useRouteMatch, useLocation } from "react-router-dom";

export default function NavList() {
	const location = useLocation();
	const path = location.pathname.split("/");
	path.pop();
	let joinPath = path.join("/");

	console.log(joinPath);
	return (
		<>
			<ul>
				<Link to={`${joinPath}/laws`}>
					<ListTag>
						<Button>LAWS</Button>
					</ListTag>
				</Link>
				<Link to={`${joinPath}/thingstodo`}>
					<ListTag>
						<Button>THINGS TO DO</Button>
					</ListTag>
				</Link>
				<Link to={`${joinPath}/experiences`}>
					<ListTag>
						<Button>EXPERIENCES</Button>
					</ListTag>
				</Link>
				<Link to={`${joinPath}/businesses`}>
					<ListTag>
						<Button>BUSINESSES</Button>
					</ListTag>
				</Link>
			</ul>
		</>
	);
}
