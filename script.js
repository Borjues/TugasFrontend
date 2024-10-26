// Memilih variant dalam class masing-masing
var modal = document.getElementById("subscribeModal");

var btn = document.getElementById("subscribeBtn");

var options = document.getElementById("options");

var closeBtn = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "flex";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* Payment */

paymentBtn.onclick = function(event) {
  event.preventDefault();
  options.style.display = "block";
}

/* Subscribed */

document.addEventListener("DOMContentLoaded", function() {
  const confirmPaymentButton = document.getElementById("confirmPayment");
  const subscribeButton = document.getElementById("subscribeBtn");
  const alertMessage = document.getElementById("alertMessage");

  confirmPaymentButton.addEventListener("click", function() {
   
    alertMessage.classList.remove("d-none");
    subscribeButton.textContent = "Subscribed";
    subscribeButton.disabled = true; 
  });
});

/* script transisi*/

document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in");
  const counters = document.querySelectorAll(".counter-value");


  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function showOnScroll() {
    fadeInElements.forEach((el) => {
      if (isInViewport(el)) {
        el.classList.add("show");
      }
    });
  }

  function countUp() {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const updateCount = () => {
        const current = +counter.innerText;
        const increment = target / 100; 
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }

  window.addEventListener("scroll", function () {
    showOnScroll();
    if (isInViewport(document.getElementById("stats"))) {
      countUp();
      window.removeEventListener("scroll", arguments.callee);
    }
  });

  showOnScroll();
});


/**/

document.getElementById('hamburger').addEventListener('click', function () {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
});

/*burger */

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');

  hamburgerBtn.addEventListener('click', function () {
    hamburgerBtn.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
  });
});


/**/ 

const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  mobileNav.classList.toggle('is-active');
});

