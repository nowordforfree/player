import { Component } from '@angular/core';
const libvlc = require('libvlcjs');

@Component({
    moduleId: module.id,
    selector: 'app-player',
    templateUrl: 'player.component.html'
})

export class PlayerComponent {
    private vlc: any;
    constructor() {
        this.vlc = libvlc.createPlayer();
        this.vlc.volume = 100;
    }
    play(filename: string) {
        if (!filename) {
            // mp3
            filename = 'http://www.ex.ua/get/274022070';
            // mkv
            // filename = 'http://www.ex.ua/get/263515588';
            // flac
            // filename = 'http://www.ex.ua/get/8491403';
            // m3u
            // filename = 'http://www.ex.ua/playlist/5821636.m3u';
        }
        this.vlc.play(filename);
    }
    pause() {
        this.vlc.pause();
    }
    stop() {
        this.vlc.stop();
    }
}