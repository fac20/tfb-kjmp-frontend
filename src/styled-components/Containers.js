import styled from "styled-components";

export const TextContainer = styled.div`
	/* border: solid black 3px; */
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30vw;

	@media all and (max-width: 700px) {
		width: 60vw;
	}
`;

export const Container = styled.div`
	/* border: solid red 3px; */
	display: flex;
	justify-content: ${props => props.justify};
	align-items: center;
	flex-wrap: wrap;
	//79vw
	width: 79vw;
	background: ${props => props.back};
	padding-top: ${props => props.padTop};
	border: ${props => props.border};
	border-radius: ${props => props.radius};
`;

export const DivContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	/* border: solid black 3px; */
	margin: 1rem;
	/* border-radius: 20px; */
	background: #ffffff;
	box-shadow: 7px 10px #000000;
`;

export const FlexCont = styled.div`
	/* border: solid red 3px; */
	display: flex;
	justify-content: ${props => props.justify};
	align-items: center;
	flex-wrap: wrap;
	width: ${props => props.width};
	height: ${props => props.height};
	background: ${props => props.back};
	padding-top: ${props => props.padTop};
	padding: 0.5rem;
	border: ${props => props.border};
	border-radius: ${props => props.radius};
	/* background: #ffffff; */
	box-shadow: 7px 10px #000000;
	margin: 2rem;
`;

// Container hierarchy:
// container
// div container
// text container
