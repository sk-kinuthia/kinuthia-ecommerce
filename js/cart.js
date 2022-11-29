let submit = document.querySelector('.p-add');
let subtract = document.querySelector('.img-add-cart-minus');
let add = document.querySelector('.img-add-cart-plus');
let productValue = document.querySelector(".add-cart-text");
let productValue2 = document.querySelector(".add-cart-text-2");



let cart = {
    // (A) PROPERTIES
    hItems: null, // html current cart
    items: {}, // current items in cart
    iURL: "images/", // product image url folder

    // (B) LOCALSTORAGE CART
    // (B1) SAVE CURRENT CART INTO LOCALSTORAGE
    save: () => {
        localStorage.setItem("cart", JSON.stringify(cart.items));
    },

    // (B2) LOAD CART FROM LOCALSTORAGE
    load: () => {
        cart.items = localStorage.getItem("cart");
        if (cart.items == null) { cart.items = {}; } else { cart.items = JSON.parse(cart.items); }
    },

    // (B3) EMPTY ENTIRE CART
    nuke: () => {
        if (confirm("Empty cart?")) {
            cart.items = {};
            localStorage.removeItem("cart");
            cart.list();
        }
    },


    add: (id) => {
        if (cart.items[id] == null) { cart.items[id] = 1 } else { cart.items[id]++; }
        cart.list();
        cart.save();


    },
    list: () => {
        cart.hItems = document.getElementById("cart-items ");


        // (D1) RESET
        cart.hItems.innerHTML = "";
        let item, part, pdt, empty = true;
        for (let key in cart.items) {
            if (cart.items.hasOwnProperty(key)) { empty = false; break; }
        }
        // (D2) CART IS EMPTY
        if (empty) {
            item = document.createElement("div");
            item.textContent = "Your cart is empty";
            cart.hItems.appendChild(item);
        }
        // (D3) CART IS NOT EMPTY - LIST ITEMS
        else {
            let template = document.getElementById("template-cart ").content,
                p, total = 0;
            subtotal = 0;


            for (let id in cart.items) {
                // (D3-1) PRODUCT ITEM
                p = products[id];
                item = template.cloneNode(true);
                item.querySelector(".c-del").onclick = () => { cart.remove(id); };
                item.querySelector(".c-name").textContent = p.name;
                let totalText = item.querySelector('.cart-total-text ');
                productValue.textContent = cart.items[id];
                productValue2.textContent = cart.items[id];
                item.querySelector(".c-qty").onchange = function() { cart.change(id, this.value); };
                cart.hItems.appendChild(item);
                // (D3-2) SUBTOTAL
                subtotal = cart.items[id] * p.price;
                total += subtotal;
                // (D3-3) TOTAL AMOUNT
                item = document.createElement("div");
                item.className = "s-total";
                item.id = "s-total";
                item.textContent = '$' + p.price + ".00" + " " + "x" + " " + cart.items[id];
                let item2 = document.createElement('div');
                item2.className = "t-total";
                item2.textContent = '$' + total + ".00";

                totalText.appendChild(item);
                totalText.appendChild(item2);

            }
        }
    },
    // (G) REMOVE ITEM FROM CART
    remove: (id) => {
        delete cart.items[id];
        cart.save();
        cart.list();
    },
    checkout: () => {
        alert("Successful checkout!");
    }
};

submit.onclick = () => {
    for (let id in products) {
        cart.add(id);
    }
}

subtract.addEventListener("click", () => {
    for (let id in cart.items) {
        productValue.textContent = cart.items[id]--;
        productValue2.textContent = productValue.textContent;
    }



});
add.addEventListener("click", () => {
    for (let id in cart.items) {
        productValue.textContent = cart.items[id]++;

    }
});