import './%name%.component.scss';

class %nameUpper%Controller {
    name: string = '%name%';
}

export class %nameUpper% implements ng.IComponentOptions {
    static selector = '%selectorName%';
    static template = require('./%name%.component.html');
    static bindings = {
    };
    static controller = %nameUpper%Controller;
}
