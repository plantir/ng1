import './faq.component.scss';

class FaqController {
    name: string = 'faq';
}

export class Faq implements ng.IComponentOptions {
    static selector = 'faq';
    static template = require('./faq.component.html');
    static bindings = {
    };
    static controller = FaqController;
}
