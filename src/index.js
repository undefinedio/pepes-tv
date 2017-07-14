import './index.scss';

import youTubePlayer from 'youtube-player';

const player = youTubePlayer('video-player', {
  playerVars: {
    controls: 0,
    progressBar: false,
    wmode: 'transparent',
    showinfo: 0,
    modestbranding: 1,
    height: '650',
    width: '640'
  }
});

const videos = [
  'N813Bj8CnW0',
  'l0wPHAau1ts',
  'eb4UcIZMhw8'
];

let i = 0;

function playVideo(video) {
  player.loadVideoById(video);
}

function start() {
  playVideo(videos[i]);

  player.on('stateChange', event => {
    if (event.data === 0) {
      playNext();
    }
  });
}

function playNext() {
  i++;

  if (i >= videos.length) {
    reset();
  }

  playVideo(videos[i]);
}

function reset() {
  i = 0;
}

start();
