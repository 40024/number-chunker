
const groups = document.querySelector('#groups')
const groupAmountSelector = document.querySelector('#group-amount')
const numberAmountSelector = document.querySelector('#number-amount')
const separatorSelector = document.querySelector('#separator-selector')
let groupAmount = 1
let numberAmount = 0
let separator = ", "

groups.innerHTML = "";

function handleInputChange(event) {
    // console.log(`Input value for ${event.currentTarget.id} changed to: ${event.target.value}`);
    const inputValue = event.target.value;
    return parseInt(inputValue);
}

function updateGroups(groupAmount, numberAmount) {
    groups.innerHTML = "";
    for (let i = 0; i < groupAmount; i++) {
        const numbers = generateRandomNumbers(numberAmount);
        const groupElement = document.createElement('div');
        groupElement.textContent = numbers.join(separator); // Display the random numbers as a comma-separated list
        groupElement.classList.add('center'); // Add a class for centering
        groups.appendChild(groupElement); // Append the group to the container
    }
}

function generateRandomNumbers(count) {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * 10); // Generates a random number between 0 and 9
        randomNumbers.push(randomNumber);
    }
    // console.log(randomNumbers);
    return randomNumbers;
}

groupAmountSelector.addEventListener('input', function(event) {
    groupAmount = handleInputChange(event);
    updateGroups(groupAmount, numberAmount)
});

numberAmountSelector.addEventListener('input', function(event) {
    numberAmount = handleInputChange(event);
    updateGroups(groupAmount, numberAmount)
});

separatorSelector.addEventListener('input', function(event) {
    separatorValue = event.target.value;
    // console.log(`New separator value: ${separatorValue}`);
    separator = separatorValue
    updateGroups(groupAmount, numberAmount)
});