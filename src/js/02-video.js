import throttle from 'lodash.throttle';

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeVideo = document.querySelector('iframe');

const player = new Player('vimeo-player', {
  id: 236203659,
  width: 640,
});

const onPlay = function (data) {
  const valueInput = data.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(valueInput));
};

iframeVideo.addEventListener('timeupdate', onPlay, 1000);

player.on('timeupdate', throttle(onPlay, 1000));

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
