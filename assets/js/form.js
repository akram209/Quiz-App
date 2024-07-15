function validateForm() {
    //input patterns
    const namePattern = /^[a-zA-Z]{2,15} [a-zA-Z]{2,15}$/;
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+\.(com|| org || net || edu || gov)$/;
    const passwordPattern = /^[a-zA-Z0-9]{8,}$/;
    const confirmPasswordPattern = /^[a-zA-Z0-9]{8,}$/;
   
    //inputs values
    var name = document.forms['myForm']['name'].value;
let email = document.forms['myForm']['email'].value;
let password = document.forms['myForm']['password'].value;
var confirmPassword = document.forms['myForm']['confirmPassword'].value;


// reset the error message
document.getElementById('nameError').innerHTML = "";
document.getElementById('emailError').innerHTML = "";
document.getElementById('passwordError').innerHTML = "";
document.getElementById('confirmPasswordError').innerHTML = "";

//validation
    if (name == "") {
        document.getElementById('nameError').innerHTML = "Name must be filled out";
        return false;
    }
    else if(name.length < 3) {
        document.getElementById('nameError').innerHTML = "Name must be at least 3 characters";
        return false;
    }
    else if(name.length > 30) {
        document.getElementById('nameError').innerHTML = "Name must be less than 30 characters";
        return false;
    }
    else if (!namePattern.test(name)) {
        document.getElementById('nameError').innerHTML = "Name is first name and second name with space";
        return false;
    }
    
     if (email == "") {
        document.getElementById('emailError').innerHTML = "Email must be filled out";
        return false;
    }
    else if (email.indexOf('@') == -1) {
        document.getElementById('emailError').innerHTML = "Email is not valid";
        return false;
    }
   
    else if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerHTML = "Email is not valid";
        return false;
    }
     if (password == "") {
        document.getElementById('passwordError').innerHTML = "Password must be filled out";
        return false;
    }
    else if (password.length < 8) {
        document.getElementById('passwordError').innerHTML = "Password must be at least 8 characters";
        return false;
    }
    else if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').innerHTML = "Password is not valid";
        return false;
    }
     if (confirmPassword == "") {
       document.getElementById('confirmPasswordError').innerHTML = "Confirm Password must be filled out";
        return false;
    }
    else if (confirmPassword != password) {
        document.getElementById('confirmPasswordError').innerHTML = "Password and Confirm Password must be the same";
        return false;
    }
    else if (!confirmPasswordPattern.test(confirmPassword)) {
        document.getElementById('confirmPasswordError').innerHTML = "Confirm Password is not valid";
    }
  
    // store data in local storage
   
  
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('password',password);
    localStorage.setItem('confirmPassword',confirmPassword);
  
  
  
    document.getElementsByTagName('h2')[0].textContent = "";
    document.getElementsByTagName('h2')[0].textContent = "login";
   
   
    document.getElementById('nameDiv').style.padding = "0px";
    document.getElementById('confirmPasswordDiv').style.padding = "0px";
    document.getElementById('nameDiv').style.opacity = "0";
    document.getElementById('confirmPasswordDiv').style.opacity = "0";
    document.getElementById('myForm').style.height = "340px";
    document.getElementById('myForm').style.marginTop = "220px";
    document.forms['myForm']['email'].value='';
 document.forms['myForm']['password'].value='';
    var confirmPassword = document.forms['myForm']['submit'];
    confirmPassword.style.display = "none";
    var loginBtn = document.createElement('button');
    loginBtn.textContent = "Login";
    loginBtn.id = "loginBtn";
    document.getElementById('myForm').appendChild(loginBtn);
    loginBtn.onclick = function(event) {
        event.preventDefault();
        var email=localStorage.getItem('email');
var password=localStorage.getItem('password');
var passwordform=document.getElementById('password').value;
var emailform=document.getElementById('email').value;

    if( email!=emailform || password!=passwordform){
        document.getElementById('emailError').innerHTML = "Email or Password is incorrect";
        return false;
    }
    else window.location.href = "app.html";
    }

  
   
   return false;
}
//input focus and blur
document.getElementById('name').onfocus= function() {
    document.getElementById('nameError').innerHTML = "";
    document.getElementById('name').placeholder = "";
}
document.getElementById('name').onblur = function() {
    document.getElementById('name').placeholder = "Enter your name";
}
document.getElementById('email').onfocus = function() {
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('email').placeholder = "";
}
document.getElementById('email').onblur = function() {
    document.getElementById('email').placeholder = "Enter your email";
}

document.getElementById('password').onfocus = function() {
    document.getElementById('passwordError').innerHTML = "";
    document.getElementById('password').placeholder = "";
}
document.getElementById('password').onblur = function() {
    document.getElementById('password').placeholder = "Enter your password";
}
document.getElementById('confirmPassword').onfocus = function() {
    document.getElementById('confirmPasswordError').innerHTML = "";
    document.getElementById('confirmPassword').placeholder = "";
}
document.getElementById('confirmPassword').onblur = function() {
    document.getElementById('confirmPassword').placeholder = "Confirm your password";
}

var toggle = 0;
// eye icon 
document.getElementById('passwordIcon').onclick = function() {
    if (toggle == 1) {
        toggle = 0;
    }
    else {
        toggle = 1;
    }
    
    console.log(toggle);
    if (toggle == 1) {
        document.getElementById('password').setAttribute('type', "text"); 
        document.getElementById('passwordIcon').setAttribute('class', "fa-regular fa-eye-slash");
    }
    else {
        document.getElementById('password').setAttribute('type', "password"); 
        document.getElementById('passwordIcon').setAttribute('class', "fa-regular fa-eye");
    }
}
// eye icon 
document.getElementById('confirmPasswordIcon').onclick = function() {
    if (toggle == 1) {
        toggle = 0;
    }
    else {
        toggle = 1;
    }
    
    console.log(toggle);
    if (toggle == 1) {
        document.getElementById('confirmPassword').setAttribute('type', "text"); 
        document.getElementById('confirmPasswordIcon').setAttribute('class', "fa-regular fa-eye-slash");
    }
    else {
        document.getElementById('confirmPassword').setAttribute('type', "password"); 
        document.getElementById('confirmPasswordIcon').setAttribute('class', "fa-regular fa-eye");
    }
}
document.getElementById('submit').onclick = function() {
  
}
// document.getElementById('loginBtn').onclick = function() {

    
//}
