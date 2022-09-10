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

        
        localStorage.setItem('deposit-amount',currentDepositAmmount)


        // total ammount 

        const previousTotalAmmount = getDisplayElement('totalAmmount')

        const newTotalAmmount = previousTotalAmmount + newDepositAmmount

        localStorage.setItem('total-amount',newTotalAmmount)

        

        displayDeposit()

    })


    const displayDeposit =()=>{
        
        const deposit = localStorage.getItem('deposit-amount')
        const total = localStorage.getItem('total-amount')

        if(deposit){
            displayNewAmmount('deposit', deposit)
        }
        if(total){
            displayNewAmmount('totalAmmount', total)
        }


    }
    displayDeposit()