//Payment Page:
window.addEventListener("load", function(){
    if (localStorage.getItem("currentuser") === null) {

        alert("Please Login To Continue!");
        window.location.href = "sign_in.html"
    } 
})

window.addEventListener("load", function(){
    let total = document.getElementById("total");
    let carttotal = localStorage.getItem("carttotal");
    total.style.fontFamily = "Verdana";
    total.innerHTML = `Payable Amount: ₹${carttotal}`;
    let subtotal = document.getElementById("subtotal");
    subtotal.innerText = `₹${carttotal}`;
    let payableamount = document.getElementById("payableamount");
            payableamount.textContent = `₹${carttotal}`;
            let totaldiscount = document.getElementById("totaldiscount");
            totaldiscount.textContent = "₹0";
})

window.addEventListener("load", function(){
    let applypromo = document.getElementById("applyapomo");
    applypromo.addEventListener("click", function(){
        let promo = document.getElementById("promo").value;
        if (promo == "masai30"){
            alert("Discount Applied!");
            let carttotal = localStorage.getItem("carttotal");
            let discount = Math.round(carttotal * .30)
            carttotal = Math.round(carttotal * .70);
            let total = document.getElementById("total");
            total.innerHTML = `Payable Amount: ₹${carttotal}`;
            let coupon = document.getElementById("coupon");
            coupon.textContent = "30%";
            let payableamount = document.getElementById("payableamount");
            payableamount.textContent = `₹${carttotal}`;
            let totaldiscount = document.getElementById("totaldiscount");
            totaldiscount.textContent = `₹${discount}`;


        }
        else {
            alert("Coupon Code Not Valid!");
        }
        
    })
})


window.addEventListener("load", function(){
    let proceedtocheckout = document.getElementById("proceedtocheckout");
    proceedtocheckout.addEventListener("click", function(){
        let cvv = document.getElementById("cvv").value;
        let cardnumber = document.getElementById("cardnumber").value;
        if (cardnumber == "" || cvv == ""){
            alert("Invalid Card Details");
        }
        else {
            window.location.href = "orderprocessing.html";
        }
    })

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
        myUsers.forEach(function(user){
            
            if (user.usermobile == currentuser){
            user["useraddress"] = address; 
            
            }
            })
            localStorage.setItem("myUsers" , JSON.stringify(myUsers));
            window.location.href = "payment.html";
    })
})
