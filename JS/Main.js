var navbar = document.getElementById("navbar");

// Add a scroll event listener to the window
window.onscroll = function() {
  // Get the current scroll position
  var scrollPos = window.pageYOffset || document.documentElement.scrollTop;

  // If the scroll position is greater than the height of the navbar, set the position to fixed
  if (scrollPos > navbar.offsetHeight) {
    navbar.style.position = "fixed";
  } else {
    navbar.style.position = "relative";
  }
};