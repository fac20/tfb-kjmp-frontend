export const COUNTRIES = "/anything/:name";

export const BUSINESSES = `${COUNTRIES}/:id/businesses`;
export const THINGS = `${COUNTRIES}/:id/thingstodo`;

export const getContinentLink = name => {
	return `/continents/${name}`;
};

export const getLawsLink = (name, id) => {
	return `/continents/${name}/${id}/laws`;
};
