import './my-cashineh.component.scss';
import { IUserService, ILoginResponse } from '../../services/user.service';

class MyCashinehController {
    user: ILoginResponse;
    name: string = 'my-cashineh';
    constructor(private $user: IUserService, private $state: ng.ui.IStateService, private $mdDialog: ng.material.IDialogService) {
        'ngInject';
    }
    $onInit() {
        this.user = this.$user.isLogedIn();
        if (!this.user) {
            this.$state.go('home');
        }
    }
    logout() {
        this.$user.logout();
    }
    changePassword() {
        this.$mdDialog.show({
            template: '<change-password-modal></change-password-modal>',
            clickOutsideToClose: true
        });
    }
}

export class MyCashineh implements ng.IComponentOptions {
    static selector = 'myCashineh';
    static template = require('./my-cashineh.component.html');
    static bindings = {
    };
    static controller = MyCashinehController;
}
