document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    
    document.querySelectorAll('.error').forEach(span => span.innerText = '');

    
    if (!username) {
        document.getElementById('usernameError').innerText = 'Username is required.';
        isValid = false;
    }

    if (!email) {
        document.getElementById('emailError').innerText = 'Email is required.';
        isValid = false;
    }

    if (!phone) {
        document.getElementById('phoneError').innerText = 'Phone number is required.';
        isValid = false;
    }

    if (!password) {
        document.getElementById('passwordError').innerText = 'Password is required.';
        isValid = false;
    }

    if (!confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Confirm Password is required.';
        isValid = false;
    }

    
    if (phone && !/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').innerText = 'Phone number must be 10 digits long and contain only numeric values.';
        isValid = false;
    }

  
    if (email && !/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/.test(email)) {
        document.getElementById('emailError').innerText = 'Email address must be in the format: username@domain.xxx (e.g., user@example.com).';
        isValid = false;
    }

    if (password && (password.length < 7 || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[&$#@]/.test(password))) {
        document.getElementById('passwordError').innerText = 'Password must be at least 7 characters long, contain at least one uppercase letter, one digit, and one special character from the set (&, $, #, @).';
        isValid = false;
    }

  
    if (password && confirmPassword && password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
        isValid = false;
    }

s
    if (isValid) {
        alert('Registration successful!');
        // You can uncomment the line below to actually submit the form
        // this.submit();
    }
});
