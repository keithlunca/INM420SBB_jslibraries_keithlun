// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,  // Make pagination dots clickable
    },
});

// Initialize Granim.js
var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});

// GSAP Animation for Navbar
gsap.from(".navbar", {
    duration: 1,
    y: -100,
    ease: "power2.out"
});

gsap.from("#header", {
    duration: 1.5,
    opacity: 0,
    y: -50,
    delay: 0.5,
    ease: "power2.out"
});

// Add event listener to the Services link
document.querySelector('a[href="services.html"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Create the transition animation
    gsap.to(document.body, {
        duration: 1,
        opacity: 0,
        onComplete: function() {
            // Redirect to services.html after the animation completes
            window.location.href = "services.html";
        }
    });
});