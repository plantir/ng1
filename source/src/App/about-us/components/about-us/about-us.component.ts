class AboutUsController {
    name: string = 'about-us';
}

import './about-us.component.scss';

export class AboutUs implements ng.IComponentOptions {
    static selector = 'aboutUs';
    static template = require('./about-us.component.html');
    static bindings = {
    };
    static controller = AboutUsController;
}
