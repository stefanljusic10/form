let heading = document.querySelector('.heading')
let newPassword = document.querySelector('input[name=newPassword]')
let repeatPassword = document.querySelector('input[name=repeatPassword]')
let error = document.querySelector('.error')
let btnSave = document.querySelector('.box > button')

function handleForm(event){
    event.preventDefault()
    if(newPassword.value.length >= 8 && newPassword.value === repeatPassword.value){
        window.location.href = 'http://127.0.0.1:5500/success.html'
    }
    else{
        heading.textContent = 'Oops...'
        error.style.visibility = 'visible'
    }
}

btnSave.addEventListener('click', handleForm)
window.addEventListener('keypress', (e) => {
    if(e.key === "Enter")
        handleForm(e)
})