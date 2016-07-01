import { Component, OnInit } from '@angular/core';
import {DATA_TABLE_DIRECTIVES} from '../../../src/data_table_directives';


@Component({
    selector: 'simple-example',
    template: require('./simple-example.component.html'),
    directives: [
        DATA_TABLE_DIRECTIVES
    ]
})
export class SimpleExampleComponent implements OnInit {


    items: any[] = [];

    ngOnInit() {
        this.items = [{id: 1, name: 'heh'}, {id: 3, name: 'hah'}];
    }
}
