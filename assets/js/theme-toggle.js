document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");
  const moonIcon = document.getElementById("moon-icon");
  const sunIcon = document.getElementById("sun-icon");
  const body = document.body;

  // Function to toggle the theme
  function toggleTheme() {
    if (body.classList.contains("dark-mode")) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  }

  // Function to set the light theme
  function setLightTheme() {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
  }

  // Function to set the dark theme
  function setDarkTheme() {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
  }

  checkbox.addEventListener("change", toggleTheme);

  // Check the saved theme in local storage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    setDarkTheme();
    checkbox.checked = true;
  } else {
    setLightTheme();
    checkbox.checked = false;
  }
});
