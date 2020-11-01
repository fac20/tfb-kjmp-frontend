import styled from "styled-components";

export default styled.li`
	list-style: none;
	display: block;
	/* margin-left: 3.1rem; */

	@media all and (max-width: 768px) {
		margin: 0rem 0.2rem;
		font-size: 5px;
		display: inline-block;
	}
`;
