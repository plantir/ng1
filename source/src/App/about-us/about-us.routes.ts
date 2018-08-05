import { AboutUs } from './components/about-us/about-us.component';


export const routing = ($stateProvider: angular.ui.IStateProvider) => {
    'ngInject';
    $stateProvider
        .state({
            name: 'about-us',
            url: '/about-us',
            component: AboutUs.selector,
            data: {
                'meta': {
                    'canonical': `${process.env.SITE_URL}/about-us`,
                       'title': 'کشینه | درباره کشینه',
                        'keyword': 'کشینه، کش بک، افیلیت مارکتینگ، تخفیف، کد تخفیف، کوپن تخفیف، سایت تخفیف، خرید اینترنتی، خرید آنلاین، سایت کشینه',
                         'description': 'کشینه اولین و بزرگترین سایت افیلیت مارکتینگ و کش بک در ایران است. برای آشنایی بیشتر با کشینه کلیک کنید.'
                }
            }
        });
};
