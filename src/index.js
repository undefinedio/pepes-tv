import './index.scss';
import youTubePlayer from 'youtube-player';

class App {
  start() {
    this.i = 0;

    this.initPlayer();
    this.getVideos();
    this.playVideo(this.videos[this.i]);

    /**
     * when video is done play next
     */
    this.player.on('stateChange', event => {
      if (event.data === 0) {
        this.playNext();
      }
    });
  }

  /**
   * Initialize player
   */
  initPlayer() {
    this.player = youTubePlayer('video-player', {
      playerVars: {
        controls: 0,
        progressBar: false,
        wmode: 'transparent',
        showinfo: 0,
        modestbranding: 1
      }
    });
  }

  playVideo(video) {
    this.player.loadVideoById(video);
  }

  /**
   * Play next video
   */
  playNext() {
    this.i++;

    if (this.i >= this.videos.length) {
      this.reset();
    }

    this.playVideo(this.videos[this.i]);
  }

  /**
   * Reset counter
   */
  reset() {
    this.i = 0;
  }

  /**
   * Get list of videos
   */
  getVideos() {
    this.videos = [
      'N813Bj8CnW0',
      'l0wPHAau1ts',
      'eb4UcIZMhw8'
    ];
  }
}

/**
 * Start the app
 * @type {Player}
 */
const app = new App();
app.start();
