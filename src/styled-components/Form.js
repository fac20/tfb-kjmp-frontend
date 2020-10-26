import styled from "styled-components";
import img from "./../images/form-back.svg";
export const FormCont = styled.form`
	background-image: url(${img});
	background-size: 60vh;
	width: 30vw;
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: hsl(188, 13%, 45%) 3px solid;
	border-radius: 20px;
	font-family: "Anonymous Pro", monospace;
`;

export const Label = styled.label`
	font-size: 2rem;
	font-weight: 800px;
	border-bottom: hsl(31, 95%, 84%) solid 7px;
`;

export const Input = styled.input`
	border: hsl(188, 13%, 45%) 3px solid;
	margin: 2rem;
	width: 10vw;
	height: 4vh;
	border-radius: 20px;
	background: hsl(188, 13%, 45%);
	font-size: 2rem;
	font-weight: 800px;
	font-family: "Anonymous Pro", monospace;
`;
