import styled from "styled-components";

export default styled.button`
	height: ${props => props.height || "2rem"};
	border-radius: 20px;
	border: solid black 2px;
	box-shadow: 3px 5px #000000;
	background: ${props => props.background};
	margin: ${props => props.margin || "0.9rem 0.9rem"};
	padding: 0.2rem;
	font-family: "Anonymous Pro", monospace;
	width: ${props => props.width};
	margin-left: ${props => props.left};
	font-size: ${props => props.fontsize};
	cursor: pointer;
	@media all and (max-width: 938px) {
		font-size: 10px;
		margin-left: ${props => props.medialeft};
	}
`;
