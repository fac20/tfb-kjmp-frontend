import styled from "styled-components";
// import img from "./../images/form-back.svg";

const FormCont = styled.form`
	background: hsl(188, 13%, 45%);
	background-size: 60vh;
	/* margin-left: 15rem; */
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
	flex-direction: row;
	align-items: left;
	width: 80%;
	font-size: 1.3rem;
	font-weight: 800px;
	cursor: pointer;
	padding: 1rem 3rem;
	border-top: hsl(31, 95%, 84%) solid 4px;
	background: hsl(188, 13%, 45%);
	border-radius: 5px;
	margin-top: 3rem;
	color: ${props => props.color || "hsl(188, 13%, 45%)"};
	@media all and (max-width: 411px) {
		font-size: 15px;
	}
`;

const Span = styled.span`
	color: hsl(342, 77%, 66%, 0.8);
	font-family: "Helvetica";
	font-size: 1rem;
`;

const CheckboxLabel = styled.label`
	color: ${props => props.color || "hsl(31, 95%, 84%)"};
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
	margin-left: 5rem;
	border: none;
`;

const Input = styled.input`
	border: hsl(31, 95%, 84%) 3px solid;
	margin-top: 0.5rem;
	width: 80%;
	height: 4vh;
	border-radius: 20px;
	background: transparent;
	font-size: 2rem;
	font-weight: 800px;
	font-family: "Anonymous Pro", monospace;
	padding: 1.5rem 0.5rem;
	color: hsl(31, 95%, 84%);
`;

const CheckboxInput = styled.input`
	margin-left: 14rem;
	height: 1.3rem;
	width: 1.3rem;
`;

const TextArea = styled.textarea`
	border: hsl(31, 95%, 84%) 3px solid;
	margin-top: 0.5rem;
	width: 80%;
	height: 12vh;
	border-radius: 20px;
	background: transparent;
	font-size: 2rem;
	font-weight: 800px;
	font-family: "Anonymous Pro", monospace;
	text-align: center;
	padding-top: 0.9rem;
	color: hsl(31, 95%, 84%);
	&::placeholder {
		color: hsl(31, 95%, 84%);
		text-align: center;
		opacity: 0.5;
		padding-top: 0.9rem;
	}
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
	Span,
};
