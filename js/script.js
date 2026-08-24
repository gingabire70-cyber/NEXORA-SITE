/* ==========================
   MOBILE MENU
   (only runs on pages that have a nav + menu-toggle)
========================== */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

/* ==========================
   CONTACT FORM (index.html)
========================== */

const contactForm = document.querySelector(".contact form");

if (contactForm) {
    const status = document.createElement("p");
    status.className = "form-status";
    contactForm.appendChild(status);

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('[name="name"]').value.trim();
        const email = contactForm.querySelector('[name="email"]').value.trim();
        const message = contactForm.querySelector('[name="message"]').value.trim();

        if (!name || !email || !message) {
            status.textContent = "Please fill in all fields.";
            status.className = "form-status error";
            return;
        }

        // No backend connected yet — this just confirms the form works.
        // Replace this block with a fetch() call to your server/email API.
        status.textContent = "Thanks! Your message has been noted.";
        status.className = "form-status success";
        contactForm.reset();
    });
}

/* ==========================
   LOGIN FORM (pages/login.html)
========================== */

const loginForm = document.querySelector(".login-box form");

if (loginForm && loginForm.querySelector('[name="username"]')) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = loginForm.querySelector('[name="username"]').value.trim();
        const password = loginForm.querySelector('[name="password"]').value.trim();
        const errorEl = loginForm.querySelector(".field-error");

        if (!username || !password) {
            if (errorEl) errorEl.textContent = "Enter both username and password.";
            return;
        }

        if (errorEl) errorEl.textContent = "";

        // No backend connected yet — this is where you'd call your auth API.
        alert("Login submitted (no backend connected yet).");
    });
}

/* ==========================
   REGISTER FORM (pages/register.html)
========================== */

const registerForm = document.querySelector(".login-box form");

if (registerForm && registerForm.querySelector('[name="confirmPassword"]')) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const password = registerForm.querySelector('[name="password"]').value;
        const confirm = registerForm.querySelector('[name="confirmPassword"]').value;
        const errorEl = registerForm.querySelector(".field-error");

        if (password !== confirm) {
            if (errorEl) errorEl.textContent = "Passwords do not match.";
            return;
        }

        if (errorEl) errorEl.textContent = "";

        // No backend connected yet — this is where you'd call your signup API.
        alert("Registration submitted (no backend connected yet).");
    });
}