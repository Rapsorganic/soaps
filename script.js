// Complete Product Data
const products = [
    // Nonveg Pickles
    {
        id: 1,
        name: "Chicken Bone Pickle",
        category: "nonveg",
        description: "Traditional Andhra-style chicken bone pickle with robust flavors",
        price: { "500g": 450, "1kg": 900 },
        image: "chicken.jpg",
        bestSeller: true
    },
    {
        id: 2,
        name: "Chicken Boneless Pickle",
        category: "nonveg",
        description: "Juicy boneless chicken pieces in spicy Andhra masala",
        price: { "500g": 550, "1kg": 1100 },
        image: "mutton.jpg",
        bestSeller: true
    },
    {
        id: 3,
        name: "Prawn Pickle",
        category: "nonveg",
        description: "Succulent prawns marinated in traditional spices",
        price: { "500g": 800, "1kg": 1600 },
        image: "prawn.jpg"
    },
    {
        id: 4,
        name: "Lamb Boneless Pickle",
        category: "nonveg",
        description: "Tender lamb pieces in rich and spicy gravy",
        price: { "500g": 900, "1kg": 1800 },
        image: "https://via.placeholder.com/300x200?text=Lamb+Boneless"
    },
    {
        id: 5,
        name: "Desikodi Pickle",
        category: "nonveg",
        description: "Country chicken pickle with authentic village taste",
        price: { "500g": 700, "1kg": 1400 },
        image: "https://via.placeholder.com/300x200?text=Desikodi"
    },
    {
        id: 6,
        name: "Crab Pickle",
        category: "nonveg",
        description: "Flavorful crab pieces in spicy masala",
        price: { "500g": 750, "1kg": 1500 },
        image: "https://via.placeholder.com/300x200?text=Crab"
    },
    {
        id: 7,
        name: "Lamb Kheema Pickle",
        category: "nonveg",
        description: "Minced lamb cooked with aromatic spices",
        price: { "500g": 1000, "1kg": 2000 },
        image: "https://via.placeholder.com/300x200?text=Lamb+Kheema"
    },
    {
        id: 8,
        name: "Korameenu Fish Pickle",
        category: "nonveg",
        description: "Premium fish pickle with perfect spice balance",
        price: { "500g": 900, "1kg": 1800 },
        image: "https://via.placeholder.com/300x200?text=Korameenu+Fish"
    },
    {
        id: 9,
        name: "Regular Fish Pickle",
        category: "nonveg",
        description: "Classic fish pickle with traditional flavors",
        price: { "500g": 650, "1kg": 1300 },
        image: "https://via.placeholder.com/300x200?text=Fish+Regular"
    },
    
    // Gongura Combo
    {
        id: 10,
        name: "Gongura Chicken Boneless",
        category: "combo",
        description: "Boneless chicken with tangy gongura leaves",
        price: { "500g": 600, "1kg": 1200 },
        image: "https://via.placeholder.com/300x200?text=Gongura+Chicken",
        bestSeller: true
    },
    {
        id: 11,
        name: "Gongura Prawn",
        category: "combo",
        description: "Prawns with sour gongura flavor",
        price: { "500g": 800, "1kg": 1600 },
        image: "https://via.placeholder.com/300x200?text=Gongura+Prawn"
    },
    {
        id: 12,
        name: "Gongura Mutton Boneless",
        category: "combo",
        description: "Tender mutton with gongura's unique taste",
        price: { "500g": 900, "1kg": 1800 },
        image: "https://via.placeholder.com/300x200?text=Gongura+Mutton"
    },
    
    // Veg Pickles
    {
        id: 13,
        name: "Mango Pickle",
        category: "veg",
        description: "Classic Andhra avakaya with bold flavors",
        price: { "500g": 300, "1kg": 600 },
        image: "Mango.jpg",
        bestSeller: true
    },
    {
        id: 14,
        name: "Ginger Pickle",
        category: "veg",
        description: "Spicy ginger pieces with medicinal benefits",
        price: { "500g": 300, "1kg": 600 },
        image: "https://via.placeholder.com/300x200?text=Ginger"
    },
    {
        id: 15,
        name: "Gongura Pickle",
        category: "veg",
        description: "Tangy sorrel leaves pickle",
        price: { "500g": 300, "1kg": 600 },
        image: "https://via.placeholder.com/300x200?text=Gongura"
    },
    {
        id: 16,
        name: "Tomato Pickle",
        category: "veg",
        description: "Sweet and spicy tomato flavor",
        price: { "500g": 300, "1kg": 600 },
        image: "https://via.placeholder.com/300x200?text=Tomato"
    },
    {
        id: 17,
        name: "Red Chilli Pickle",
        category: "veg",
        description: "For those who dare! Extremely spicy",
        price: { "500g": 300, "1kg": 600 },
        image: "https://via.placeholder.com/300x200?text=Red+Chilli"
    },
    {
        id: 18,
        name: "Lemon Pickle",
        category: "veg",
        description: "Tangy lemon with perfect spice mix",
        price: { "500g": 300, "1kg": 600 },
        image: "lemon.jpg"
    },
    {
        id: 19,
        name: "Drumstick Pickle",
        category: "veg",
        description: "Unique drumstick pieces in spicy oil",
        price: { "500g": 300, "1kg": 600 },
        image: "https://via.placeholder.com/300x200?text=Drumstick"
    },
    {
        id: 20,
        name: "Usiri Pickle",
        category: "veg",
        description: "Gooseberry pickle rich in vitamin C",
        price: { "500g": 300, "1kg": 600 },
        image: "https://via.placeholder.com/300x200?text=Usiri"
    },
    
    // Podulu (Spice Blends)
    {
        id: 21,
        name: "Idly Karam",
        category: "podulu",
        description: "Perfect spice mix for idlis and dosas",
        price: { "200g": 120 },
        image: "https://via.placeholder.com/300x200?text=Idly+Karam"
    },
    {
        id: 22,
        name: "Nuvvula Karam",
        category: "podulu",
        description: "Sesame based spicy powder",
        price: { "200g": 160 },
        image: "https://via.placeholder.com/300x200?text=Nuvvula+Karam",
        bestSeller: true
    },
    {
        id: 23,
        name: "Palli Karam",
        category: "podulu",
        description: "Peanut based spicy powder",
        price: { "200g": 120 },
        image: "https://via.placeholder.com/300x200?text=Palli+Karam"
    },
    {
        id: 24,
        name: "Nalla Karam",
        category: "podulu",
        description: "Classic spicy powder for all dishes",
        price: { "200g": 120 },
        image: "https://via.placeholder.com/300x200?text=Nalla+Karam"
    },
    {
        id: 25,
        name: "Kandhi Karam",
        category: "podulu",
        description: "Dry chili based ultra spicy powder",
        price: { "200g": 120 },
        image: "https://via.placeholder.com/300x200?text=Kandhi+Karam"
    },
    {
        id: 26,
        name: "Kobbari Karam",
        category: "podulu",
        description: "Coconut based mild spicy powder",
        price: { "200g": 120 },
        image: "https://via.placeholder.com/300x200?text=Kobbari+Karam"
    },
    
    // Other Items
    {
        id: 27,
        name: "Cashew Pickle",
        category: "other",
        description: "Premium cashews in spicy gravy",
        price: { "1kg": 1200 },
        image: "https://via.placeholder.com/300x200?text=Cashew"
    },
    {
        id: 28,
        name: "Special Koora Karam",
        category: "other",
        description: "Special curry powder for vegetables",
        price: { "250g": 200 },
        image: "https://via.placeholder.com/300x200?text=Koora+Karam"
    },
    {
        id: 29,
        name: "Ulavacharu",
        category: "other",
        description: "Traditional horse gram soup powder",
        price: { "500g": 200 },
        image: "https://via.placeholder.com/300x200?text=Ulavacharu"
    }
];


// Cart System
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const nonvegGrid = document.getElementById('nonveg-grid');
const vegGrid = document.getElementById('veg-grid');
const cartCounter = document.getElementById('cart-counter');
const cartCount = document.getElementById('cart-count');
const miniCart = document.getElementById('mini-cart');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const pickleTypeFilter = document.getElementById('pickle-type');
const searchInput = document.getElementById('search-input');

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize product display if on menu page
    if (nonvegGrid && vegGrid) {
        displayProducts();
        searchInput.addEventListener('input', displayProducts);
        pickleTypeFilter.addEventListener('change', displayProducts);
    }
    
    // Initialize cart functionality on all pages
    initCart();
});

// Display Products (only for menu page)
function displayProducts() {
    nonvegGrid.innerHTML = '';
    vegGrid.innerHTML = '';
    
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = pickleTypeFilter.value;
    
    products.forEach(product => {
        // Filter by search and category
        if ((selectedCategory !== 'all' && product.category !== selectedCategory) ||
            (searchTerm && !product.name.toLowerCase().includes(searchTerm) && 
            !product.description.toLowerCase().includes(searchTerm))) {
            return;
        }
        
        const sizes = Object.keys(product.price);
        const defaultSize = sizes[0];
        const defaultPrice = product.price[defaultSize];
        const isVeg = product.category === 'veg';
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                ${product.bestSeller ? '<div class="category-badge">BESTSELLER</div>' : ''}
                <div class="type-symbol ${isVeg ? 'veg-type' : 'nonveg-type'}"></div>
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">₹${defaultPrice}</div>
                <div class="product-size">Size: ${defaultSize}</div>
                <p class="product-description">${product.description}</p>
                
                <div class="product-options">
                    <select class="size-select" data-product-id="${product.id}">
                        ${sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                    </select>
                    <select class="quantity-select" data-product-id="${product.id}">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                
                <button class="add-to-cart" data-product-id="${product.id}">
                    ADD TO CART
                </button>
            </div>
        `;
        
        if (product.category === 'nonveg') {
            nonvegGrid.appendChild(productCard);
        } else {
            vegGrid.appendChild(productCard);
        }
    });
    
    // Add event listeners to new elements
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.productId);
            const product = products.find(p => p.id === productId);
            const sizeSelect = this.closest('.product-card').querySelector('.size-select');
            const quantitySelect = this.closest('.product-card').querySelector('.quantity-select');
            
            const size = sizeSelect.value;
            const quantity = parseInt(quantitySelect.value);
            
            addToCart(productId, product, size, quantity);
            
            // Visual feedback
            this.textContent = '✓ ADDED!';
            setTimeout(() => {
                this.textContent = 'ADD TO CART';
            }, 2000);
        });
    });
    
    document.querySelectorAll('.size-select').forEach(select => {
        select.addEventListener('change', function() {
            const productId = parseInt(this.dataset.productId);
            const product = products.find(p => p.id === productId);
            const selectedSize = this.value;
            const priceElement = this.closest('.product-details').querySelector('.product-price');
            const sizeElement = this.closest('.product-details').querySelector('.product-size');
            
            priceElement.textContent = `₹${product.price[selectedSize]}`;
            sizeElement.textContent = `Size: ${selectedSize}`;
        });
    });
}

// Cart Functions (works across all pages)
function initCart() {
    updateCartCounter();
    updateMiniCart();
    
    // Cart toggle functionality
    if (cartCounter && miniCart) {
        cartCounter.addEventListener('click', () => {
            miniCart.classList.toggle('show');
        });
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            miniCart.classList.remove('show');
        });
    }
    
    // Checkout button
    const checkoutBtn = document.querySelector('.checkout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert("Your cart is empty!");
                return;
            }
            
            const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            showUPIPayment(totalAmount);
        });
    }
    
    // UPI Modal close
    const upiClose = document.querySelector('.upi-close');
    if (upiClose) {
        upiClose.addEventListener('click', closeUPIModal);
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('upi-modal')) {
            closeUPIModal();
        }
    });
}

function addToCart(productId, product, size, quantity) {
    const existingItemIndex = cart.findIndex(item => 
        item.productId === productId && item.size === size
    );
    
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            productId,
            name: product.name,
            size,
            price: product.price[size],
            quantity,
            image: product.image
        });
    }
    
    updateCart();
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
    updateMiniCart();
}

function updateCartCounter() {
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function updateMiniCart() {
    if (cartItems) {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p>Your cart is empty</p>';
            if (cartTotal) cartTotal.textContent = '₹0';
            return;
        }
        
        let grandTotal = 0;
        
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            grandTotal += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price}</div>
                    <div class="cart-item-quantity">${item.size} × ${item.quantity}</div>
                </div>
                <button class="delete-item" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItems.appendChild(cartItem);
        });
        
        // Add event listeners to delete buttons
        document.querySelectorAll('.delete-item').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                cart.splice(index, 1);
                updateCart();
            });
        });
        
        if (cartTotal) cartTotal.textContent = `₹${grandTotal}`;
    }
}

// UPI Payment Functions
function showUPIPayment(amount) {
    const upiId = 'v362811@oksbi'; // REPLACE WITH YOUR UPI ID
    const paymentLink = `upi://pay?pa=${upiId}&pn=SpicyDelights&am=${amount}&cu=INR`;
    
    // Set payment details
    document.getElementById('payment-amount').textContent = amount;
    document.getElementById('upi-pay-link').href = paymentLink;
    
    // Generate QR code (using free API)
    const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(paymentLink)}`;
    document.getElementById('upi-qr-code').innerHTML = `<img src="${qrCodeURL}" alt="UPI QR Code">`;
    
    // Show modal
    document.getElementById('upi-modal').style.display = 'block';
    
    // Try to open UPI app directly
    setTimeout(() => {
        window.location.href = paymentLink;
    }, 300);
}

function closeUPIModal() {
    document.getElementById('upi-modal').style.display = 'none';
}
