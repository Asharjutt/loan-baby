function toggleNavbar() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  }

  


  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const cardContainer = document.querySelector(".card-container");
  
    // Function to check if element is in viewport
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }
  
    // Function to animate cards
    function animateCards() {
      if (isInViewport(cardContainer)) {
        cards.forEach((card) => {
          card.style.opacity = 1; // Make visible
        });
        window.removeEventListener("scroll", animateCards); // Remove scroll event after animation
      }
    }
  
    // Attach scroll event
    window.addEventListener("scroll", animateCards);
  });

  














  document.addEventListener("DOMContentLoaded", function () {
    const animatedImage = document.querySelector(".animated-image");

    // Function to check if element is in viewport
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Function to animate the image
    function animateImage() {
        if (isInViewport(animatedImage)) {
            animatedImage.style.opacity = 2; // Fade in
            animatedImage.style.transform = "translateY(0)"; // Move to original position
            window.removeEventListener("scroll", animateImage); // Remove event after animation
        }
    }

    // Attach scroll event
    window.addEventListener("scroll", animateImage);
});





let currentIndex = 0;

function changeSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    items[currentIndex].classList.remove('active'); // Remove active class from current

    currentIndex = (currentIndex + direction + items.length) % items.length; // Update currentIndex
    items[currentIndex].classList.add('active'); // Add active class to new current

    // Move the carousel to the new position
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto change slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);















document.addEventListener("DOMContentLoaded", function () {
    const bannerImage = document.querySelector(".banner-image");

    // Function to check if the element is in the viewport
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Function to animate the banner image
    function animateBanner() {
        if (isInViewport(bannerImage)) {
            bannerImage.classList.add('show'); // Add class to trigger animation
            window.removeEventListener('scroll', animateBanner); // Remove event after animation
        }
    }

    // Attach scroll event
    window.addEventListener('scroll', animateBanner);
});


document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.about-us, .vision');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
});





