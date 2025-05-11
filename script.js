const img = document.getElementById('cat-image');
const btn = document.getElementById('flashlight-btn');

let isAngry = false;
let flashlightOn = false;

// Bild wechseln
function toggleImage() {
  isAngry = !isAngry;
  img.src = isAngry
    ? 'img/katze-boese.jpg'
    : 'img/katze-gluecklich.jpg';
}

// Hover-Ereignisse (nicht mehr relevant für Button)
img.addEventListener('mouseenter', () => {
  if (!isAngry) toggleImage();
});
img.addEventListener('mouseleave', () => {
  if (isAngry) toggleImage();
});
img.addEventListener('click', toggleImage);
img.addEventListener('touchstart', toggleImage);

// Timer für den Button (nach 5 Sekunden)
setTimeout(() => {
  // Button erscheint nach 5 Sekunden
  btn.classList.add('show');
}, 5000);

// Overlay erzeugen
const overlay = document.createElement('div');
overlay.id = 'dark-overlay';
document.body.appendChild(overlay);

// Mausbewegung für Taschenlampe
document.addEventListener('mousemove', (e) => {
  if (flashlightOn) {
    overlay.style.setProperty('--x', `${e.clientX}px`);
    overlay.style.setProperty('--y', `${e.clientY}px`);
  }
});

// Button-Klick: Flashlight ein/aus
btn.addEventListener('click', () => {
  flashlightOn = !flashlightOn;
  overlay.style.display = flashlightOn ? 'block' : 'none';
});
