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

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    const status = document.createElement("p");
    status.className = "form-status";
    contactForm.appendChild(status);

    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('[name="name"]').value.trim();
        const email = contactForm.querySelector('[name="email"]').value.trim();
        const message = contactForm.querySelector('[name="message"]').value.trim();

        if (!name || !email || !message) {
            status.textContent = "Please fill in all fields.";
            status.className = "form-status error";
            return;
        }

        status.textContent = "Sending...";
        status.className = "form-status";

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: { "Accept": "application/json" }
            });

            if (response.ok) {
                status.textContent = "Thanks! Your message has been sent.";
                status.className = "form-status success";
                contactForm.reset();
            } else {
                status.textContent = "Something went wrong. Please try again.";
                status.className = "form-status error";
            }
        } catch (err) {
            status.textContent = "Network error. Please check your connection.";
            status.className = "form-status error";
        }
    });
}

/* ==========================
   LOGIN / REGISTER
   Now handled by js/auth.js using real Firebase Authentication
========================== */
