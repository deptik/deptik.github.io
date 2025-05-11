const img = document.getElementById('cat-image');

let isAngry = false;

function toggleImage() {
 isAngry = !isAngry;
 img.src = isAngry
 ? 'img/katze-boese.jpg'
 : 'img/katze-gluecklich.jpg';
}

new window.cursorEffects.emojiCursor({emoji: ["🥹"]});
// Desktop
img.addEventListener('mouseenter', () => {
 if (!isAngry) toggleImage();
});
img.addEventListener('mouseleave', () => {
 if (isAngry) toggleImage();
});
img.addEventListener('click', toggleImage);

// Mobile
img.addEventListener('touchstart', () => {
 toggleImage();
});
