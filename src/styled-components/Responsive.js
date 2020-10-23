import styled from "styled-components";

export const RowResponsive = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
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
	/* border: solid red 3px; */

	@media all and (max-width: 1000px) {
		flex-direction: row;
	}
`;
