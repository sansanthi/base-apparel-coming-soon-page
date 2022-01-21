const email = document.getElementById("email");
const errorMsg = document.querySelector('.error-message');
const btn = document.querySelector('.btn');
const inputControl = email.parentElement;
const emailRegExpress = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

email.addEventListener('focus', function(e){
    console.log('it work')
    inputControl.classList.remove('error');
    errorMsg.style.display = 'none';
});

btn.addEventListener('click', function(e){
    e.preventDefault();
    validate();
})

const validate = () => {
    if(!emailRegExpress.test(email.value)) {
        
        inputControl.classList.add('error');
        errorMsg.style.display = "block";
        errorMsg.innerHTML = "Please provide a valid email";
    }else {
        return false;
    }
    
}
