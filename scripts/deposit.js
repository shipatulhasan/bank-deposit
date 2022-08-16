

// deposit ammout in html
const depositElement = document.getElementById('deposit')
const previousDepositAmmountString = depositElement.innerText
const previousDepositAmmount = parseFloat(previousDepositAmmountString)

// get total ammount from html field and convert into number
const totalAmountElement = document.getElementById('totalAmmount')
const previousTotalAmmountString = totalAmountElement.innerText
const previousTotalAmmount = parseFloat(previousTotalAmmountString)

document.getElementById('btn-deposit').addEventListener('click',function(event){
    event.preventDefault()
    const depositeField= document.getElementById('deposit-field')
    const newDepositAmmountString= depositeField.value
    const newDepositAmmount = parseFloat(newDepositAmmountString)

    // clear input field

    depositeField.value = ''

    // Erorr handeling

    if(isNaN(newDepositAmmount) || (newDepositAmmount <= 0)){
        alert('please inter a valid number')
        return
    }

    // deposit ammount push

    const currentDepositAmmount = newDepositAmmount + previousDepositAmmount
    depositElement.innerText = currentDepositAmmount

    // total ammount 

    
    const newTotalAmmount = previousTotalAmmount + newDepositAmmount

    totalAmountElement.innerText = newTotalAmmount
    
    
   


    

})