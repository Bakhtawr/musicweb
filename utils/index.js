const url = 'https://soundcloud4.p.rapidapi.com/search?query=almost%20lover&type=all';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b5e632e026msh574312133404c9cp140f97jsn4e7061ea7578',
		'X-RapidAPI-Host': 'soundcloud4.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

