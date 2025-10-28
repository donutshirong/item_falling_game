let isDragging = false;

// Start dragging on touchstart
gameArea.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  const rect = gameArea.getBoundingClientRect();
  const touchX = touch.clientX - rect.left;
  // Only start dragging if touch is near the bowl
  const bowlRect = bowl.getBoundingClientRect();
  if (touchX >= bowlRect.left - rect.left && touchX <= bowlRect.right - rect.left) {
    isDragging = true;
  }
}, {passive: false});

// Move the bowl while dragging
gameArea.addEventListener('touchmove', (e) => {
  if (!isDragging || gameWon) return;
  e.preventDefault(); // prevent scrolling
  const touch = e.touches[0];
  const rect = gameArea.getBoundingClientRect();
  bowlX = touch.clientX - rect.left - bowl.offsetWidth / 2;

  if (bowlX < 0) bowlX = 0;
  if (bowlX > rect.width - bowl.offsetWidth) bowlX = rect.width - bowl.offsetWidth;

  bowl.style.left = bowlX + 'px';
}, {passive: false});

// Stop dragging on touchend
gameArea.addEventListener('touchend', () => {
  isDragging = false;
});
