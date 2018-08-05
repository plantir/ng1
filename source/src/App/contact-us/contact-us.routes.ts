import { ContactUs } from './components/contact-us/contact-us.component';


export const routing = ($stateProvider: angular.ui.IStateProvider) => {
    'ngInject';
    $stateProvider
        .state({
            name: 'contact-us',
            url: '/contact-us',
            component: ContactUs.selector,
            data: {
                'meta': {
                    'canonical': `${process.env.SITE_URL}/contact-us`,
                     'title': 'کشینه | تماس با کشینه',
                      'keyword': 'کشینه، کش بک، افیلیت مارکتینگ، تخفیف، کد تخفیف، کوپن تخفیف، سایت تخفیف، خرید اینترنتی، خرید آنلاین، سایت کشینه',
                       'description': 'کشینه اولین و بزرگترین سایت افیلیت مارکتینگ و کش بک در ایران است. برای تماس با دپارتمان های مختلف کشینه، اینجا کلیک کنید.'


                }
            }
        });
};
