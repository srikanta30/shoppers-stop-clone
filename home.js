//Home Page:
window.addEventListener('load', function () {
  let count = JSON.parse(localStorage.getItem('cart')).length;
  let notify = document.getElementById('lblCartCount');
  notify.innerText = count;

  let countw = JSON.parse(localStorage.getItem('wishlist')).length;
  let notifyw = document.getElementById('lblwishlistCount');
  notifyw.innerText = countw;

})
//scrollbar
var counter=1;
setInterval(function(){
    document.getElementById('radio'+counter).checked=true;
    counter++;
    if(counter>4){
        counter=1;
    }
},3000)
//scrollbar

//settimeout
var i=0;
var time=1500;
var images=[];
images[0]='./img/imgtime1.webp';
images[1]='./img/imgtime2.webp';
images[2]='./img/imgtime3.webp';
images[3]='./img/imgtime4.webp';
function changeImg(){
    document.slide.src=images[i];
    if(i<images.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImg()",time);
}
window.onload=changeImg
//settimeout



