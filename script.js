const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            contactForm.reset();
            window.location.href = "#home";
        }
    });
}