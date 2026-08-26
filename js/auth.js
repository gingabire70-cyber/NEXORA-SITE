import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase-config.js";

/* ==========================
   REGISTER PAGE
========================== */

const registerForm = document.querySelector("#registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = registerForm.querySelector('[name="email"]').value.trim();
        const password = registerForm.querySelector('[name="password"]').value;
        const confirmPassword = registerForm.querySelector('[name="confirmPassword"]').value;
        const errorEl = registerForm.querySelector(".field-error");
        const submitBtn = registerForm.querySelector('button[type="submit"]');

        errorEl.textContent = "";

        if (password !== confirmPassword) {
            errorEl.textContent = "Passwords do not match.";
            return;
        }

        if (password.length < 6) {
            errorEl.textContent = "Password must be at least 6 characters.";
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = "Creating account...";

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            window.location.href = "login.html?registered=true";
        } catch (error) {
            errorEl.textContent = friendlyError(error.code);
            submitBtn.disabled = false;
            submitBtn.textContent = "Create Account";
        }
    });
}

/* ==========================
   LOGIN PAGE
========================== */

const loginForm = document.querySelector("#loginForm");

if (loginForm) {
    // Show a message if arriving fresh from registering
    const params = new URLSearchParams(window.location.search);
    if (params.get("registered") === "true") {
        const note = document.createElement("p");
        note.className = "form-status success";
        note.textContent = "Account created! Please sign in.";
        loginForm.parentNode.insertBefore(note, loginForm);
    }

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = loginForm.querySelector('[name="email"]').value.trim();
        const password = loginForm.querySelector('[name="password"]').value;
        const errorEl = loginForm.querySelector(".field-error");
        const submitBtn = loginForm.querySelector('button[type="submit"]');

        errorEl.textContent = "";
        submitBtn.disabled = true;
        submitBtn.textContent = "Signing in...";

        try {
            await signInWithEmailAndPassword(auth, email, password);
            window.location.href = "../index.html";
        } catch (error) {
            errorEl.textContent = friendlyError(error.code);
            submitBtn.disabled = false;
            submitBtn.textContent = "Sign In";
        }
    });
}

/* ==========================
   ERROR MESSAGES
========================== */

function friendlyError(code) {
    switch (code) {
        case "auth/email-already-in-use":
            return "An account with this email already exists.";
        case "auth/invalid-email":
            return "That email address doesn't look right.";
        case "auth/weak-password":
            return "Password is too weak (minimum 6 characters).";
        case "auth/user-not-found":
        case "auth/wrong-password":
        case "auth/invalid-credential":
            return "Incorrect email or password.";
        default:
            return "Something went wrong. Please try again.";
    }
}
