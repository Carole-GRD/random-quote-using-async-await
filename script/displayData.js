
let dataContainer = document.createElement('div');
dataContainer.className = 'dataContainer';
let quote = document.createElement('blockquote');
let photo = document.createElement('img');
let author = document.createElement('p');


function displayData(dataToDisplay) {
	console.log(dataToDisplay);
	
		// Accéder aux clés et valeurs de l'objet
		for (let key in dataToDisplay) {
			let value = dataToDisplay[key];

            switch (key) {
                case 'quote':
                    // quote.textContent = `${value}`;
                    quote.innerHTML = value;
                    quote.className = 'quote';
                    break;
            
                case 'photo':
                    photo.src = value;
                    photo.alt = 'Photo de l\'auteur';
                    photo.className = 'photo';
                    break;

                case 'author':
                    author.textContent = value;
                    author.className = 'author';
                    break;
            
                default:
                    break;
            }

            dataContainer.appendChild(quote);
            dataContainer.appendChild(photo);
            dataContainer.appendChild(author);

			root.appendChild(dataContainer);
		}
	
}