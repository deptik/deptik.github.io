const img = document.getElementById('cat-image');
const btn = document.getElementById('flashlight-btn');

let isAngry = false;
let hoverCount = 0;
let flashlightOn = false;

// Bild wechseln
function toggleImage() {
  isAngry = !isAngry;
  img.src = isAngry
    ? 'img/katze-boese.jpg'
    : 'img/katze-gluecklich.jpg';
}

// Hover + Hover-Zähler
img.addEventListener('mouseenter', () => {
  if (!isAngry) toggleImage();
  hoverCount++;
  if (hoverCount >= 10 && !btn.classList.contains('show')) {
    btn.classList.add('show');
  }
});

img.addEventListener('mouseleave', () => {
  if (isAngry) toggleImage();
});

// Klick / Touch
img.addEventListener('click', toggleImage);
img.addEventListener('touchstart', toggleImage);

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
