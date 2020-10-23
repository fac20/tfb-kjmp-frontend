import styled from "styled-components";

export const TextContainer = styled.div`
	/* border: solid black 3px; */
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30vw;
`;

export const Container = styled.div`
	/* border: solid red 3px; */
	display: flex;
	justify-content: ${props => props.justify};
	align-items: center;
	flex-wrap: wrap;
	width: 80vw;
	height: 100%;
	/* border: solid red 3px; */
`;

export const DivContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	/* border: solid black 3px; */
	margin: 1rem;
	border-radius: 20px;
	background: #fcf7f0;
	box-shadow: 7px 10px #000000;
`;
