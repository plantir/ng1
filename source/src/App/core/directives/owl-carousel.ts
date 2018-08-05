declare const $: any;

export function OwlCarouselDirective($timeout: ng.ITimeoutService) {
    'ngInject';

    var directive = {
        link: link,
        restrict: 'AE',
        scope: {
            option: '='
        }

    };
    return directive;

    function link(scope: any, element: ng.IRootElementService, attrs: ng.IAttributes) {
        setTimeout(() => {
            $(element[0]).owlCarousel(scope.option);
        }, 100);
    }

    function checkHasPreventClose(elem: any): boolean {
        if (elem) {

            if (elem.hasAttribute('prevent-close')) {
                return true;
            }
            return checkHasPreventClose(elem.parentElement);
        } else {
            return false;
        }
    }

}
