document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll("a[data-scroll]");
  const sidebarLinks = document.querySelectorAll(".sidebar-nav a");
  const navbarLinks = document.querySelectorAll(".navbar-nav a");
  let previousIndex = localStorage.getItem("previousIndex");

  scrollLinks.forEach(function (link, index) {
    link.addEventListener("click", function (event) {
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
        localStorage.setItem("previousIndex", previousIndex);
      }
    });
  });
});
