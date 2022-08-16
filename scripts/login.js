/**
 * 1. adding click listner
 * 2. get value from input field by using (.value) of input box
 * 3. match the value(don't do that in real project)
 * 4. ridirect to dashboard usnig (window.location.href = "http://www.w3schools.com";) this method
 **/ 
const mailfield = document.getElementById('userMail') 
const passfield = document.getElementById('userPass')
console.log('tell me we are connectd with html or not')
document.getElementById('submitBtn').addEventListener('click',function(event){
    event.preventDefault()
    const mail = mailfield.value 
    const pass = passfield.value 

    // validation and redirect

    if(mail === 'myaccount@gmail.com' && pass === '12345'){
        window.location.href = 'account.html'
    }
    else{
        alert('please enter a valid information')
    }
    mailfield.value = ''
    passfield.value = ''
})