const contactForm = document.getElementById("contact-form");
if (!contactForm) {
    console.warn("⚠️ Contact form not found!");
}else{

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const button = contactForm.querySelector("button");

    button.textContent = "Sending...";
    button.disabled = true;

    emailjs
      .send("service_nj69bcz","template_udeqfth", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      })
      .then(
        function () {
          contactForm.reset();
          button.textContent = "Message Sent!";
          setTimeout(() => {
            button.textContent = "Send Message";
            button.disabled = false;
          }, 3000);
        },
        function (error) {
          console.error("EmailJS error:", error);
          button.textContent = "Error Sending";
          setTimeout(() => {
            button.textContent = "Send Message";
            button.disabled = false;
          }, 3000);
        }
      );
  });
}