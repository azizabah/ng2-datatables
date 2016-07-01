// Prefer CoreJS over the polyfills above
import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');

import 'rxjs/Rx';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './src/app.component';


bootstrap(AppComponent, []);
