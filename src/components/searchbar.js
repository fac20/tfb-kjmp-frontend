import { useAppContext } from "../App";

import React from "react";
import { SearchBarBox, SearchBarBtn } from "./../styled-components/SearchBar";

export default function SearchBar() {
	const { searchString, setSearchString } = useAppContext();

	return (
		<section className="searchbar">
			<SearchBarBox
				onChange={e => setSearchString(e.target.string)}
				type="search"
				value={searchString}
			/>
			<SearchBarBtn type="submit" value="SEARCH" />
		</section>
	);
}
