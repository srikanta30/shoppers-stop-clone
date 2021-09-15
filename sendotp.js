//Send OTP Page:



window.addEventListener("load", function(){
    let newotp = Math.floor(Math.random()*899999+100000);

    alert(newotp);


let otpinput = document.getElementById("inputotp");

let signinbutton = document.getElementById("signinbutton");

signinbutton.addEventListener("click", function(){

    if (otpinput.value == newotp){
        alert("Login Successful!")
        window.location.href = "home.html"
    }
    else {
        document.getElementById("message").textContent = "Sorry! Wrong OTP, Please try again."
    }


    
})


})

