


function averageAge(dataToDisplay) {
    // console.log(dataToDisplay);
    for (let key in dataToDisplay) {
        if (key === 'age') {
            estimatedAge.textContent = `Estimated age of his first name : ${dataToDisplay[key]} years`;
        }
    }
}