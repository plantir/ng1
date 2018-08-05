export function clickOutSide_directive() {
    var directive = {
        link: link,
        restrict: 'A',
        scope: {
            clickOutSide: '='
        }

    };
    return directive;

    function link(scope: any, element: ng.IRootElementService, attrs: ng.IAttributes) {
        $(document).on('click', (event: any) => {
            var clickedElement = event.target;
            var elementClasses = clickedElement.classList;
            var clickedOnSearchDrawer = elementClasses.contains('searchInput');
            if (!clickedOnSearchDrawer) {
                $(element).hide();
            }
        });
        $('.searchInput').on('focus', (event: any) => {
            if (event.currentTarget.value.length > 1) {
                $(element).show();
            } if (event.currentTarget.value.length > 1) {
                $(element).show();
            }
        });

        $('.searchInput').on('keyup', (event: any) => {
            if (event.currentTarget.value.length > 1) {
                $(element).show();
            } if (event.currentTarget.value.length > 1) {
                $(element).show();
            }
        });
        // scope.$watch('clickOutSide', () => {
        //     if (!scope.clickOutSide) {
        //         $(element).hide();
        //     } else {
        //         $(element).show();
        //     }
        // });
    }
}
