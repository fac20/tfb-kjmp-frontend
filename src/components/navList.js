import React from "react";
import Button from "./../styled-components/Button";
import List from "./../styled-components/List";
import { Link, useRouteMatch, useLocation } from "react-router-dom";

export default function NavList() {
	const location = useLocation();
	const path = location.pathname.split("/");
	path.pop();
	let joinPath = path.join("/");
	console.log(joinPath);

	const { name, id } = useParams();

	return (
		<>
			<ul>
				<Link to={getLawsLink(name, id)}>
					<List>
						<Button>LAWS</Button>
					</List>
				</Link>
				<Link to={`${joinPath}/thingstodo`}>
					<List>
						<Button>THINGS TO DO</Button>
					</List>
				</Link>
				<Link to={`${joinPath}/experiences`}>
					<List>
						<Button>EXPERIENCES</Button>
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
