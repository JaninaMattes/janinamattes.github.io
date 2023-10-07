const sidebarItems = document.querySelectorAll(".sidebar-item");

sidebarItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    const clickedItem = event.currentTarget;

    if (!clickedItem.classList.contains("selected")) {
      // Reset the selected class and scaling transformation
      sidebarItems.forEach((otherItem) => {
        otherItem.classList.remove("selected");
        const line = otherItem.querySelector(".sidebar-line");
        line.style.transform = "scaleX(1)";
        line.style.opacity = 0.5;
      });
    }

    // Add the selected class to the clicked item and apply the scaling transformation
    clickedItem.classList.add("selected");
    const line = clickedItem.querySelector(".sidebar-line");
    line.style.transform = "scaleX(1.4)";
    line.style.opacity = 0;
  });
});
