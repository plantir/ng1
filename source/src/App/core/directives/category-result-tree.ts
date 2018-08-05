export function categoryResultTree_directive($compile: ng.ICompileService) {
    'ngInject';
    var directive = {
        link: link,
        restrict: 'A',
        scope: {
            ngModel: '='
        }
    };
    return directive;

    function link(scope: any, element: ng.IRootElementService, attrs: ng.IAttributes) {
        console.log(scope.ngModel);
        // $compile()
    }
}
