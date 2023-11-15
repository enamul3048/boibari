document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = parseFloat(button.getAttribute('data-price'));

            // Get the existing cart or create an empty one
            const cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Add the selected product to the cart
            cart.push({ product, price });

            // Store the updated cart in localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Redirect to the cart page
            window.location.href = 'cart.html';
        });
    });
});
