
const groups = document.querySelector('#groups')
const groupAmountSelector = document.querySelector('#group-amount')
const numberAmountSelector = document.querySelector('#number-amount')
let groupAmount = 0
let numberAmount = 0
// const inputSelectors = [
//     groupAmountSelector,
//     numberAmountSelector
// ];

groups.innerHTML = "";

function handleInputChange(event) {
    console.log(`Input value for ${event.currentTarget.id} changed to: ${event.target.value}`);
    const inputValue = event.target.value;
    return parseInt(inputValue);
}

function updateGroups(groupAmount, numberAmount) {
    numbers = generateRandomNumbers(numberAmount)
    groups.innerHTML = numbers;
}

function generateRandomNumbers(count) {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * 10); // Generates a random number between 0 and 9
        randomNumbers.push(randomNumber);
    }
    console.log(randomNumbers);
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