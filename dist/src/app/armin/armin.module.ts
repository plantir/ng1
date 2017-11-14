import { Armin } from './armin.component';
// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';


import { routing } from './armin.routes';

export const moduleName =
    angular.module('application.armin', [
        'ui.router'
    ])
        .component(Armin.selector, Armin)
        .config(routing)
        .name;
