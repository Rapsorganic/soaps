// cart.js - Complete version that works with both index.html and menu.html
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// =============================================
// Universal Cart Functions
// =============================================

// Update cart counter on all pages
function updateCartCounter() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Update mini cart display
function updateMiniCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cartItems) {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
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
                    <span class="item-badge ${item.category === 'veg' ? 'veg' : 'nonveg'}"></span>
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price}</div>
                    <div class="cart-item-meta">
                        <span class="size">${item.size}</span>
                        <span class="quantity">Qty: ${item.quantity}</span>
                    </div>
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

// Universal addToCart function that works with both pages
function addToCart(...args) {
    let cartItem;
    
    // Pattern 1: Called from index.html with complete item object
    // addToCart({productId: 1, name: "...", ...})
    if (args.length === 1 && typeof args[0] === 'object') {
        cartItem = args[0];
    } 
    // Pattern 2: Called from menu.html with separate parameters
    // addToCart(productId, size, quantity, product)
    else if (args.length >= 4) {
        const [productId, size, quantity, product] = args;
        cartItem = {
            productId: productId,
            name: product.name,
            size: size,
            price: product.price[size],
            quantity: quantity,
            image: product.image,
            category: product.category || 'nonveg'
        };
    } else {
        console.error("Invalid arguments to addToCart:", args);
        return;
    }

    // Find existing item in cart
    const existingIndex = cart.findIndex(item => 
        item.productId === cartItem.productId && item.size === cartItem.size
    );

    if (existingIndex !== -1) {
        // Update quantity if item exists
        cart[existingIndex].quantity += cartItem.quantity;
    } else {
        // Add new item to cart
        cart.push(cartItem);
    }
    
    updateCart();
}

// Update cart in localStorage and UI
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
    updateMiniCart();
}

// =============================================
// Cart UI Initialization
// =============================================

function initializeCart() {
    // Cart toggle functionality
    const cartCounter = document.getElementById('cart-counter');
    const miniCart = document.getElementById('mini-cart');
    const closeCart = document.getElementById('close-cart');
    
    if (cartCounter && miniCart) {
        cartCounter.addEventListener('click', () => {
            miniCart.classList.toggle('show');
        });
        
        // Close cart when clicking outside
        document.addEventListener('click', (e) => {
            if (!miniCart.contains(e.target) && e.target !== cartCounter) {
                miniCart.classList.remove('show');
            }
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
    
    // UPI Modal
    const upiModal = document.getElementById('upi-modal');
    const upiClose = document.querySelector('.upi-close');
    
    if (upiClose) {
        upiClose.addEventListener('click', closeUPIModal);
    }
    
    // Close modal when clicking outside
    if (upiModal) {
        window.addEventListener('click', (e) => {
            if (e.target === upiModal) {
                closeUPIModal();
            }
        });
    }
    
    // Initialize cart display
    updateCartCounter();
    updateMiniCart();
}

// =============================================
// UPI Payment Functions
// =============================================

function showUPIPayment(amount) {
    const upiId = 'v362811@oksbi'; // Your UPI ID
    const paymentLink = `upi://pay?pa=${upiId}&pn=SpicyDelights&am=${amount}&cu=INR`;
    
    // Set payment details
    const paymentAmount = document.getElementById('payment-amount');
    const upiPayLink = document.getElementById('upi-pay-link');
    
    if (paymentAmount) paymentAmount.textContent = amount;
    if (upiPayLink) upiPayLink.href = paymentLink;
    
    // Generate QR code
    const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(paymentLink)}`;
    const upiQrCode = document.getElementById('upi-qr-code');
    if (upiQrCode) upiQrCode.innerHTML = `<img src="${qrCodeURL}" alt="UPI QR Code">`;
    
    // Show modal
    const upiModal = document.getElementById('upi-modal');
    if (upiModal) upiModal.style.display = 'block';
    
    // Try to open UPI app directly
    setTimeout(() => {
        window.location.href = paymentLink;
    }, 300);
}

function closeUPIModal() {
    const upiModal = document.getElementById('upi-modal');
    if (upiModal) upiModal.style.display = 'none';
}

// =============================================
// Initialize and Expose Functions
// =============================================

document.addEventListener('DOMContentLoaded', initializeCart);

// Make functions available globally
window.addToCart = addToCart;
window.showUPIPayment = showUPIPayment;
window.closeUPIModal = closeUPIModal;
