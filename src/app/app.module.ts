import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [ BrowserModule, Ng2BootstrapModule ],
    declarations: [
        AppComponent,
        PlayerComponent,
        PlaylistComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }