const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success colour
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    return true;
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSucces(input);
        return true;
    }else {
        showError(input,'Email is not invalid');
    }
}


//checkRequired fields
function checkRequired(inputArr) {
    let bool=true;
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
            bool&=false;

        }else {
            showSucces(input);
            bool&=true;
        }
    });
    return bool;
}


//check input Length
function checkLength(input, min ,max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
        return false;
    }else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be les than ${max} characters`);
        return false;

    }else {
        showSucces(input);
        return true;
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check passwords match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
        return false;

    }
    else{
        return true;

    }
}


//Event Listeners

function FormValdate() {    
    if(chec()==true){
        sendemail();
        return true;
    }
    else{
        return false;

    }
}
function chec() {
    return checkRequired([username, email, password, password2])&&checkLength(username,3,15)&&checkLength(password,6,25)&&checkEmail(email)&&checkPasswordMatch(password, password2);
};

function sendemail(){
    console.log("true");
  var params={
    from_name:username.value,
    email_id:email.value,
    pass:password.value
  }
  emailjs.send("service_z6e9y55","template_n8ywboe",params);
  alert("sucess")
}