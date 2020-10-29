import React from "react";
import Button from "../styled-components/Button";

export function AdminApproveButton({ id, table, setUpdated }) {
	const handleClick = event => {
		return fetch(`https://tfb-bqtg.herokuapp.com/admin/${table}/${id}`, {
			method: "PUT",
			headers: {
				authorization: `Bearer ${localStorage.getItem("access-token")}`,
			},
		}).then(data => {
			setUpdated(current => !current);
		});
	};

	return (
		<Button background="#hsl(95, 71%, 73%)" onClick={handleClick}>
			Approve
		</Button>
	);
}

export function AdminDeleteButton({ table, id, setUpdated }) {
	const handleClick = event => {
		return fetch(`https://tfb-bqtg.herokuapp.com/admin/${table}/${id}`, {
			method: "DELETE",
			headers: {
				authorization: `Bearer ${localStorage.getItem("access-token")}`,
			},
		}).then(data => {
			setUpdated(current => !current);
		});
	};

	return (
		<Button background="hsl(4, 71%, 73%)" onClick={handleClick}>
			Delete
		</Button>
	);
}
