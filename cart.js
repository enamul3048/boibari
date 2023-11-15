document.addEventListener('DOMContentLoaded', () => {
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Retrieve the cart data from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to update the cart display and total
    function updateCartDisplay() {
        cartItemsList.innerHTML = ''; // Clear existing items
        let total = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${item.product}: ${item.price.toFixed(2)}`;

            // Add a remove button to the cart item
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-from-cart');

            removeButton.addEventListener('click', () => {
                // Remove the item from the cart array
                cart.splice(index, 1);

                // Update localStorage with the modified cart
                localStorage.setItem('cart', JSON.stringify(cart));

                // Update the cart display and total
                updateCartDisplay();
            });

            cartItem.appendChild(removeButton);
            cartItemsList.appendChild(cartItem);

            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
    }

    // Initial cart display
    updateCartDisplay();
});
