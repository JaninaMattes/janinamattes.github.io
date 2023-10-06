document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname === "/") {
    const overlay = document.getElementById("overlay");
    overlay.style.opacity = "0";
    
    setTimeout(function () {
      window.location.href = "/profile";
      overlay.remove();
    }, 1000);
  
  } else {
    overlay.remove();
  }
});
