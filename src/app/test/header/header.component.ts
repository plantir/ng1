class HeaderController {
    name: string = 'header';
}

import './header.component.scss';

export class Header implements ng.IComponentOptions {
    static selector = 'header';
    static template = require('./header.component.html');
    static bindings = {
    };
    static controller = HeaderController;
}
