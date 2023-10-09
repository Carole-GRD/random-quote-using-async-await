

function errorMessage(error) {
    let popup = document.createElement('div');
    popup.textContent = `There was an error : ${error}`;
    root.appendChild(popup);
}