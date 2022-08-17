    document.getElementById('btn-deposit').addEventListener('click', function (event) {
        event.preventDefault()
        // Geting new deposit ammount from input by calling a function
        const newDepositAmmount = getInputValue('deposit-field')

        // Erorr handeling

        if (isNaN(newDepositAmmount) || (newDepositAmmount <= 0)) {
            alert('please inter a valid number')
            return
        }

        // deposit ammout in html
        const previousDepositAmmount = getDisplayElement('deposit')

        // deposit ammount push

        const currentDepositAmmount = newDepositAmmount + previousDepositAmmount

        // set new ammount in display
        displayNewAmmount('deposit', currentDepositAmmount)

        // total ammount 
        // get total ammount from html field and convert into number

        const previousTotalAmmount = getDisplayElement('totalAmmount')

        const newTotalAmmount = previousTotalAmmount + newDepositAmmount

        displayNewAmmount('totalAmmount', newTotalAmmount)

    })