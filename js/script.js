/* ------- menu --------- */
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
        menu.style.transition = "trasform 0.5s ease";
    });
});

menu.addEventListener("transitioned", function(){
    this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
    arrow.addEventListener("click", function() {
        this.closest(".dropdown").classList.toggle("active")
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const switcherButton = document.getElementById("switcher");
    const contentInfoSlider = document.querySelector(".content-info-slider");
    const contentInfo = document.querySelector(".hero .content-info");

    // Initial states
    contentInfo.style.display = "none"; // hide content-info initially
    contentInfoSlider.style.display = "block"; // show content-info-slider initially

    switcherButton.addEventListener("click", function() {
        // Toggle the display of the two sections
        if (contentInfo.style.display === "none") {
            contentInfo.style.display = "flex"; // show content-info
            contentInfoSlider.style.display = "none"; // hide content-info-slider
        } else {
            contentInfo.style.display = "none"; // hide content-info
            contentInfoSlider.style.display = "block"; // show content-info-slider
        }
    });
});