class ArminController {
    name: string = 'armin';
}


import './armin.component.scss';
export class Armin implements ng.IComponentOptions {
    static selector = 'armin';
    static template = require('./armin.component.html');
    static bindings = {
    };
    static controller = ArminController;
}
