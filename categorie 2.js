// استرجاع العربة من localStorage أو إنشاء عربة جديدة
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(item) {
    cart.push(item);
    updateCart();
}

function updateCart() {
    let cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = ""; 

    cart.forEach((item, index) => {
        let div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `${item} <button onclick="removeFromCart(${index})">❌ حذف</button>`;
        cartContainer.appendChild(div);
    });

    localStorage.setItem("cart", JSON.stringify(cart)); 
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}

// تحديث العربة عند تحميل الصفحة
updateCart();

