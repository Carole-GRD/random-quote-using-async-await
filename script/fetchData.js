

async function fetchData(url) {
	try {
		const response = await fetch(url);
		const json = await response.json();

		if (url === 'https://thatsthespir.it/api') {
			return displayData(json);
		}
		else if (url.includes('https://api.agify.io')) {
			return averageAge(json);
		}
		
	} catch (error) {
        errorMessage(error);
		console.log("There was an error!", error);
	}
}

