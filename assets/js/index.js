$(document).ready(() => {
$('.hamburger').click(function() {
    $('.nav-bg').toggleClass('active');
    $(this).toggleClass('active')
});
});

document.addEventListener('DOMContentLoaded', () => {
    navUpDown();
    initLoader();
});

function navUpDown() {
    let new_scroll_position = 0;
    let last_scroll_position;
    let nav = document.querySelector('.nav-up-down');

    window.addEventListener('scroll', (e) => {
        last_scroll_position = window.scrollY;

        if(new_scroll_position < last_scroll_position && last_scroll_position > 80) {
            nav.classList.remove('slide-down');
            nav.classList.add('slide-up');
        } else if (new_scroll_position > last_scroll_position) {
            nav.classList.remove('slide-up');
            nav.classList.add('slide-down');
        }
        new_scroll_position = last_scroll_position
    })
}


function initLoader() {
        var tl = gsap.timeline();

        tl.from(" .once-in", {
        duration: 3.3,
        xPercent: 200,
        ease: "Expo.easeOut",
    }, "<0.1");

    }

gsap.registerPlugin(ScrollTrigger);

let revealContainers = document.querySelectorAll(".home-intro .thumbnail"); // Use .thumbnail to target the container

revealContainers.forEach((container) => {
  let image = container.querySelector("img"); // Correctly select the <img> within the container
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "0% 60%", // Adjust as needed
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -100,
    ease: Power2.out
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out
  });
});


