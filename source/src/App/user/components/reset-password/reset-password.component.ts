import './reset-password.component.scss';
import { IUserService, ILoginResponse } from '../../services/user.service';
import * as md5 from 'md5';
class ResetPasswordController {
    user: ILoginResponse;
    error: boolean;
    successful: boolean;
    password: string;
    ajaxLoading: boolean;
    constructor(private $user: IUserService, private $state: ng.ui.IStateService) {
        'ngInject';
    }
    $onInit() {
        this.user = this.$user.isLogedIn();
        if (this.user) {
            this.$state.go('home');
        }
    }
    submit() {
        this.ajaxLoading = true;
        this.password = md5(this.password);
        this.$user.resetPassword({ password: this.password, token: this.$state.params.token, email: this.$state.params.email }).then(res => {
            this.successful = true;
        }).catch(err => {
            this.error = true;
        }).then(() => {
            this.ajaxLoading = false;
        });
    }
}

export class ResetPassword implements ng.IComponentOptions {
    static selector = 'resetPassword';
    static template = require('./reset-password.component.html');
    static bindings = {
    };
    static controller = ResetPasswordController;
}
