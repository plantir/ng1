class TermsController {
    name: string = 'terms';
}

import './terms.component.scss';

export class Terms implements ng.IComponentOptions {
    static selector = 'terms';
    static template = require('./terms.component.html');
    static bindings = {
    };
    static controller = TermsController;
}
