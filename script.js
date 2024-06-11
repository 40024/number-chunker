
const groups = document.querySelector('#groups')
const groupAmountSelector = document.querySelector('#group-amount')
const numberAmountSelector = document.querySelector('#number-amount')
let groupAmount = 0
let numberAmount = 0
const inputSelectors = [
    groupAmountSelector,
    numberAmountSelector
];

groups.innerHTML = "";

function handleInputChange(event) {
    console.log(`Input value for ${event.currentTarget.id} changed to: ${event.target.value}`);
    const inputValue = event.target.value;
    return parseInt(inputValue);
}

function updateGroups(groupAmount) {
    groups.innerHTML = groupAmount;
}

inputSelectors.forEach(function(inputSelector) {
    inputSelector.addEventListener('input', function(event) {
        value = handleInputChange(event);
        updateGroups(value)
    });
});

