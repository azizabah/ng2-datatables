import {Component, OnInit} from '@angular/core';
import {DATA_TABLE_DIRECTIVES} from '../../../src/data_table_directives';


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
        const data = {
            'marvel': [
                {
                    'character': 'Superman',
                    'realName': 'Clark Kent'
                },
                {
                    'character': 'Batman',
                    'realName': 'Bruce Wayne'
                },
                {
                    'character': 'Wonder Woman',
                    'realName': 'Diana Prince'
                },
                {
                    'character': 'Flash',
                    'realName': 'Barry Allen'
                },
                {
                    'character': 'Green Lantern',
                    'realName': 'Hal Jordan'
                },
                {
                    'character': 'Catwoman',
                    'realName': 'Selina Kyle'
                },
                {
                    'character': 'Nightwing',
                    'realName': 'Dick Grayson'
                },
                {
                    'character': 'Captain Marvel',
                    'realName': 'Billy Batson'
                },
                {
                    'character': 'Aquaman',
                    'realName': 'Arthur Curry'
                },
                {
                    'character': 'Green Arrow',
                    'realName': 'Oliver Queen'
                },
                {
                    'character': 'Martian Manhunter',
                    'realName': 'J\'onn J\'onzz'
                },
                {
                    'character': 'Batgirl',
                    'realName': 'Barbara Gordon'
                },
                {
                    'character': 'Supergirl',
                    'realName': 'Kara Zor-El'
                },
                {
                    'character': 'Black Canary',
                    'realName': 'Dinah Lance'
                },
                {
                    'character': 'Hawkgirl',
                    'realName': 'Shiera Hall'
                },
                {
                    'character': 'Cyborg',
                    'realName': 'Vic Stone'
                },
                {
                    'character': 'Robin',
                    'realName': 'Damian Wayne'
                }
            ],
            'dc-comics': [
                {
                    'character': 'Blade',
                    'realName': 'Eric Brooks'
                },
                {
                    'character': 'Ghost Rider',
                    'realName': 'Johnny Blaze'
                },
                {
                    'character': 'Luke Cage',
                    'realName': 'Carl Lucas'
                },
                {
                    'character': 'Silver Surfer',
                    'realName': 'Norinn Radd'
                },
                {
                    'character': 'Beast',
                    'realName': 'Hank McCoy'
                },
                {
                    'character': 'Thing',
                    'realName': 'Ben Grimm'
                },
                {
                    'character': 'Black Panther',
                    'realName': 'T\'Challa'
                },
                {
                    'character': 'Invisible Woman',
                    'realName': 'Susan Storm'
                },
                {
                    'character': 'Nick Fury',
                    'realName': 'Nick Fury'
                },
                {
                    'character': 'Storm',
                    'realName': 'Ororo Munroe'
                },
                {
                    'character': 'Iron Man',
                    'realName': 'Tony Stark'
                },
                {
                    'character': 'Professor X',
                    'realName': 'Professor Charles Xavier'
                },
                {
                    'character': 'Hulk',
                    'realName': 'Bruce Banner'
                },
                {
                    'character': 'Cyclops',
                    'realName': 'Scott Summers'
                },
                {
                    'character': 'Thor',
                    'realName': 'Thor Odinson'
                },
                {
                    'character': 'Jean Grey',
                    'realName': 'Jean Grey'
                },
                {
                    'character': 'Wolverine',
                    'realName': 'James Howlett'
                },
                {
                    'character': 'Daredevil',
                    'realName': 'Matt Murdock'
                },
                {
                    'character': 'Captain America',
                    'realName': 'Steven Rogers'
                },
                {
                    'character': 'Spider-Man',
                    'realName': 'Peter Parker'
                }
            ]
        };

        for (let i = 0, length = data.marvel.length; i < length; i += 1) {
            Object.assign(data.marvel[i], {universe: 'marvel'});
        }

        for (let i = 0, length = data['dc-comics'].length; i < length; i += 1) {
            Object.assign(data['dc-comics'][i], {universe: 'dc-comics'});
        }

        return data.marvel.concat(data['dc-comics']);
    }
}
