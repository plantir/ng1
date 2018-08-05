// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

import 'ngmap';
import { routing } from './contact-us.routes';
import { ContactUs } from './components/contact-us/contact-us.component';
import { ContactUsService } from './services/contact-us.service';

export const moduleName =
    angular.module('application.contact-us', [
        'ui.router',
        'ngMap'
    ])
        .component(ContactUs.selector, ContactUs)

        .service(ContactUsService.selector, ContactUsService)

        .config(routing)
        .name;
