// For desktop (mouse)
gameArea.addEventListener('mousemove', moveBowl);

// For mobile (touch)
gameArea.addEventListener('touchmove', (e) => {
    const touch = e.touches[0]; // get the first touch
    moveBowl(touch);
}, {passive: false}); // prevent default scrolling

// Function to move the bowl
function moveBowl(e) {
    if (gameWon) return;
    const rect = gameArea.getBoundingClientRect();
    let clientX = e.clientX || e.pageX; // support both mouse and touch
    bowlX = clientX - rect.left - bowl.offsetWidth / 2;
    if (bowlX < 0) bowlX = 0;
    if (bowlX > rect.width - bowl.offsetWidth) bowlX = rect.width - bowl.offsetWidth;
    bowl.style.left = bowlX + 'px';
}
