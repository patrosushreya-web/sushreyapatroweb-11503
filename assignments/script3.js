function addProduct() {
    let product = prompt("Enter product name:");

    if (product === "" || product === null) {
        alert("Product name cannot be empty");
    } else {
        let li = document.createElement("li");
        li.textContent = product;
        document.getElementById("productList").appendChild(li);
    }
}

function calculatePrice() {
    let qty = document.getElementById("qty").value;
    let price = 50;
    let result = document.getElementById("total");

    if (qty <= 0) {
        result.innerHTML = "Enter valid quantity";
    } else {
        result.innerHTML = "Total Price: ₹" + (qty * price);
    }
}
