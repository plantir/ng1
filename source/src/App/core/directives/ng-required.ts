export function NgRequired_directive($compile: ng.ICompileService) {
    'ngInject';
    var directive = {
        link: link,
        restrict: 'A',
    };
    return directive;

    function link(scope: any, element: ng.IRootElementService, attrs: ng.IAttributes) {
        if (attrs.ngRequired === 'true') {
            $(element).siblings('label').addClass('required');
        }
        // $compile()
    }
}
