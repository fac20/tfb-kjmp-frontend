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
				back="hsl(349, 43%, 40%)"
				width="100%"
				height="100vh"
				direction="column"
				color="hsl(349, 43%, 40%)"
				size="cover">
				<div className="aboutus">
					<h2 className="aboutusheading">ABOUT US</h2>
					<img src={teamimg} alt="illustration of team" className="teamimg" />
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
			<Container
				justify="center"
				align="center"
				width="100%"
				display="block"
				direction="column"
				size="cover">
				<div className="aboutbrand">
					<h2>ABOUT BLACK QUEER TRAVEL GUIDE </h2>
					<div className="textabout">
						<p>
							Black Queer Travel Guide is a digital resource prioritising Black
							queer travellers and our safety as we navigate the world, through
							offering experiences, advice and information on destinations
							around the globe. You have to consider your personal safety and
							the safety of those you’re travelling with, particularly if you’re
							visibly queer, how comfortable you feel travelling with your
							partner(s) and more. We have to assess and reassess our
							surroundings and where we visit constantly. Our resources are
							limited and they often only pertain to ‘Black travel’ or ‘LGBTQ+
							travel’, meaning that we have to forge something for ourselves in
							the middle - or simply google ‘LGBTQ+ rights in [insert country]’.
							It is simply not enough and BQTG aims to contribute towards
							filling those gaps.
						</p>
						<p>
							As a registered charitable company (CIC), BQTG is committed to the
							Black queer communities it will be serving and as a result,
							profits made will be going straight into our services and
							supporting local queer charities and organisations around the
							globe.
						</p>
					</div>
					<div className="textabout">
						<p>
							For four months, we spoke to over 20 Black queer activists and
							community organisers around the world, from Jamaica to Papua New
							Guinea to Nigeria, finding out about the daily precautions they
							take in their countries, the grassroots work they're doing in
							their communities and how they travel and navigate life. This
							research has informed the building of the resources and will
							continue to shape how we grow.
						</p>
						<p>
							Through the afore-mentioned research carried with Black queer
							activists globally, it’s also clear how much support is needed by
							people who have been arrested, harassed by the public and police
							and as a result, we would also seek to support these individuals
							through financial support for legal services and representation.
						</p>
						<p>
							We’re aiming to create a hub for Black queer activists to be able
							to share resources, advice and more, alongside creating a
							conference for Black queer creatives and activists to be about to
							share their work, research, resources and practices. Eventually,
							we hope to run retreats catered specifically for Black queer
							people, with free retreats for younger Black queer people.
						</p>
					</div>
				</div>
				<div className="aboutbrand">
					<h2>THE CREATOR </h2>
					<div className="textabout">
						<h3>PAULA AKPAN </h3>
						<br></br>
						<p>
							Paula Akpan is a journalist, historian and public speaker. A
							sociology graduate from the University of Nottingham, her work
							mainly focuses on blackness, queerness, and social politics and
							she regularly writes for a variety of publications including
							Vogue, Teen Vogue, The Independent, Stylist, VICE, i-D, Bustle,
							Time Out London and more.
						</p>
						<p>
							She’s also a published essayist, having written an essay on Black
							women and community in Slay In Your Lane’s anthology Loud Black
							Girls (published by 4th Estate Books at HarperCollins, 1 Oct 2020)
							and another on Black British Lesbians and their relationship with
							the UK Black Women’s movement for the forthcoming Queer Bible
							anthology (published by HQ at HarperCollins, 10 Jun 2021).
						</p>
						<p>
							Paula is currently a fully-funded Masters student at Goldsmiths,
							studying Black British History with an interest in mapping out the
							lives and activism of Black British lesbians and queer women
							during the 70s and 80s.
						</p>
					</div>
				</div>
			</Container>
			<div className="aboutbrand">
				<h2>THE DEVELOPERS </h2>
				<div className="textabout">
					<h3>
						<a
							href="https://github.com/ephieo"
							target="_blank"
							rel="noopener noreferrer">
							EPHIE
						</a>
						|
					</h3>

					<h3>
						<a
							href="https://github.com/jhart5"
							target="_blank"
							rel="noopener noreferrer">
							JOSH
						</a>
						|
					</h3>
					<h3>
						<a
							href="https://github.com/netceer"
							target="_blank"
							rel="noopener noreferrer">
							TERRENCE
						</a>
						|
					</h3>
					<h3>
						<a
							href="https://github.com/trishtracking"
							target="_blank"
							rel="noopener noreferrer">
							TRISH
						</a>
					</h3>
					<br></br>
					<p>
						The developer team built this site as part of{" "}
						<a
							href="https://www.foundersandcoders.com/tech-for-better/"
							target="_blank"
							rel="noopener noreferrer">
							Tech for Better
						</a>
						, a programme for founders, social entrepreneurs and charity workers
						to learn Product Management by working with a Product Team to
						design, build and test a new socially beneficial digital service.
					</p>
				</div>
			</div>
		</>
	);
}
