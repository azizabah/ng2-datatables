import {Component} from '@angular/core';

import {SimpleExampleComponent} from './simple-example/simple-example.component';


@Component({
    selector: 'app',
    template:  require('./app.component.html'),
    directives: [
        SimpleExampleComponent
    ]
})
export class AppComponent {

}
