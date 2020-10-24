import styled from "styled-components";

export default styled.button`
	height: 2rem;
	border-radius: 20px;
	box-shadow: 3px 5px #000000;
	background: ${props => props.background};
	margin: 0.9rem 0.9rem;
	padding: 0.2rem;
	font-family: "Anonymous Pro", monospace;
	@media all and (max-width: 938px) {
		font-size: 10px;
	}
`;
