import React from "react";

export default function HowToCard(props) {
	return (
		<>
			<div className="howtocard">
				<h1>{props.stepnum}</h1>
				<p> {props.step}</p>
			</div>
		</>
	);
}
