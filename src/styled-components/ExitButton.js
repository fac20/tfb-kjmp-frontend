import styled from "styled-components";

export default styled.button`
	background-color: hsl(342, 77%, 66%, 0.8);
	border-radius: 20px 0 0 20px;
	border: solid black 2px;
	box-shadow: 3px 5px #000000;
	font-family: "Anonymous Pro", monospace;
	font-size: 1.6rem;
	margin-top: -2.5em;
	height: 3rem;
	padding: 0.2rem;
	position: fixed;
	right: 0;
	top: 50%;
	width: 8em;
	@media all and (max-width: 938px) {
		font-size: 10px;
		width: 4em;
	}
`;
