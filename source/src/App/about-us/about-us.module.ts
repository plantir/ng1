// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';


import { routing } from './about-us.routes';
import { AboutUs } from './components/about-us/about-us.component';
import { Reportage } from './components/reportage/reportage.component';

export const moduleName =
    angular.module('application.about-us', [
        'ui.router'
    ])
        .component(AboutUs.selector, AboutUs)
        .component(Reportage.selector, Reportage)
        .config(routing)
        .name;
