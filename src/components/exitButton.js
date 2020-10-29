import React from "react";
import ExitButton from "../styled-components/ExitButton";

const QuickExitButton = ({ setExit }) => {
	return (
		<ExitButton>
			<a href="http://bbciplayer.com" target="_blank" rel="noopener noreferrer">
				Exit Page →
			</a>
		</ExitButton>
	);
};

export default QuickExitButton;
