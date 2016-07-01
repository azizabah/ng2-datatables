import {Component} from '@angular/core';

import {SimpleExampleComponent} from './simple-example/simple-example.component';
import {HeroesExampleComponent} from './heroes-example/heroes-example.component';

@Component({
    selector: 'app',
    template:  require('./app.component.html'),
    directives: [
        SimpleExampleComponent,
        HeroesExampleComponent
    ]
})
export class AppComponent {

}
