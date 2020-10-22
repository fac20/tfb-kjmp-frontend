import React from "react";
import NavList from "./../components/navList";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<section className="navbar">
				<Link to="/" className="h1link">
					<h1>THE BLACK QUEER TRAVEL GUIDE</h1>
				</Link>
				<NavList />
			</section>
		</>
	);
}
