

// Récupérer la div "root"
let root = document.querySelector('#root');


// Créer un bouton qui lance la requête
let btnContainer = document.createElement('div');
btnContainer.className = 'btnContainer';
let btn = document.createElement('button');
let btnSpan = document.createElement('span');
btnSpan.textContent = 'Random';
btn.addEventListener('click', function() {
	fetchData("https://thatsthespir.it/api");
	loaderVisible();
	setTimeout(loaderInvisible, 1100);
	dataInvisible();
	setTimeout(dataVisible, 1100);
});
btn.addEventListener('click', function() {
	document.querySelector('.startMessageContainer').remove();
}, {once: true});
btn.appendChild(btnSpan);
btnContainer.appendChild(btn);
root.appendChild(btnContainer);


// Créer un message pour proposer à l'utilisateur de cliquer sur le bouton
let startMessageContainer = document.createElement('div');
startMessageContainer.className = 'startMessageContainer';
let startMessage = document.createElement('p');
startMessage.textContent = 'Appuyer sur le bouton "Random" pour découvrir les citations !';
startMessageContainer.appendChild(startMessage);
root.appendChild(startMessageContainer);



// Créer un container pour insérer les données récupérées
let dataContainer = document.createElement('div');
dataContainer.classList.add('dataContainer', 'invisible');

let quote = document.createElement('blockquote');
let photo = document.createElement('img');
let author = document.createElement('p');
author.className = 'author';
let estimatedAge = document.createElement('p');
estimatedAge.className = 'estimatedAge';


dataContainer.appendChild(quote);
dataContainer.appendChild(photo);
dataContainer.appendChild(author);
dataContainer.appendChild(estimatedAge);


root.appendChild(dataContainer);



// Créer un container pour le loader
let loaderContainer = document.createElement('div');
loaderContainer.classList.add('loaderContainer', 'invisible');
let loader = document.createElement('span');
loaderContainer.appendChild(loader);

root.appendChild(loaderContainer);


// {
//     "quote": "If you love somebody, let them go, for if they return, they were always yours.<br>And if they don't, they never were.",
//     "author": "Kahlil Gibran",
//     "id": 288,
//     "permalink": "https://thatsthespir.it/of/kahlil-gibran/if-you-love-somebody-let-them-go-for-if-they-return-they-were-always-yours-and-if-they-dont-they-never-were",
//     "photo": "https://thatsthespir.it/uploads/greyscale_Kahlil-Gibran.jpg",
//     "gender": "m",
//     "slug": "kahlil-gibran",
//     "total_quotes": 6
// }