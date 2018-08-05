import * as $ from 'jquery';

interface ICollapseScope extends ng.IScope {
    collapsed: string;
}
export function CollapseDirective() {
    var directive = {
        link: link,
        restrict: 'A',
        scope: {
            collapsed: '='
        }

    };
    return directive;

    function link(scope: ICollapseScope, element: ng.IRootElementService, attrs: ng.IAttributes) {

        var css = {
            height: ''
        };
        var cssTo = { height: '0' };
        if (!scope.collapsed) {
            element.addClass('in')
                .addClass('collapse')
                .attr('aria-expanded', 'true')
                .attr('aria-hidden', 'false')
                .css(css);
        }

        scope.$watch('collapsed', (shouldCollapse) => {
            if (shouldCollapse) {
                collapse(element);
            } else {
                expend(element);
            }
        });
    }
}

function collapse(element: ng.IRootElementService) {
    $(element).slideDown();
}
function expend(element: ng.IRootElementService) {
    $(element).slideUp();
}

