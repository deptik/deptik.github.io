const img = document.getElementById('cat-image');
const btn = document.getElementById('flashlight-btn');
const soundWoah = document.getElementById('sound-woah');
const soundBoah = document.getElementById('sound-boah');

let isAngry = false;
let flashlightOn = false;

function toggleImage() {
  isAngry = !isAngry;
  img.src = isAngry
    ? 'img/angy.jpg'
    : 'img/blurp.jpg';
}

img.addEventListener('mouseenter', () => {
  if (!isAngry) toggleImage();
});
img.addEventListener('mouseleave', () => {
  if (isAngry) toggleImage();
});
img.addEventListener('click', toggleImage);
img.addEventListener('touchstart', toggleImage);

setTimeout(() => {
  btn.classList.add('show');
}, 5000);

const overlay = document.createElement('div');
overlay.id = 'dark-overlay';
document.body.appendChild(overlay);

document.addEventListener('mousemove', (e) => {
  if (flashlightOn) {
    overlay.style.setProperty('--x', `${e.clientX}px`);
    overlay.style.setProperty('--y', `${e.clientY}px`);
  }
});

btn.addEventListener('click', () => {
  flashlightOn = !flashlightOn;

  if (flashlightOn) {
    overlay.classList.add('visible');

    setTimeout(() => {
      soundWoah.currentTime = 0;
      soundWoah.play();
    }, 2);
  } else {
    overlay.classList.remove('visible');

    setTimeout(() => {
      soundBoah.currentTime = 0;
      soundBoah.play();
    }, 2);
  }
});
