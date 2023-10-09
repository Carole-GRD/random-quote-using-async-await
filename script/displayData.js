

function displayData(dataToDisplay) {
	// console.log(dataToDisplay);
	
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
                if (value) {
                    photo.src = value;
                    photo.alt = 'Photo de l\'auteur';
                }
                else {
                    photo.src = 'assets/image/no-image.png';
                    photo.alt = 'Pas de photo disponible'; 
                }
                photo.className = 'photo';
                break;

            case 'author':
                author.textContent = value;
                let nameToSearch = value.split(' ')[0];
                console.log(nameToSearch);
                fetchData(`https://api.agify.io?name=${nameToSearch}`);
                break;
        
            default:
                break;
        }
    }
}