import React from "react";

import { SearchBarBox, SearchBarBtn } from "./../styled-components/SearchBar";

export default function SearchBar() {
	return (
		<section className="searchbar">
			<SearchBarBox type="search" />
			<SearchBarBtn type="submit" value="SEARCH" />
		</section>
	);
}
