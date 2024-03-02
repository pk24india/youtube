// Sample product data
const products = [
    { id: 1, name: 'Python Course', price: 10000.00 },
    { id: 2, name: 'Samsung Galaxy S23', price: 79999.99 },
    { id: 3, name: 'iPhone13', price: 69990.90 },
    // Add more products as needed
];

let cart = [];

// Function to display products in the catalogue
function displayProducts() {
    const catalogue = document.getElementById('product-catalogue');
    catalogue.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price.toFixed(2)}</p> <!-- Display price in ₹ -->
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        catalogue.appendChild(productItem);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    cart.push(product);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₹${item.price.toFixed(2)}`; // Display price in ₹
        cartItems.appendChild(listItem);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = `Total Price: ₹${totalPrice.toFixed(2)}`; // Display total price in ₹
}

// Function to simulate checkout and display QR code
function checkout() {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    const upiId = 'your-shop-upi-id'; // Replace with the actual UPI ID

    alert(`Total Price: ₹${totalPrice.toFixed(2)}`); // Display total price in ₹

    // Generate QR code (you'll need a QR code library for this)
    const qrCodeImageUrl = generateQRCode(upiId, totalPrice);

    // Display QR code image (this can be done using a modal or a separate page)
    alert('Scan the QR code to make the payment:\n\n' + qrCodeImageUrl);
}

// Initialize the page
displayProducts();
