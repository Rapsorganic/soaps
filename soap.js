const products = [
    { id: 1, name: "Glow Soap", price: 75, category: "Goat Milk", image: "glow .jpg" },
    { id: 2, name: "Saffron Soap", price: 75, category: "Goat Milk", image: "saffron .jpg" },
    { id: 3, name: "Redwine Soap", price: 69, category: "Glycerin", image: "redwine.jpg" },
    { id: 4, name: "Charcoal Soap", price: 69, category: "Glycerin", image: "charcoal.jpg" }
];

const cart = [];

function displayProducts() {
    document.getElementById("goat-milk-products").innerHTML = "";
    document.getElementById("glycerin-products").innerHTML = "";
    products.forEach(product => {
        let container = product.category === "Goat Milk" ? "goat-milk-products" : "glycerin-products";
        document.getElementById(container).innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

displayProducts();

function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    let cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = "";
    cart.forEach(product => {
        cartContainer.innerHTML += `<p>${product.name} - ₹${product.price}</p>`;
    });
}

function sendToWhatsApp() {
    let message = "Hello! Order Details:\n";
    cart.forEach(product => {
        message += `${product.name} - ₹${product.price}\n`;
    });
    let whatsappUrl = `https://wa.me/+919490049325?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
}
