//Sign in with OTP:

let myUsers = localStorage.getItem("myUsers");

myUsers = JSON.parse(myUsers);

let signinmobile = document.getElementById("signupMobileNumber");
let error = document.getElementById("message");
let signinbutton = document.getElementById("sendotpbutton");

signinbutton.addEventListener("click", function(){
    myUsers.forEach(function(user){
        
    if (user.usermobile == signinmobile.value){

    window.location.href = "sendotp.html"

    }
    })
    error.innerText = "Mobile number doesn't exist!";
})