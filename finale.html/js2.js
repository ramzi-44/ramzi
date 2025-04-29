const backToTopBtn = document.createElement("button");
backToTopBtn.innerHTML = "↑";
backToTopBtn.className = "back-to-top";
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 500 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});