import React from "react";

import { Container } from "./../styled-components/Containers";
import AboutNav from "../components/aboutnav";
import HowToCard from "./../components/howtocards";
import teamimg from "./../images/team.png";

export default function About() {
	return (
		<>
			<AboutNav />
			<Container
				justify="center"
				align="center"
				back="hsl(348, 33%, 76%)"
				width="100vw"
				height="100vh"
				direction="column"
				color="hsl(348, 33%, 76%)"
				size="cover">
				<div className="aboutbrand">
					<h2 className="aboutus">ABOUT US</h2>
					<img
						src={teamimg}
						alt="svg img of team illustration"
						className="teamimg"
					/>
				</div>
			</Container>
			<div className="howtousetitle">
				<h2>HOW TO USE? </h2>
			</div>
			<div className="howtouse">
				<HowToCard
					stepnum="STEP 1:"
					step=" Search for the continent you're interested In"></HowToCard>
				<HowToCard
					stepnum="STEP 2:"
					step=" Search for the country you're interested In"></HowToCard>
				<HowToCard
					stepnum="STEP 3:"
					step=" Click to see what legislation is like in that chosen country"></HowToCard>
				<HowToCard
					stepnum="STEP 4:"
					step=" Click to see how other people have experienced that country"></HowToCard>
				<HowToCard
					stepnum="STEP 5:"
					step=" Click to see what things are availible to do in that city"></HowToCard>
			</div>
			<div className="aboutbrand2">
				<h2>THE BRAND </h2>
				<div className="textabout">
					<p>
						What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
						printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type
						specimen book. It has survived not only five centuries, but also the
						leap into electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of Letraset sheets
						containing Lorem Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including versions of Lorem
					</p>
				</div>
			</div>
			<div className="aboutbrand2">
				<h2>THE CREATOR </h2>
				<div className="textabout">
					<h3>PAULA AKPAN </h3>
					<p>
						What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
						printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type
						specimen book. It has survived not only five centuries, but also the
					</p>
				</div>
			</div>
			<div className="aboutbrand2">
				<h2>THE DEVELOPERS </h2>
				<div className="textabout">
					<h3>TRISH </h3>
					<h3>TERRENCE </h3>
					<h3>JOSH </h3>
					<h3>EPHIE </h3>
					<p>
						What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
						printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type
						specimen book. It has survived not only five centuries, but also the
					</p>
				</div>
			</div>
		</>
	);
}
