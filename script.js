/*
  CHOCOLUX SITE SETTINGS
  1. Replace the placeholder WhatsApp number below with your number.
  2. Use country code only, with no +, spaces, or dashes. Example Pakistan: 923001234567
  3. Update product prices and pack sizes in each product card.
*/
const CHOCOLUX_WHATSAPP = "923001234567"; // REPLACE WITH YOUR REAL WHATSAPP NUMBER

function makeWhatsAppLink(message) {
  return `https://wa.me/${CHOCOLUX_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-order]").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product || "Chocolux products";
    const message = `Hello Chocolux! I would like to ask about: ${product}. Please share availability and prices.`;
    if (CHOCOLUX_WHATSAPP === "923001234567") {
      alert("Please update CHOCOLUX_WHATSAPP in script.js with your real WhatsApp number before accepting orders.");
      return;
    }
    window.open(makeWhatsAppLink(message), "_blank", "noopener,noreferrer");
  });
});

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  if (CHOCOLUX_WHATSAPP !== "923001234567") {
    link.href = makeWhatsAppLink("Hello Chocolux! I would like to know more about your dates and products.");
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Please update CHOCOLUX_WHATSAPP in script.js with your real WhatsApp number.");
    });
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const filterButtons = document.querySelectorAll("[data-filter]");
const catalogProducts = document.querySelectorAll("[data-category]");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    catalogProducts.forEach((product) => {
      product.hidden = filter !== "all" && product.dataset.category !== filter;
    });
  });
});

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const fullMessage = `Hello Chocolux!\nName: ${name}\nPhone: ${phone}\nEmail: ${email || "Not provided"}\nInquiry: ${subject}\nMessage: ${message}`;
    if (CHOCOLUX_WHATSAPP === "923001234567") {
      alert("Please update CHOCOLUX_WHATSAPP in script.js with your real WhatsApp number to send this inquiry.");
      return;
    }
    window.open(makeWhatsAppLink(fullMessage), "_blank", "noopener,noreferrer");
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
