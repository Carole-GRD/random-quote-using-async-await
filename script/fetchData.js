

async function fetchData(url) {
	try {
		const response = await fetch(url);
		const json = await response.json();
		return displayData(json);
	} catch (error) {
        errorMessage(error);
		console.log("There was an error!", error);
	}
}