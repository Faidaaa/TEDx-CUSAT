document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('fade-up')) {
                    entry.target.classList.add('fade-in');
                } else if (entry.target.classList.contains('fade-left')) {
                    entry.target.classList.add('fade-in-left');
                }
                observer.unobserve(entry.target); // Optional: animate only once
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.fade-up, .fade-left').forEach(el => {
        observer.observe(el);
    });

    // Add staggered delay to title letters
    const letters = document.querySelectorAll('.title-kaleidoscope span');
    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.1}s`;
    });

    // Countdown Timer logic
    const countDownDate = new Date("Oct 24, 2026 09:00:00").getTime();
    
    // Update the count down every 1 second
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        
        const daysEl = document.getElementById("days");
        if (!daysEl) return; // Exit if not on page with countdown
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            daysEl.innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        daysEl.innerHTML = days < 10 ? '0' + days : days;
        document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;
    }, 1000);
});
