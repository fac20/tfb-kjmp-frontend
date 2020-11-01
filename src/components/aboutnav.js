import React from "react";
import { Link } from "react-router-dom";

export default function AboutNav() {
	return (
		<div className="aboutnav">
			<Link to="/">
				<h1 className="aboutnavtext">THE BLACK QUEER TRAVEL GUIDE</h1>
			</Link>
		</div>
	);
}
