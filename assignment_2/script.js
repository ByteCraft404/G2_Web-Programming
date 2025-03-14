
document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        isValid = false;
    }
    
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
        isValid = false;
    }
    
    if (isValid) {
        alert("Subscription successful!");
    }
});
