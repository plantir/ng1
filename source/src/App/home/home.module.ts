// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';


import { Home } from './components/home/home.component';
import { HomeRegister } from './components/home-register/home-register.component';
import { routing } from './home.routes';
export const moduleName =
    angular.module('application.home', [
        'ui.router',
    ])
        .component(Home.selector, Home)
        .component(HomeRegister.selector, HomeRegister)
        .config(routing)
        .name;
