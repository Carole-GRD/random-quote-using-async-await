

function loaderVisible() {
    console.log('loader visible');
    document.querySelector('.loaderContainer').classList.remove('invisible');
}

function loaderInvisible() {
    console.log('loader invisible');
    document.querySelector('.loaderContainer').classList.add('invisible');
}