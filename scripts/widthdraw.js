/**
 * 1 set the click function
 * 2 get the value form inputField
 * 3 make it integer
 * 4 get the html text and calculate current widthdraw and display
 * 5 
 */

    // get the innerText from html field

    const widthdrawElement = document.getElementById('widthdraw')
    const previousWidthdrawAmmount = Number(widthdrawElement.innerText)

    // get totalAmmount from html 

    const totalAmountElement =document.getElementById('totalAmmount')
    const previousTotalAmmount = Number(totalAmountElement.innerText)

document.getElementById('btn-widthdraw').addEventListener('click',function(event){
    // geting value from widthdraw field
    event.preventDefault()
    const widthdrawField = document.getElementById('widthdraw-filed')
    const newWidthDrawAmmount = Number(widthdrawField.value)

    widthdrawField.value = ''

    // Error handeling
    if(newWidthDrawAmmount <= 0 || isNaN(newWidthDrawAmmount)){
        alert('please provide a valid input')
        return
    }

    if(previousTotalAmmount < newWidthDrawAmmount){
        alert('You don\'t have sufficient balance to widthdraw' )
        return
    }

    // Calculate current widthdraw

    const currentWidthdrawAmmount = previousWidthdrawAmmount + newWidthDrawAmmount

    // Display currentwidthdraw
    widthdrawElement.innerText = currentWidthdrawAmmount


    
    // total ammount calculation and display


    const newTotalAmmount = previousTotalAmmount - newWidthDrawAmmount
    totalAmountElement.innerText = newTotalAmmount

    // Error handeling
    
    

})