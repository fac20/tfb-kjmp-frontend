import styled from "styled-components";
import img from "./../images/form-back.svg";

const FormCont = styled.form`
	background-image: url(${img});
	background-size: 60vh;
	width: 30vw;
	height: 80vh;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: hsl(188, 13%, 45%) 3px solid;
	border-radius: 20px;
	font-family: "Anonymous Pro", monospace;
	font-size: 1.3rem;
	font-weight: 800px;

	@media screen and (max-width: 700px) {
		width: 80vw;
	}
	@media screen and (max-width: 400px) {
		width: 95vw;
	}
`;

const Label = styled.label`
	display: flex;
	flex-direction: column;
	align-items: left;
	width: 80%;
	font-size: 1.3rem;
	font-weight: 800px;
	cursor: pointer;
	border-bottom: hsl(31, 95%, 84%) solid 7px;
`;

const CheckboxLabel = styled.label`
	font-size: 1.5rem;
	padding: 0.2rem;
	display: flex;
	align-items: center;
	cursor: pointer;
`;
const Fieldset = styled.fieldset`
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin-top: 1rem;
	border: none;
`;

const Input = styled.input`
	border: hsl(188, 13%, 45%) 3px solid;
	margin: 0.5rem 0 2rem 0;
	width: 80%;
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
	margin: 0.5rem 0 2rem 0;
	width: 80%;
	height: 12vh;
	border-radius: 20px;
	background: hsl(188, 13%, 45%);
	font-size: 2rem;
	font-weight: 800px;
	font-family: "Anonymous Pro", monospace;
`;

const SubmitMessage = styled.h1`
	margin: auto;
	display: block;
	padding-top: 15rem;
`;

const SubmitContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	flex-wrap: wrap;
`;

export {
	FormCont,
	Label,
	Input,
	CheckboxInput,
	TextArea,
	CheckboxLabel,
	Fieldset,
	SubmitMessage,
	SubmitContainer,
};
