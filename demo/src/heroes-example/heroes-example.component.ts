import {Component, OnInit} from '@angular/core';
import {DATA_TABLE_DIRECTIVES} from '../../../src/data_table_directives';

import {heroes} from './heroes.data';

@Component({
    selector: 'heores-example',
    template: require('./heroes-example.component.html'),
    directives: [
        DATA_TABLE_DIRECTIVES
    ]
})
export class HeroesExampleComponent implements OnInit {

    heroes: any[] = [];

    ngOnInit() {
        this.heroes = this.createHeroes();
    }


    private createHeroes(): any[] {

        let data = heroes;

        for (let i = 0, length = data.marvel.length; i < length; i += 1) {
            Object.assign(data.marvel[i], {universe: 'marvel'});
        }

        for (let i = 0, length = data['dc-comics'].length; i < length; i += 1) {
            Object.assign(data['dc-comics'][i], {universe: 'dc-comics'});
        }

        return data.marvel.concat(data['dc-comics']);
    }
}
