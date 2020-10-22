import React from "react";
import Button from "./../styled-components/Button";
import ListTag from "./../styled-components/List";
import { Link } from "react-router-dom";

export default function NavList() {
	return (
		<>
			<ul>
				<Link to="/laws">
					<ListTag>
						<Button>LAWS</Button>
					</ListTag>
				</Link>
				<Link to="/thingstodo">
					<ListTag>
						<Button>THINGS TO DO</Button>
					</ListTag>
				</Link>
				<Link to="/experiences">
					<ListTag>
						<Button>EXPERIENCES</Button>
					</ListTag>
				</Link>
				<Link to="/businesses">
					<ListTag>
						<Button>BUSINESSES</Button>
					</ListTag>
				</Link>
			</ul>
		</>
	);
}
