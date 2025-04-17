const cursor = document.querySelector(".custom-cursor");

if (cursor) {
  document.addEventListener("mousemove", (e) => {
    const cursorWidth = cursor.offsetWidth / 2;
    const cursorHeight = cursor.offsetHeight / 2;
    cursor.style.transform = `translate(${e.clientX - cursorWidth}px, ${e.clientY - cursorHeight}px)`;
    cursor.style.display = "block";
  });

  const links = document.querySelectorAll("a:not(footer a):not(.nav a):not(.marquee a):not(.social-link)");

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => cursor.classList.add("active"));
    link.addEventListener("mouseleave", () => cursor.classList.remove("active"));
  });

  const projectcards = document.querySelectorAll(".project-card");
  projectcards.forEach((card) => {
    card.addEventListener("mouseenter", () => cursor.classList.add("active"));
    card.addEventListener("mouseleave", () => cursor.classList.remove("active"));
  });
}