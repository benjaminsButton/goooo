
console.log("starting..")
document.addEventListener('DOMContentLoaded', function () {
    
    window.addEventListener('scroll', lazyLoad);
    const scroll = new LocomotiveScroll({
       
        el: document.querySelector('[data-scroll-container]'), 
        
      
        smooth: true, 
        
        
        smoothMobile: true, 
        
       
        inertia: 0.3
    });
});


window.onload = () => {
    const image = document.querySelector('.fade-slide-image');
    typeWriter();
    
    image.style.opacity = 1;        
    image.style.transform = 'translateX(0)'; 
};
const lazyImages = document.querySelectorAll('img[data-src]');

function lazyLoad() {
    lazyImages.forEach(function (img) {
        if (img.getBoundingClientRect().top <= window.innerHeight) {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        }
    });
}


 


const text = "Hey this is my website! I'm Ben."
let i = 0;
const speed = 50;

function typeWriter() {
    if (i < text.length) {
        document.querySelector('.about-me').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

const datascrollEls = document.querySelectorAll('[data-scroll]');

function checkVisible() {
    console.log('WORKING!!!');

    datascrollEls.forEach(function (el) {
        const rect = el.getBoundingClientRect();
        
   
        

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            if (!el.classList.contains('is-inview')) {
                el.classList.add('is-inview');
                console.log("NOT IN VIEW!!");
            }
        } else {
            if (el.classList.contains('is-inview')) {
                el.classList.remove('is-inview');
                console.log("IN VIEW!!!");
            }
        }
    });
}


document.addEventListener('scroll', checkVisible);







document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();  // Prevent  default anchor 
            location.reload();      // Reload the page
        });
    });
});