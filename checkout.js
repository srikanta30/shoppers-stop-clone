//Checkout Page:

window.addEventListener("load", function(){
    if (localStorage.getItem("currentuser") === null) {

        alert("Please Login To Continue!");
        window.location.href = "sign_in.html"
    } 
})

window.addEventListener("load", function(){
    let total = document.getElementById("total");
    let carttotal = localStorage.getItem("carttotal");
    total.innerText = `₹${carttotal}`;
    let subtotal = document.getElementById("subtotal");
    subtotal.innerText = `₹${carttotal}`;
    let youhavesaved = document.getElementById("youhavesaved");
    youhavesaved.innerText = `₹${carttotal}`;
})





window.addEventListener("load", function(){
    let myUsers = localStorage.getItem("myUsers");
myUsers = JSON.parse(myUsers);

let currentuser = localStorage.getItem("currentuser");
    myUsers.forEach(function(user){
        
        if (user.usermobile == currentuser){
        let email = document.getElementById("displayemail");
        email.innerHTML = user.useremail;
    
        }
        })
})
window.addEventListener("load", function(){
    let savebutton = document.getElementById("save");
    savebutton.addEventListener("click", function(e){
        let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let phone = document.getElementById("phone");
    let pin = document.getElementById("pin");
    let city = document.getElementById("city");
    let address1 = document.getElementById("address1");
    let address2 = document.getElementById("address2");
    let myUsers = localStorage.getItem("myUsers");
    myUsers = JSON.parse(myUsers);
    let currentuser = localStorage.getItem("currentuser");
    let address = firstname.value + " " + lastname.value + " , Phone: " + phone.value + ", City: " + city.value + " , Address: " + address1.value + " , " + address2.value;
        
    if (firstname.value == "" || lastname.value == "" || phone.value == "" || city.value == "" || address1.value == ""){
            alert("Please Add Complete Address!")
        }

    else {
        myUsers.forEach(function(user){
            
            if (user.usermobile == currentuser){
            user["useraddress"] = address; 
            
            }
            })
            localStorage.setItem("myUsers" , JSON.stringify(myUsers));
            window.location.href = "payment.html";
    }
            
        
        
    })
})
