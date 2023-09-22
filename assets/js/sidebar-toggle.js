const sidebarItems = document.querySelectorAll(".sidebar-item");

sidebarItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    const clickedItem = event.currentTarget;

    if (!clickedItem.classList.contains("selectedItem")) {
      // Reset the selected class and scaling transformation
      sidebarItems.forEach((otherItem) => {
        otherItem.classList.remove("selectedItem");
        const line = otherItem.querySelector(".sidebar-line");
        line.style.transform = "scaleX(1)";
      });
    }

    // Add the selected class to the clicked item and apply the scaling transformation
    clickedItem.classList.add("selectedItem");
    const line = clickedItem.querySelector(".sidebar-line");
    line.style.transform = "scaleX(1.6)";
  });
});
