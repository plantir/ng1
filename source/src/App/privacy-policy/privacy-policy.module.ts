// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';


import { routing } from './privacy-policy.routes';
import { PrivacyPolicy } from './components/privacy-policy/privacy-policy.component';

export const moduleName =
    angular.module('application.privacy-policy', [
        'ui.router'
    ])
        .component(PrivacyPolicy.selector, PrivacyPolicy)
        .config(routing)
        .name;
