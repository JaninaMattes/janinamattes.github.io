document.addEventListener("DOMContentLoaded", function () {
  const sidebarLinks = document.querySelectorAll(".sidebar-item a");
  const navbarLinks = document.querySelectorAll(".navbar-nav a");
  const sidebarScrollLinks = document.querySelectorAll("a[sidebar-data-scroll]");
  const navbarScrollLinks = document.querySelectorAll("a[navbar-data-scroll]");
  let previousIndex = null;

  // Helper function to handle link clicks
  function handleLinkClick(event, index) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (previousIndex !== null) {
      sidebarLinks[previousIndex].classList.remove("selected");
      navbarLinks[previousIndex].classList.remove("selected");
    }

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      sidebarLinks[index].classList.add("selected");
      navbarLinks[index].classList.add("selected");
      previousIndex = index;
    }
  }

  // Initialize previousIndex if it's null
  if (previousIndex === null) {
    previousIndex = 0;
    sidebarLinks[previousIndex].classList.add("selected");
    navbarLinks[previousIndex].classList.add("selected");
  }

  // Add click event listeners to navbar scroll links
  navbarScrollLinks.forEach(function (link, index) {
    link.addEventListener("click", function (event) {
      handleLinkClick.call(this, event, index);
    });
  });

  // Add click event listeners to sidebar scroll links
  sidebarScrollLinks.forEach(function (link, index) {
    link.addEventListener("click", function (event) {
      handleLinkClick.call(this, event, index);
    });
  });
});
