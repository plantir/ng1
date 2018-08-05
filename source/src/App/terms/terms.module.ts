// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';


import { routing } from './terms.routes';
import { Terms } from './components/terms/terms.component';

export const moduleName =
    angular.module('application.terms', [
        'ui.router'
    ])
        .component(Terms.selector, Terms)
        .config(routing)
        .name;
