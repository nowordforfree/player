import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlaylistComponent } from './playlist/playlist.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        PlayerComponent,
        PlaylistComponent
    ],
    imports: [ BrowserModule ]
})

export class AppModule { }