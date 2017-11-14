// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';


import { routing } from './%name%.routes';

export const moduleName =
    angular.module('application.%name%', [
        'ui.router'
    ])
        .config(routing)
        .name;
