document.getElementById('btn-deposit').addEventListener('click',function(event){
    event.preventDefault()
    const depositeField= document.getElementById('deposit-field')
    const newDepositAmmountString= depositeField.value
    const newDepositAmmount = parseFloat(newDepositAmmountString)

// deposit ammout in html
    const depositElement = document.getElementById('deposit')
    const previousDepositAmmountString = depositElement.innerText
    const previousDepositAmmount = parseFloat(previousDepositAmmountString)

    // deposit ammount push

    const currentDepositAmmount = newDepositAmmount + previousDepositAmmount
    depositElement.innerText = currentDepositAmmount

    // total ammount 

    const totalAmountElement =document.getElementById('totalAmmount')
    const previousTotalAmmountString = totalAmountElement.innerText
    const previousTotalAmmount = parseFloat(previousTotalAmmountString)
    const newTotalAmmount = previousTotalAmmount + newDepositAmmount

    totalAmountElement.innerText = newTotalAmmount
    
    
    depositeField.value = ''


    

})