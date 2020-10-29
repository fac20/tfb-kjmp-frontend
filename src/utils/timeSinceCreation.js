export default function timeSinceCreation(createdAt) {
	const dateNow = new Date().toISOString();
	const start = new Date(createdAt).getTime();
	const end = new Date(dateNow).getTime();
	let seconds = Math.round(Math.abs(end - start) / 1000); // We'll round away millisecond differences.
	const days = Math.floor(seconds / 86400);
	seconds -= days * 86400;
	const hours = Math.floor(seconds / 3600);
	seconds -= hours * 3600;
	const minutes = Math.floor(seconds / 60);
	seconds -= minutes * 60;

	if (days) {
		return days === 1 ? `${days} day` : `${days} days`;
	}

	if (hours) {
		return hours === 1 ? `${hours} hour` : `${hours} hours`;
	}

	if (minutes) {
		return minutes === 1 ? `${minutes} minute` : `${minutes} minutes`;
	}

	return seconds === 1 ? `${seconds} second` : `${seconds} seconds`;
}
