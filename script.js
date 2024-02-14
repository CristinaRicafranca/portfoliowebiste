// JavaScript code for toggling dark mode
const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Get the SVG path element
const iconPath = document.getElementById('icon-path');

// Add event listeners for mouseenter and mouseleave
iconPath.addEventListener('mouseenter', function() {
  // Change the fill color to cyan when hovered
  this.style.fill = 'white';
});

iconPath.addEventListener('mouseleave', function() {
  // Change the fill color back to the original color when not hovered
  this.style.fill = '#07FFE1';
});

function changeColor(svgElement, color) {
    var paths = svgElement.querySelectorAll("path");
    paths.forEach(function(path) {
        path.setAttribute("fill", color);
    });
}

