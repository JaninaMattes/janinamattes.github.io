document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll("a[data-scroll]");
  const sidebarLinks = document.querySelectorAll(".sidebar-link");

  scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        scrollLinks.forEach(function (otherLink) {
          otherLink.classList.remove("selected");
        });

        this.classList.add("selected");

        sidebarLinks.forEach(function (sidebarLink) {
          const sidebarTargetId = sidebarLink.getAttribute("href").substring(1);
          if (sidebarTargetId === targetId) {
            sidebarLink.classList.add("selected");
          } else {
            sidebarLink.classList.remove("selected");
          }
        });
      }
    });
  });
});
