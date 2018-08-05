import * as $ from 'jquery';
export function OnErrDirective() {
    return {
        link: function (scope: ng.IScope, element: ng.IRootElementService, attrs: any) {
            element.bind('error', function () {
                if (attrs.src !== attrs.onErr) {
                    attrs.$set('src', attrs.onErr);
                }
            });
            if (!attrs.ngSrc) {
                attrs.$set('src', attrs.onErr);
            }
        }
    };
}
