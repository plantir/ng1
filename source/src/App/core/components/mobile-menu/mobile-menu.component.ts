import './mobile-menu.component.scss';

class MobileMenuController {
    isOpen: boolean;
    name: string = 'mobile-menu';
    constructor(private $mdSidenav: ng.material.ISidenavService, $scope: ng.IScope, $timeout: ng.ITimeoutService) {
        'ngInject';
        $scope.$watch(() => {
            return $mdSidenav('mobile-nav').isOpen();
        }, (isOpen) => {
            if (isOpen) {
                this.isOpen = true;
            } else {
                $timeout(() => {
                    this.isOpen = false;
                }, 400);
            }
        });
    }
}

export class MobileMenu implements ng.IComponentOptions {
    static selector = 'mobileMenu';
    static template = require('./mobile-menu.component.html');
    static bindings = {
    };
    static controller = MobileMenuController;
}
