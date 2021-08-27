//Send To OTP Page:

let newotp = Math.floor(Math.random()*899999+100000);

window.addEventListener("load", function(){

    console.log(newotp);


let otpinput = document.getElementById("inputotp");

let signinbutton = document.getElementById("signinbutton");

signinbutton.addEventListener("click", function(){

    if (otpinput.value == newotp){
        window.location.href = "home.html"
    }
    else {
        document.getElementById("message").textContent = "Sorry! Wrong OTP, Please try again."
    }


    
})


})

