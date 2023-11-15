import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
console.log(iframe.id);

localStorage.setItem(
  'videoplayer-current-time',
  JSON.stringify({ name: 'Mango', age: 22 })
);

// iframe.getAttribute("id");
// console.log(iframe("id"));

// const player = new Player('handstick', {
//   id: iframe.id,
//   width: 640,
// });

// player.on('play', function () {
//   console.log('played the video!');
// });

const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('timeupdate', onPlay);

{
  duration: 61.857;
  percent: 0.049;
  seconds: 3.034;
}

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
