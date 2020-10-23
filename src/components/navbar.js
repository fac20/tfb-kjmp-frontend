import React from "react";
import NavList from "./../components/navList";
import { Link } from "react-router-dom";

export function NavBarSide() {
	return (
		<>
			<div className="sticky">
				<section className="navbar">
					<NavList />
				</section>
			</div>
		</>
	);
}

export function NavBarTitle() {
	return (
		<>
			<section className="navbartitle">
				<Link to="/" className="h1link">
					<h1 className="title">THE BLACK QUEER TRAVEL GUIDE</h1>
				</Link>
			</section>
		</>
	);
}
