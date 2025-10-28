let isDragging = false;

// Start dragging on touchstart anywhere in the game area
gameArea.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    const rect = gameArea.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;

    // Only start dragging if the touch is inside the bowl
    const bowlRect = bowl.getBoundingClientRect();
    const bowlLeft = bowlRect.left - rect.left;
    const bowlRight = bowlLeft + bowlRect.width;

    if (touchX >= bowlLeft && touchX <= bowlRight) {
        isDragging = true;
    }
}, { passive: false });

// Move the bowl while dragging
gameArea.addEventListener('touchmove', (e) => {
    if (!isDragging || gameWon) return;

    e.preventDefault(); // prevent scrolling

    const touch = e.touches[0];
    const rect = gameArea.getBoundingClientRect();
    let newBowlX = touch.clientX - rect.left - bowl.offsetWidth / 2;

    if (newBowlX < 0) newBowlX = 0;
    if (newBowlX > rect.width - bowl.offsetWidth) newBowlX = rect.width - bowl.offsetWidth;

    bowl.style.left = newBowlX + 'px';
}, { passive: false });

// Stop dragging on touchend or touchcancel
gameArea.addEventListener('touchend', () => {
    isDragging = false;
});
gameArea.addEventListener('touchcancel', () => {
    isDragging = false;
});

