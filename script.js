function showLogin() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

function showSignup() {
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}

let savedEmail = "";
let savedPassword = "";

document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("signupEmail").value.trim();
    let password = document.getElementById("signupPassword").value.trim();
    let message = document.getElementById("signupMessage");

    if (email === "" && password === "") {
        message.textContent = "Email and Password are required!";
        message.style.color = "red";
        return;
    }

    if (email === "") {
        message.textContent = "Email is required!";
        message.style.color = "red";
        return;
    }

    if (password === "") {
        message.textContent = "Password is required!";
        message.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        message.textContent = "Invalid email! Follow format: user@email.com";
        message.style.color = "orange";
        return;
    }

    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters!";
        message.style.color = "orange";
        return;
    }

    savedEmail = email;
    savedPassword = password;

    message.textContent = "Account created successfully! You can now Sign In.";
    message.style.color = "green";
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();
    let message = document.getElementById("loginMessage");

    if (email === "" && password === "") {
        message.textContent = "Email and Password are required!";
        message.style.color = "red";
        return;
    }

    if (email === "") {
        message.textContent = "Please enter your email!";
        message.style.color = "red";
        return;
    }

    if (password === "") {
        message.textContent = "Please enter your password!";
        message.style.color = "red";
        return;
    }

    if (email !== savedEmail) {
        message.textContent = "Account not found! Please create one first.";
        message.style.color = "orange";
        return;
    }

    if (password !== savedPassword) {
        message.textContent = "Incorrect password!";
        message.style.color = "orange";
        return;
    }

    message.textContent = "Login successful! Welcome!";
    message.style.color = "green";
});