export * from './app.module';

const libvlc = require('libvlcjs'),
    player = libvlc.createPlayer();

player.volume = 100;

document.onreadystatechange = () => {
    if (document.readyState == "interactive") {
        initApplication();
    }
};

function initApplication() {
    let playBtn = document.querySelector('.btn.play');
    playBtn.addEventListener('click', () => {
        // mp3
        // player.play('http://www.ex.ua/get/274022070');
        // mkv
        // player.play('http://www.ex.ua/get/263515588');
        // flac
        // player.play('http://www.ex.ua/get/8491403');
        // m3u
        player.play('http://www.ex.ua/playlist/5821636.m3u');
    });
}