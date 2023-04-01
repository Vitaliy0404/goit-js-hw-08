import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const PLAYER_KEY = 'videoplayer-current-time';

const myIframe = document.querySelector('#vimeo-player');
const player = new Player(myIframe);

const onPlay = function (event) {
    localStorage.setItem(PLAYER_KEY, event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem(PLAYER_KEY)) || 0);



