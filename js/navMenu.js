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

// Select the search button and container where the input will be added
const searchButton = document.querySelector('.search-btn');
const searchContainer = document.querySelector('.search-container');
let inputContainer; // To keep reference of inputContainer

// Add event listener to search button
searchButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent this event from closing the input field

    // Check if the input field already exists
    if (!document.querySelector('.sub-menu-search')) {
        // Create the input container
        inputContainer = document.createElement('div');
        inputContainer.classList.add('sub-menu-search');
        
        // Create the input field
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.placeholder = 'Search...';
        inputField.classList.add('search-field');
        
        // Append input field to the container
        inputContainer.appendChild(inputField);
        
        // Append the container to the search container in the DOM
        searchContainer.appendChild(inputContainer);
    }
});

// Add event listener to the document to close the search input when clicked outside
document.addEventListener('click', function(event) {
    // If the click happens outside the search button or inputContainer, hide it
    if (inputContainer && !searchButton.contains(event.target) && !inputContainer.contains(event.target)) {
        inputContainer.remove();
    }
});