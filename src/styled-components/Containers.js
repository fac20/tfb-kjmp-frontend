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
	width: 79vw;
	background: ${props => props.back};
	padding-top: ${props => props.padTop};
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
