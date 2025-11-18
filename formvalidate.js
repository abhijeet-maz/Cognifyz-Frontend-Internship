document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const errorDiv = document.getElementById("error");
    errorDiv.innerText = "";

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = parseInt(document.getElementById("age").value.trim());
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms").checked;

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorDiv.innerText = "Please enter a valid email address.";
        return;
    }

    // Age validation
    if (age < 13 || age > 120) {
        errorDiv.innerText = "Age must be between 13 and 120.";
        return;
    }

    // Password Validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        errorDiv.innerText = "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
        return;
    }

    // Confirm Password
    if (password !== confirmPassword) {
        errorDiv.innerText = "Passwords do not match.";
        return;
    }

    if (!terms) {
        errorDiv.innerText = "You must agree to the terms and conditions.";
        return;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    this.reset();
});
