import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    template: 
    `<table id="player">
        <tbody>
            <tr>
                <td class="cover">
                </td>
                <td>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <button class="btn play"></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>`
})

export class AppComponent { }