
const groups = document.querySelector('#groups')
const groupAmountSelector = document.querySelector('#group-amount')
const numberAmountSelector = document.querySelector('#number-amount')
let groupAmount = 0
let numberAmount = 0

groups.innerHTML = "";

function handleInputChange(event) {
    console.log(`Input value for ${event.currentTarget.id} changed to: ${event.target.value}`);
    const inputValue = event.target.value;
    return parseInt(inputValue);
}

function updateGroups(groupAmount, numberAmount) {
    groups.innerHTML = groupAmount;
}

groupAmountSelector.addEventListener('input', function(event) {
    value = handleInputChange(event); // Update the value
});

numberAmountSelector.addEventListener('input', function(event) {
    value = handleInputChange(event); // Update the value
});