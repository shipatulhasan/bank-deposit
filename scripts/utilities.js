// getting input values from input field
function getInputValue(fieldId){
    const inputFieldEelement = document.getElementById(fieldId)
    const newAmmount  = Number(inputFieldEelement.value)
    inputFieldEelement.value = ''
    return newAmmount
}

// getting inner text from html

function getDisplayElement(displayId){
    const displayElement = document.getElementById(displayId)
    const previousAmmount = Number(displayElement.innerText)
    return previousAmmount
}

// set value in display
function displayNewAmmount(elementId, newAmmount){
    const displayBox = document.getElementById(elementId)
    displayBox.innerText = newAmmount
}
