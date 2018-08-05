
declare const $: any;
export function custom_scrollbar_directive() {
    'ngInject';

    var directive = {
        link: link,
        restrict: 'AEC',
    };
    return directive;

    function link(scope: ng.IScope, element: ng.IRootElementService, attrs: ng.IAttributes) {
        $(element).mCustomScrollbar({
            theme: 'dark',
            axis: 'y',
            autoHideScrollbar: true,
        });
    }
}
