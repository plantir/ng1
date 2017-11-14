class AppHeaderController {
    name: string = 'app-header';
}

import './app-header.component.scss';

export class AppHeader implements ng.IComponentOptions {
    static selector = 'appHeader';
    static template = require('./app-header.component.html');
    static bindings = {
    };
    static controller = AppHeaderController;
}
