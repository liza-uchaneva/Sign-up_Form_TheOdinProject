let submitBtn = document.querySelector('#submit')
let cpass = document.querySelector('#cpassword')
let pass = document.querySelector('#password')
let passError = document.querySelector('#pass-error')

cpass.addEventListener('focusout',() => {
    if(cpass.value.trim() !== ''){
        if(cpass.value !== pass.value)
        {
            showError();
        }
        else{
            cpass.setCustomValidity("")
            passError.textContent = ''
        }
    }
})

conpass.addEventListener('focusin', () => {
    if (cpass.classList.contains('invalid-input')) {
        cpass.classList.remove('invalid-input')
    }
})

function showError(){
    pass.classList.add('invalid-input');
    pass.setCustomValidity("Invalid Field.");
    cpass.classList.add('invalid-input');
    cpass.setCustomValidity("Invalid Field.");
    passError.textContent = '*Passwords do not match';
}
