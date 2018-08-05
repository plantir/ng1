import { PrivacyPolicy } from './components/privacy-policy/privacy-policy.component';


export const routing = ($stateProvider: angular.ui.IStateProvider) => {
    'ngInject';
    $stateProvider
        .state({
            name: 'privacy-policy',
            url: '/privacy-policy',
            component: PrivacyPolicy.selector,
            data: {
                'meta': {
                    'canonical': `${process.env.SITE_URL}/privacy-policy`,
                      'title': 'کشینه | حفظ حریم خصوصی',
                      'keyword': 'حریم خصوصی، کشینه، کش بک، افیلیت مارکتینگ، تخفیف، کد تخفیف، کوپن تخفیف، سایت تخفیف، خرید اینترنتی، خرید آنلاین، سایت کشینه',
                       'description': 'کشینه اولین و بزرگترین سایت افیلیت مارکتینگ و کش بک در ایران است. برای اطلاع از سیاست حریم خصوصی در کشینه، اینجا کلیک کنید.'


                }
            }
        });
};
