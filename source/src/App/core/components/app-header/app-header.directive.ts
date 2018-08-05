export function appHeader_directive() {
    var directive = {
        link: link,
        restrict: 'A',
    };
    return directive;

    function link(scope: any, element: ng.IRootElementService, attrs: ng.IAttributes) {
        $(document).on('scroll', (event: any) => {
            let top = $(document).scrollTop();
            if (top > 50) {
                $(element).addClass('fix');
            } else if (top < 50) {
                $(element).removeClass('fix');
            }
            if (top > 100) {
                $(element).addClass('min');
            } else {
                $(element).removeClass('min');
            }
        });
    }
}
