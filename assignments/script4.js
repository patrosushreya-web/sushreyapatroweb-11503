// Product Data (Array of Objects)
const products = [
    { id: 1, name: "Rice (1kg)", price: 60 },
    { id: 2, name: "Milk (1L)", price: 50 },
    { id: 3, name: "Apples (1kg)", price: 120 },
    { id: 4, name: "Bread", price: 40 }
];

let cart = [];

// Load Products
const productList = document.getElementById("productList");

products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: ₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
});

// Add to Cart
const addToCart = (id) => {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCart();
};

// Update Cart (DOM Manipulation)
const updateCart = () => {
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
    });

    totalPrice.textContent = total;
};

// Checkout
const checkout = () => {
    if (cart.length === 0) {
        alert("Cart is empty!");
    } else {
        alert("Thank you for shopping at sumanmart!");
        cart = [];
        updateCart();
    }
};
