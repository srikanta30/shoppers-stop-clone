//Wishlist Page:

let display = document.getElementById("shoppingbag");
let wishlist = JSON.parse(localStorage.getItem("wishlist"));
let checkoutbutton = document.getElementById("checkoutbutton");

window.addEventListener("load", displaywishlist)

function displaywishlist(){
    if (wishlist.length != 0){
        let count = 0;
        display.innerHTML = "";
        display.setAttribute("id", "products");
        wishlist.forEach(function(product){
            count++
            let div = document.createElement("div");
              let p_name = document.createElement("p");
              p_name.innerText = product.name;
              let p_description = document.createElement("p");
              p_description.innerText = product.description;
              let image = document.createElement("img");
              image.src = product.images[0];
              let color = document.createElement("p");
              color.innerText = product.color;
              let p_price = document.createElement("p");
              p_price.innerHTML = `<div class="price rupee">₹ ${Math.round(product.price - (product.price * product.discount / 100))} <p class="strike">MRP ${product.price}</p></div> <p class="discount">(${product.discount}% OFF)</p>`;
              let button = document.createElement("button");
              button.innerText = "REMOVE";
              let divid = "div" + product.id;
              div.setAttribute("id", divid);
              button.addEventListener("click", function(){
                  document.getElementById(divid).remove();
                  let index = product.id - 1;
                  if (index > -1) {
                    wishlist.splice(index, 1);
                  }
                  localStorage.setItem("wishlist", JSON.stringify(wishlist));
                  displaywishlist();

              })
              div.append(image, p_name, p_description, color, p_price, button);
              display.append(div);
              let h2 = document.getElementById("count");
              h2.innerHTML = `Your Wishlist (${count} Items)`
              checkoutbutton.innerHTML = `<button onclick="location.href='category.html'" id="checkout">CONTINUE SHOPPING</button>`
              
        })
    }
    

}