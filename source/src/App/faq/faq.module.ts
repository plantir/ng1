// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';


import { routing } from './faq.routes';
import { Faq } from './components/faq/faq.component';

export const moduleName =
    angular.module('application.faq', [
        'ui.router'
    ])
        .component(Faq.selector, Faq)
        .config(routing)
        .name;
