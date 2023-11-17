import throttle from 'lodash.throttle';

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
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
  const valueInput = data.seconds;
  console.log(valueInput);
  localStorage.setItem('videoplayer-current-time', JSON.stringify(valueInput));
};

iframeVideo.addEventListener('timeupdate', throttle(onPlay, 1000));

player.on('timeupdate', onPlay);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {})
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
