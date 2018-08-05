import { Faq } from './components/faq/faq.component';


export const routing = ($stateProvider: angular.ui.IStateProvider) => {
    'ngInject';
    $stateProvider
        .state({
            name: 'faq',
            url: '/faq',
            component: Faq.selector,
            data: {
                'meta': {
                    'canonical': `${process.env.SITE_URL}/faq`,
                     'title': 'کشینه | پرسش های متداول',
                      'keyword': 'کشینه، کش بک، افیلیت مارکتینگ، تخفیف، کد تخفیف، کوپن تخفیف، سایت تخفیف، خرید اینترنتی، خرید آنلاین، سایت کشینه',
                       'description': 'کشینه اولین و بزرگترین سایت افیلیت مارکتینگ و کش بک در ایران است. برای آگاهی از پاسخ پرسش های متداول مربوط به عملکرد کشینه، اینجا کلیک کنید.'



                }
            }
        });
};
