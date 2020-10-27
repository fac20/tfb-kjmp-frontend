import React from "react";
import Button from "../styled-components/Button";

const QuickExit = ({ setExit }) => {
	return (
		<Button
			onClick={() => {
				setExit(true);
			}}>
			Quick Exit
		</Button>
	);
};
