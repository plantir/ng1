import * as $ from 'jquery';
import './md-loading.scss';
export function MdLoadingDirective() {
    var directive = {
        bindToController: true,
        link: link,
        restrict: 'E',
        template: '<md-progress-circular md-diameter="30"></md-progress-circular>'

    };
    return directive;

    function link(scope: ng.IScope, element: ng.IRootElementService, attrs: ng.IAttributes) {
        $(element).parent().css('position', 'relative');
    }
}
