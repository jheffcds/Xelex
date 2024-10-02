let images = ["assets/images/1.png", "assets/images/2.png", "assets/images/3.png"];
let currentIndex = 0;

// Get the image element
const imageElement = document.querySelector('.image-intro img');

// Function to change the image
function changeImage() {
    // Remove the stack-in animation from the current image
    imageElement.classList.remove('stack-in');

    // Add the stack-out animation
    imageElement.classList.add('stack-out');

    // Wait for the stack-out animation to complete before changing the image
    setTimeout(() => {
        // Update the image source
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];

        // Remove the stack-out animation
        imageElement.classList.remove('stack-out');

        // Add the stack-in animation for the new image
        imageElement.classList.add('stack-in');
    }, 800); // Match this timeout with the animation duration (0.8s)
}

// Initial setup to display the first image
imageElement.src = images[currentIndex];
imageElement.classList.add('stack-in');

// Change image every 4 seconds
setInterval(changeImage, 4000);


document.querySelectorAll('.dropdown-content a').forEach(function (languageOption) {
    languageOption.addEventListener('click', function (event) {
        event.preventDefault();
        const selectedLang = event.target.getAttribute('href');
        window.location.href = selectedLang; // Redirect to the selected language page
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 1;
    const totalSlides = 6; // Total number of slides
    const intervalTime = 5000; // 5 seconds per slide
    let slideInterval;

    // Function to move to the next slide
    function nextSlide() {
        currentSlide = (currentSlide % totalSlides) + 1; // Go to the next slide, loop back to the first
        document.getElementById('slide' + currentSlide).checked = true;
    }

    // Function to start the slide transition interval
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    // Function to stop the slide transition interval
    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // Automatically switch slides every 5 seconds
    startSlideShow();

    // Pause the slideshow on hover
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.addEventListener('mouseover', stopSlideShow);
    sliderWrapper.addEventListener('mouseout', startSlideShow);
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