

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