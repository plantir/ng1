import { Terms } from './components/terms/terms.component';


export const routing = ($stateProvider: angular.ui.IStateProvider) => {
    'ngInject';
    $stateProvider
        .state({
            name: 'terms',
            url: '/terms',
            component: Terms.selector,
            data: {
                'meta': {
                    'canonical': `${process.env.SITE_URL}/terms`,
                      'title': 'کشینه | شرایط استفاده و قوانین کشینه',
                      'keyword': 'شرایط استفاده، کشینه، قوانین، کش بک، افیلیت مارکتینگ، تخفیف، کد تخفیف، کوپن تخفیف، سایت تخفیف، خرید اینترنتی، خرید آنلاین، سایت کشینه',
                       'description': 'کشینه اولین و بزرگترین سایت افیلیت مارکتینگ و کش بک در ایران است. برای آگاهی در مورد شرایط استفاده و قوانین کشینه، اینجا کلیک کنید.'


                }
            }
        });
};
