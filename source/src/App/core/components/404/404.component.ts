import './404.component.scss';

class NotFoundController {
    name: string = 'notFound';
}

export class NotFound implements ng.IComponentOptions {
    static selector = 'notFound';
    static template = require('./404.component.html');
    static bindings = {
    };
    static controller = NotFoundController;
}
