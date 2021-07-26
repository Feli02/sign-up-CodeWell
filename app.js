let btn = document.getElementById('btn-submit')




btn.addEventListener('click', () => {
    let errors = 0;


    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let checkbox = document.getElementById('terms')

    let errorEmail = document.getElementById('icon-error-email')
    let errorPassword = document.getElementById('icon-error-password')

    let errorEmailText = document.getElementById('email-error-msg')
    let errorPasswordText = document.getElementById('password-error-msg')
    let errorCheckboxText = document.getElementById('checkbox-error-msg')

    valor = email.value
    regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email.value == null || email.value.length == 0 || !regex.test(valor)){
        errorEmail.style.display = 'block';
        errorEmailText.style.display = 'block';
        email.classList.add('errorInput')
        errors += 1
        document.getElementById('login-main-title').style.marginBottom = '5%'
        document.getElementById('email-container').style.marginBottom = '4%'
        document.getElementById('password-container').style.marginBottom = '4%'
    }else{
        errorEmail.style.display = 'none';
        errorEmailText.style.display = 'none';
        document.getElementById('login-main-title').style.marginBottom = '8%'
        document.getElementById('email-container').style.marginBottom = '6%'
        document.getElementById('password-container').style.marginBottom = '6%'
        email.classList.remove('errorInput')
        if(errors > 0){
            errors -= 1
        }
    }

    if(password.value == null || password.value.length < 8 || /^\s+$/.test(password.value)){
        errorPassword.style.display = 'block';
        errorPasswordText.style.display = 'block';
        password.classList.add('errorInput')
        errors += 1
        document.getElementById('login-main-title').style.marginBottom = '5%'
        document.getElementById('email-container').style.marginBottom = '4%'
        document.getElementById('password-container').style.marginBottom = '4%'
    }else{
        errorPassword.style.display = 'none';
        errorPasswordText.style.display = 'none';
        document.getElementById('login-main-title').style.marginBottom = '5%'
        document.getElementById('email-container').style.marginBottom = '6%'
        document.getElementById('password-container').style.marginBottom = '6%'
        password.classList.remove('errorInput')
        if(errors > 0){
            errors -= 1
        }
    }

    if(checkbox.checked != true){
        errorCheckboxText.style.display = 'block'
        document.getElementById('login-main-title').style.marginBottom = '5%'
        document.getElementById('email-container').style.marginBottom = '4%'
        document.getElementById('password-container').style.marginBottom = '4%'
        errors+=1
    }else{
        errorCheckboxText.style.display = 'none'
        document.getElementById('login-main-title').style.marginBottom = '8%'
        document.getElementById('email-container').style.marginBottom = '6%'
        document.getElementById('password-container').style.marginBottom = '6%'
        if(errors > 0){
            errors -= 1
        }
    }


    let form = document.getElementById('form')

    form.addEventListener('submit', function(event){
        console.log(errors)
        if (errors > 0){
            event.preventDefault();
        }
    })
})

