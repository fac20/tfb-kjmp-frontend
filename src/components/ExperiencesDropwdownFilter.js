import React from "react";

const DropdownFilter = ({ filterBy, setFilterBy }) => {
	const handleChange = e => {
		setFilterBy(e.target.value);
	};

	const renderOptions = () => {
		const tags = [
			"none",
			"black",
			"queer",
			"trans",
			"disabled",
			"neurotypical",
			"wheelchair-user",
			"family-friendly",
			"business",
		];

		return tags.map(tag => <option value={tag}>{tag}</option>);
	};

	console.log(renderOptions);
	return (
		<>
			<label htmlFor="filter">Filter by tag</label>

			<select
				id="filter"
				name="filter"
				value={filterBy}
				onChange={handleChange}>
				{renderOptions()}
			</select>
		</>
	);
};

export default DropdownFilter;
