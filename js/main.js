/**
 * KORA — Site behaviour
 * Vanilla JS, no build step required. Progressive-enhancement only:
 * every page must remain usable with this file absent.
 */

/* ---------- Toast ---------- */
function koraToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 6 9 17l-5-5"/>
      </svg>
      <span data-toast-text></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector("[data-toast-text]").textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

/* ---------- Mobile nav + search ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const navClose = document.querySelector("[data-nav-close]");

  const openNav = () => {
    mobileNav?.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };
  const closeNav = () => {
    mobileNav?.classList.remove("is-open");
    document.body.style.overflow = "";
  };
  navToggle?.addEventListener("click", openNav);
  navClose?.addEventListener("click", closeNav);
  mobileNav?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));

  const searchToggle = document.querySelector("[data-search-toggle]");
  const searchPanel = document.querySelector("[data-search-panel]");
  searchToggle?.addEventListener("click", () => {
    const isOpen = searchPanel.classList.toggle("is-open");
    if (isOpen) searchPanel.querySelector("input")?.focus();
  });

  const searchForm = document.querySelector("[data-search-form]");
  searchForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = new FormData(searchForm).get("q");
    if (q && q.trim()) {
      window.location.href = `shop.html?q=${encodeURIComponent(q.trim())}`;
    }
  });

  /* ---------- Newsletter ---------- */
  document.querySelectorAll("[data-newsletter-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailField = form.querySelector('input[type="email"]');
      if (!emailField.checkValidity()) {
        emailField.focus();
        return;
      }
      const success = form.querySelector("[data-form-success]");
      form.reset();
      if (success) success.classList.add("is-visible");
      koraToast("You're on the list — welcome to Kora.");
    });
  });

  /* ---------- Contact form (client-side validation demo) ---------- */
  const contactForm = document.querySelector("[data-contact-form]");
  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    contactForm.querySelectorAll("[data-field]").forEach((field) => {
      const input = field.querySelector("input, select, textarea");
      if (!input.checkValidity()) {
        field.classList.add("has-error");
        valid = false;
      } else {
        field.classList.remove("has-error");
      }
    });
    const msg = contactForm.querySelector("[data-form-msg]");
    if (valid) {
      contactForm.reset();
      if (msg) {
        msg.textContent = "Message sent — our team replies within one business day.";
        msg.classList.add("is-visible");
      }
    } else if (msg) {
      msg.textContent = "";
      msg.classList.remove("is-visible");
    }
  });

  /* ---------- Countdown (next drop) ---------- */
  const countdownEl = document.querySelector("[data-countdown]");
  if (countdownEl) {
    const target = new Date();
    target.setDate(target.getDate() + 4);
    target.setHours(target.getHours() + 6);

    const dEl = countdownEl.querySelector("[data-c-d]");
    const hEl = countdownEl.querySelector("[data-c-h]");
    const mEl = countdownEl.querySelector("[data-c-m]");

    function tick() {
      const diff = Math.max(0, target - new Date());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      if (dEl) dEl.textContent = String(d).padStart(2, "0");
      if (hEl) hEl.textContent = String(h).padStart(2, "0");
      if (mEl) mEl.textContent = String(m).padStart(2, "0");
    }
    tick();
    setInterval(tick, 30000);
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "none";
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      el.style.transition = "opacity 640ms cubic-bezier(.22,1,.36,1), transform 640ms cubic-bezier(.22,1,.36,1)";
      io.observe(el);
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
