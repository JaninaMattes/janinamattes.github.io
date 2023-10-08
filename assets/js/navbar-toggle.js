document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navbarBrand = document.querySelector(".navbar-brand");
  
    if (navbarToggler) {
      navbarToggler.addEventListener("click", function () {
        navbarToggler.classList.toggle("active");
        if (window.innerWidth <= 767) {
          // Check if the screen width is less than or equal to 767px
          navbarBrand.style.visibility = 'hidden';
        }
      });
    }
  
    const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
  
    navbarLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navbarToggler.classList.remove("active");
        navbarCollapse.classList.remove("show");
      });
    });
  });
  