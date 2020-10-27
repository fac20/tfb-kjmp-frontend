import styled from "styled-components";
import img from "./../images/form-back.svg";

const FormCont = styled.form`
	background-image: url(${img});
	background-size: 60vh;
	width: 50vw;
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: hsl(188, 13%, 45%) 3px solid;
	border-radius: 20px;
	font-family: "Anonymous Pro", monospace;
`;

const Label = styled.label`
	font-size: 2rem;
	font-weight: 800px;
	border-bottom: hsl(31, 95%, 84%) solid 7px;
`;

const CheckboxLabel = styled.label`
	font-size: 1.5rem;
	padding: 0.2rem;
	display: flex;
	align-items: center;
`;
const Fieldset = styled.fieldset`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const Input = styled.input`
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

const CheckboxInput = styled.input`
	margin-left: 0.1rem;
	height: 1.3rem;
	width: 1.3rem;
`;

const TextArea = styled.textarea`
	border: hsl(188, 13%, 45%) 3px solid;
	margin: 2rem;
	width: 10vw;
	height: 12vh;
	border-radius: 20px;
	background: hsl(188, 13%, 45%);
	font-size: 2rem;
	font-weight: 800px;
	font-family: "Anonymous Pro", monospace;
`;

export {
	FormCont,
	Label,
	Input,
	CheckboxInput,
	TextArea,
	CheckboxLabel,
	Fieldset,
};
