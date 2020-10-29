import React from "react";

import tagsArray from "../utils/tags";

const DropdownFilter = ({ filterBy, setFilterBy }) => {
	const handleChange = e => {
		setFilterBy(e.target.value);
	};

	const renderOptions = () => {
		return tagsArray.map(tag => <option value={tag}>{tag}</option>);
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
