// Cart System - Shared across all pages
let cart = JSON.parse(localStorage.getItem('cart')) || [];

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

// Add to cart function (called from product pages)
function addToCart(productId, size, quantity, product) {
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

// Update cart in localStorage and UI
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
    updateMiniCart();
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
    // Cart toggle functionality
    const cartCounter = document.getElementById('cart-counter');
    const miniCart = document.getElementById('mini-cart');
    const closeCart = document.getElementById('close-cart');
    
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
    
    // UPI Modal
    const upiClose = document.querySelector('.upi-close');
    if (upiClose) {
        upiClose.addEventListener('click', closeUPIModal);
    }
    
    // Initialize cart display
    updateCartCounter();
    updateMiniCart();
});

// UPI Payment Functions
function showUPIPayment(amount) {
    const upiId = 'v362811@oksbi'; // REPLACE WITH YOUR UPI ID
    const paymentLink = `upi://pay?pa=${upiId}&pn=SpicyDelights&am=${amount}&cu=INR`;
    
    // Set payment details
    const paymentAmount = document.getElementById('payment-amount');
    const upiPayLink = document.getElementById('upi-pay-link');
    
    if (paymentAmount) paymentAmount.textContent = amount;
    if (upiPayLink) upiPayLink.href = paymentLink;
    
    // Generate QR code (using free API)
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

// Make functions available globally
window.addToCart = addToCart;
window.showUPIPayment = showUPIPayment;
window.closeUPIModal = closeUPIModal;