import React from "react";
import {
	FormCont,
	Label,
	Input,
	TextArea,
	CheckboxInput,
	CheckboxLabel,
	Fieldset,
} from "../styled-components/Form";
import { Container } from "../styled-components/Containers";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ExperiencesForm = () => {
	const [socials, setSocials] = React.useState("");
	const [details, setDetails] = React.useState("");
	const [rating, setRating] = React.useState("");
	const [tags, setTags] = React.useState({});

	const { id } = useParams();

	return (
		<Container>
			<FormCont
				onSubmit={event => {
					event.preventDefault();
					fetch(`https://tfb-bqtg.herokuapp.com/countries/${id}/experiences`, {
						method: "POST",
						body: JSON.stringify({
							socials,
							details,
							rating,
							tags,
						}),
						headers: { "Content-Type": "application/json" },
					});
				}}>
				<Label>
					{" "}
					Instagram Handle@:
					<Input
						onChange={event => {
							setSocials(event.target.value);
						}}
						value={socials}
						type="text"></Input>
				</Label>
				<Label>
					{" "}
					Your Experience:
					<TextArea
						onChange={event => {
							setDetails(event.target.value);
						}}
						value={details}></TextArea>
				</Label>
				<Label> Overall Experience:</Label>
				<ReactStars
					count={5}
					onChange={newRating => setRating(newRating)}
					size={72}
					activeColor="#ffd700"
				/>
				Tag your post!
				<Fieldset>
					<CheckboxLabel>
						Black
						<CheckboxInput
							name="black"
							onChange={event => {
								setTags({ ...tags, [event.target.name]: event.target.checked });
							}}
							checked={tags.name}
							type="checkbox"></CheckboxInput>
					</CheckboxLabel>
					<CheckboxLabel>
						Queer
						<CheckboxInput
							name="queer"
							onChange={event => {
								setTags({ ...tags, [event.target.name]: event.target.checked });
							}}
							checked={tags.name}
							type="checkbox"></CheckboxInput>
					</CheckboxLabel>
					<CheckboxLabel>
						Trans
						<CheckboxInput
							name="trans"
							onChange={event => {
								setTags({ ...tags, [event.target.name]: event.target.checked });
							}}
							checked={tags.name}
							type="checkbox"></CheckboxInput>
					</CheckboxLabel>
					<CheckboxLabel>
						Disabled
						<CheckboxInput
							name="disabled"
							onChange={event => {
								setTags({ ...tags, [event.target.name]: event.target.checked });
							}}
							checked={tags.name}
							type="checkbox"></CheckboxInput>
					</CheckboxLabel>
					<CheckboxLabel>
						Neurotypical
						<CheckboxInput
							name="neurotypical"
							onChange={event => {
								setTags({ ...tags, [event.target.name]: event.target.checked });
							}}
							checked={tags.name}
							type="checkbox"></CheckboxInput>
					</CheckboxLabel>
					<CheckboxLabel>
						Wheelchair user
						<CheckboxInput
							name="wheelchair"
							onChange={event => {
								setTags({ ...tags, [event.target.name]: event.target.checked });
							}}
							checked={tags.name}
							type="checkbox"></CheckboxInput>
					</CheckboxLabel>
					<CheckboxLabel>
						Family-friendly
						<CheckboxInput
							name="familt"
							onChange={event => {
								setTags({ ...tags, [event.target.name]: event.target.checked });
							}}
							checked={tags.name}
							type="checkbox"></CheckboxInput>
					</CheckboxLabel>
					<CheckboxLabel>
						Travelling for business
						<CheckboxInput
							name="business"
							onChange={event => {
								setTags({ ...tags, [event.target.name]: event.target.checked });
							}}
							checked={tags.name}
							type="checkbox"></CheckboxInput>
					</CheckboxLabel>
				</Fieldset>
			</FormCont>
		</Container>
	);
};

// experience.socials,
// experience.details,
// experience.tags,
// experience.overall_experience,

// let array = Object.keys(obj).filter((item) => {
// 	if(obj[item]) return item;
//   });

export default ExperiencesForm;
