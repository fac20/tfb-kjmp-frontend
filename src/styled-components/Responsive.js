import styled from "styled-components";

export const RowResponsive = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
	width: ${props => props.width};
	/* border: solid red 3px; */

	@media all and (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const ColumnResponsive = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	flex-wrap: wrap;
	/* border: solid red 3px; */

	@media all and (max-width: 1000px) {
		flex-direction: row;
	}
`;
