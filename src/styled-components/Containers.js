import styled from "styled-components";

export const TextContainer = styled.div`
	/* border: solid black 3px; */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 30vw;
	@media all and (max-width: 768px) {
		width: 60vw;
	}
`;

export const Container = styled.div`
	/* border: solid green 3px; */
	display: flex;
	justify-content: ${props => props.justify};
	align-items: center;
	flex-wrap: wrap;
	width: ${props => props.width || "79vw"};
	height: ${props => props.height};
	background: ${props => props.back};
	background-image: ${props => props.url};
	background-size: ${props => props.size};
	padding-top: ${props => props.padTop};
	border: ${props => props.border};
	border-radius: ${props => props.radius};
	flex-direction: ${props => props.direction};
	color: ${props => props.color || "black"};
`;

export const DivContainer = styled.div`
	display: flex;
	justify-content: ${props => props.justify};
	left: ${props => props.left || "none"};
	align-items: center;
	flex-direction: ${props => props.direction || "column"};
	width: ${props => props.width};
	max-width: ${props => props.maxWidth};
	height: ${props => props.height};
	margin: ${props => props.margin || "1rem"};
	/* border: red solid 3px; */
	background: ${props => props.back || "#ffffff"};
	box-shadow: ${props => props.shadow || "7px 10px #000000"};
	color: ${props => props.color || "black"};
	font-size: ${props => props.fontSize};


	@media screen and (max-width: 768px){
	width: auto;
	margin: 2rem 5%;
`;

export const FlexCont = styled.div`
	/* border: solid red 3px; */
	display: flex;
	justify-content: ${props => props.justify};
	align-items: center;
	flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-direction: ${props => props.direction};
	width: ${props => props.width};
	min-height: ${props => props.height};
	background: ${props => props.back};
	padding-top: ${props => props.padTop};
	padding: 0.5rem;
	border: ${props => props.border};
	border-radius: ${props => props.radius};
	overflow: ${props => props.overflow};
	box-shadow: 7px 10px #000000;
	margin: 2rem;

	@media all and (max-width: 768px) {
		width: ${props => props.media};
	}
`;

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: 65%;
	@media screen and (max-width: 1200px) {
		grid-template-columns: 1fr;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const TagContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
	width: ${props => props.width};
`;

// Container hierarchy:
// container
// div container
// text container
