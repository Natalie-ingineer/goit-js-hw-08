// import throttle from 'lodash.throttle';

import Player from '@vimeo/player';
console.log(Player);

const iframeVideo = document.querySelector('iframe');
console.dir(iframeVideo);

const player = new Player('vimeo-player', {
  id: 236203659,
  width: 640,
});

const onPlay = function (data) {
  {
    duration: 61.857;
    percent: 0.049;
    seconds: 3.034;
  }
};

const valueInput = iframeVideo.setCurrentTime;
console.log(valueInput);
localStorage.setItem('videoplayer-current-time', JSON.stringify(valueInput));

iframeVideo.addEventListener('timeupdate', onPlay);

player.on('timeupdate', onPlay);

player
  .setCurrentTime(30.456)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

// function onTextareaInput(event) {
//   const valueInput = event.target.value;
//   console.log(valueInput);
//   localStorage.setItem(STORAGE_KEY, valueInput);
// }

// localStorage.setItem('videoplayer-current-time', target.value);

// const player = new Player('handstick', {
// id: iframe.id,
// width: 640,
// });

// player.on('play', function () {
// console.log('played the video!');
// });

// localStorage.setItem(
// 'videoplayer-current-time',
// JSON.stringify({ name: 'Mango', age: 22 })
// );

// iframe.getAttribute("id");
// console.log(iframe("id"));

// const form = document.querySelector('.feedback-form');
// const textarea = document.querySelector('textarea');

// const STORAGE_KEY = 'feedback';

// populateTextarea();

// form.addEventListener('submit', onFormSabmit);
// textarea.addEventListener('input', throttle(onTextareaInput, 500));

// function onFormSabmit(event) {
//   event.preventDefault();

//   console.log('Відправили форму!');

//   event.target.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareaInput(event) {
//   const valueInput = event.target.value;
//   console.log(valueInput);
//   localStorage.setItem(STORAGE_KEY, valueInput);
// }

// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     console.log(savedMessage);
//     textarea.value = savedMessage;
//   }
// }

// const player = new Player('handstick', {
//   id: iframe.id,
//   width: 640,
// });

// player.on('play', function () {
// console.log('played the video!');
// });
// let currentTime =
