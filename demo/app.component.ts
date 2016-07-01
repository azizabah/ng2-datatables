import {Component} from '@angular/core';
import {SimpleExampleComponent} from './src/simple-example.component';

@Component({
    selector: 'app',
    template: `
    <h1>Simple Example:</h1>
    <simple-example></simple-example>
    `,
    directives: [
        SimpleExampleComponent
    ]
})
export class AppComponent {

}
