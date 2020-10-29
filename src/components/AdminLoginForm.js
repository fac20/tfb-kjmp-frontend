import React from "react";
import { FormCont, Label, Input } from "../styled-components/Form";
import { Container } from "../styled-components/Containers";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function LoginForm() {
	const history = useHistory();

	function loginSubmit(username, password) {
		return fetch("https://tfb-bqtg.herokuapp.com/admin", {
			method: "POST",
			withCredentials: true,
			headers: {
				"content-type": "application/JSON",
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		})
			.then(result => result.json())
			.then(response => {
				localStorage.setItem("access-token", response.token);
				history.push("/admin");
			})
			.catch(error => error);
	}

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	return (
		<Container>
			<FormCont
				onSubmit={e => {
					e.preventDefault();
					loginSubmit(username, password);
				}}>
				<Label htmlFor="username">Login</Label>
				<Input
					type="text"
					name="username"
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
				<Label htmlFor="password">Password</Label>
				<Input
					type="password"
					name="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<Input type="submit" value="SUBMIT" />
			</FormCont>
		</Container>
	);
}
