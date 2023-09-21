const sidebarItems = document.querySelectorAll(".sidebar-item");

sidebarItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Reset the scale
    sidebarItems.forEach((otherItem) => {
      otherItem.classList.remove("selected");
      const line = otherItem.querySelector(".sidebar-line");
      line.style.transform = "scale(1)";
    });

    // Adjust the scale
    item.classList.add("selected");
    const line = item.querySelector(".sidebar-line");
    line.style.transform = "scale(1.6)";
  });
});
