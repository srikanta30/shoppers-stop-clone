//Cart Page:

let display = document.getElementById("shoppingbag");
let cart = JSON.parse(localStorage.getItem("cart"));
let checkoutbutton = document.getElementById("checkoutbutton");

window.addEventListener("load", displaycart)

function displaycart(){
    if (cart.length != 0){
        let count = 0;
        let total = 0;
        display.innerHTML = "";
        display.setAttribute("id", "products");
        cart.forEach(function(product){
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
              let size = document.createElement("p");
              size.innerText = product.sizes[0];
              let p_price = document.createElement("p");
              p_price.innerHTML = `<div class="price rupee">₹ ${Math.round(product.price - (product.price * product.discount / 100))} <p class="strike">MRP ${product.price}</p></div> <p class="discount">(${product.discount}% OFF)</p>`
              total = total + Math.round(product.price - (product.price * product.discount / 100));
              let button = document.createElement("button");
              button.innerText = "REMOVE";
              let divid = "div" + product.id;
              div.setAttribute("id", divid);
              button.addEventListener("click", function(){
                  document.getElementById(divid).remove();
                  let index = product.id - 1;
                  if (index > -1) {
                    cart.splice(index, 1);
                  }
                  localStorage.setItem("cart", JSON.stringify(cart));
                  displaycart();

              })
              div.append(image, p_name, p_description, color, size, p_price, button);
              display.append(div);
              let h2 = document.getElementById("count");
              h2.innerHTML = `Shopping Bag (${count} Items) - <br>TOTAL <div class="rupee">₹ ${total}</div>`
              localStorage.setItem("carttotal", total);
              checkoutbutton.innerHTML = `<button onclick="location.href='checkout.html'" id="checkout">PROCEED TO CHECKOUT</button>`
              
        })
    }
    

}