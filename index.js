import './style.css';
import { Howl } from 'howler';
const images = {
  treasure: '💰',
  leafs: '🍃',
};

//source of sound: https://bigsoundbank.com/detail-0237-shouts-and-applauses-of-teens-2.html
let sound = new Howl({
  src: ['https://bigsoundbank.com/UPLOAD/mp3/0237.mp3'],
});

let firstFind = false;

document.querySelectorAll('.tree').forEach((element, index) => {
  element.addEventListener('mouseover', () => {
    const isTeasureAClass = Object.values(element.classList).includes(
      'treasure'
    );

    if (isTeasureAClass) {
      element.innerHTML = images.treasure;
      if (!firstFind) {
        firstFind = true;
        sound.play();
      }
    } else if (!firstFind) {
      element.innerHTML = images.leafs;
    }
  });
});
