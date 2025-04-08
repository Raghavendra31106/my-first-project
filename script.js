let cart = [];

        function addToCart(title, author, price) {
            cart.push({ title, author, price });
            updateCartDisplay();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartDisplay();
        }

        function updateCartDisplay() {
            const cartItemsContainer = document.getElementById('cartItems');
            cartItemsContainer.innerHTML = '';

            cart.forEach((item, index) => {
                const cartItem = document.createElement('li');
                cartItem.innerHTML = `${item.title} by ${item.author} - ${item.price} 
                    <button onclick="removeFromCart(${index})">Remove</button>`;
                cartItemsContainer.appendChild(cartItem);
            });
        }

        function searchBooks() {
            const input = document.getElementById('searchInput').value.toLowerCase();
            const books = document.querySelectorAll('.book');
            books.forEach(function(book) {
                const title = book.getAttribute('data-title').toLowerCase();
                if (title.includes(input)) {
                    book.style.display = 'inline-block'; // Keep the book visible if matched
                } else {
                    book.style.display = 'none'; // Hide if it doesn't match
                }
            });
        }

        function submitForm(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Thank you for contacting us, we will get back to you soon!');
                document.getElementById('contactForm').reset();
            }
        }