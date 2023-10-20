const elements = document.querySelectorAll('.skill');

function addHoveredClass() {
  elements.forEach(element => {
    element.classList.add('hovered');
  });
}

function removeHoveredClass() {
  elements.forEach(element => {
    element.classList.remove('hovered');
  });
}

function verifyWidth() {
  if (window.innerWidth <= 500) {
    addHoveredClass();
  } else {
    removeHoveredClass();
  }
}

window.addEventListener('resize', verifyWidth);

verifyWidth();

elements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    if (window.innerWidth > 500) {
      element.classList.add('hovered');
    }
  });

  element.addEventListener('mouseleave', () => {
    if (window.innerWidth > 500) {
      setTimeout(() => {
        element.classList.remove('hovered');
      }, 300);
    }
  });
});
