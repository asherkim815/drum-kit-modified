const activeButtons = ['w', 'a', 's', 'd', 'j', 'k', 'l'];

// add click event to buttons
const allDrumButtons = document.querySelectorAll('.drum');
allDrumButtons.forEach((drumButton) => {
  drumButton.addEventListener('click', function () {
    // remove focus from button clicked, so pressing the space bar after clicking on a button doesn't trigger the click eventlistener
    document.activeElement.blur();
    const drumButtonText = this.innerText;
    animateButton(drumButtonText);
    makeSound(drumButtonText);
  });
});

// add keydown event to document
document.addEventListener('keydown', function (pressedKey) {
  if (activeButtons.includes(pressedKey.key)) {
    animateButton(pressedKey.key);
    makeSound(pressedKey.key);
  }
});

// animation function
function animateButton(keyToAnimate) {
  const targetButton = document.querySelector('.' + keyToAnimate);
  targetButton.classList.add('pressed');
  setTimeout(() => targetButton.classList.remove('pressed'), 100);
}

// sound function
function makeSound(pressedKey) {
  switch (pressedKey) {
    case 'w':
      const tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'a':
      const tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case 's':
      const tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'd':
      const tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case 'j':
      const snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case 'k':
      const crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case 'l':
      const kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
  }
}
