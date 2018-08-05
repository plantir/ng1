class PrivacyPolicyController {
    name: string = 'privacy-policy';
}

import './privacy-policy.component.scss';

export class PrivacyPolicy implements ng.IComponentOptions {
    static selector = 'privacyPolicy';
    static template = require('./privacy-policy.component.html');
    static bindings = {
    };
    static controller = PrivacyPolicyController;
}
