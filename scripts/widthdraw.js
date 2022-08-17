/**
 * 1 set the click function
 * 2 get the value form inputField
 * 3 make it integer
 * 4 get the html text and calculate current widthdraw and display
 * 5 
 */

document.getElementById('btn-widthdraw').addEventListener('click', function (event) {
    // geting value from widthdraw field
    event.preventDefault()
    const newWidthDrawAmmount = getInputValue('widthdraw-field')

    // Error handeling

    if (newWidthDrawAmmount <= 0 || isNaN(newWidthDrawAmmount)) {
        alert('please provide a valid input')
        return
    }


    // get the innerText from html field

    const previousWidthdrawAmmount = getDisplayElement('widthdraw')

    // Calculate current widthdraw

    const currentWidthdrawAmmount = previousWidthdrawAmmount + newWidthDrawAmmount

    // get totalAmmount from html 

    const prevTotalAmmount = getDisplayElement('totalAmmount')

    if (prevTotalAmmount < newWidthDrawAmmount) {
        alert('You don\'t have sufficient balance to widthdraw')
        return
    }

    // Display currentwidthdraw

    displayNewAmmount('widthdraw', currentWidthdrawAmmount)

    // total ammount calculation and display


    const newTotalAmmount = prevTotalAmmount - newWidthDrawAmmount

    displayNewAmmount('totalAmmount', newTotalAmmount)

})