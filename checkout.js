var save=document.getElementById("save");
var promo=document.getElementById("promo").value;
var total=document.getElementById("total").value;
var promobtn=document.getElementById("applypromo");
var  coupdiscount=document.getElementById("coupen");
var payamount=document.getElementById("payableamount");
var savedamount=document.getElementById("savedd");
var subtotal=document.getElementById("subtotal")
subtotal.innerHTML=total
promobtn.onclick= function promoo(){
    if(promo=="masai30"){
        var discount=(total*30)/100
        var finalprice=total-((total*30)/100)
        var saved=total-finalprice;
        alert("coupen accepted");
        coupdiscount.innerHTML=discount
        payamount.innerHTML=finalprice
        savedamount.innerHTML=saved
    }else{
alert("coupen invalid")
    }
}
