<!-- Add this script tag at the end of your HTML body -->
<
script >
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get the entered email value
            const emailInput = document.querySelector('input[type="text"][placeholder="email"]');
            const enteredEmail = emailInput.value.trim();

            // Check if the email is in a valid format
            if (isValidEmail(enteredEmail)) {
                // Email is valid, you can handle it as needed (e.g., send it to the server)
                alert('Email is valid: ' + enteredEmail);
            } else {
                // Email is not valid, you can show an error message or take appropriate action
                alert('Invalid email format!');
            }
        });

        // Function to validate email format
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    }); <
/script>