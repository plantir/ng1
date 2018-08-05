import './forgot-password.component.scss';
import { IUserService, ILoginResponse } from '../../services/user.service';
import * as md5 from 'md5';

class ForgotPasswordController {
    user: ILoginResponse;
    status: string = 'start';
    password: string;
    tokenError: { invalid: boolean; };
    isVerify: boolean;
    error: boolean;
    email: string;
    token: string;
    mobile: string;
    ajaxLoading: boolean;
    type: string;
    mobile_regex = /[0-9]{11}/gm;
    email_regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    constructor(private $user: IUserService, public $state: ng.ui.IStateService, private $timeout: ng.ITimeoutService) {
        'ngInject';
    }
    $onInit() {
        this.user = this.$user.isLogedIn();
        if (this.user) {
            this.$state.go('home');
        }
    }
    custom_validation(value: string) {
        let mobile = this.mobile_regex.exec(value);
        let email = this.email_regex.exec(value);
        if (mobile) {
            this.type = 'mobile';
            this.mobile = value;
        } else if (email) {
            this.type = 'email';
            this.email = value;
        }
        return mobile || email;
    }
    submit() {
        this.ajaxLoading = true;

        this.$user.forgotPassword({ type: this.type, email: this.email, mobile: this.mobile }).then(res => {
            if (this.type === 'mobile') {
                this.status = 'verify';
            } else {
                this.status = 'finish';
            }
        }).catch(err => {
            this.error = true;
            this.$timeout(() => {
                this.error = null;
            }, 3000);
        }).then(() => {
            this.ajaxLoading = false;
        });
    }
    sendToken() {
        if (this.token.length === 4) {
            this.ajaxLoading = true;
            this.$user.verifyMoblie({ token: this.token, mobile: this.mobile }).then(res => {
                if (res.data === 'true') {
                    this.isVerify = true;
                } else {
                    this.tokenError = { invalid: true };
                }
                this.ajaxLoading = false;
            });
        }

    }
    resetPassword() {
        this.ajaxLoading = true;
        let password = md5(this.password);
        this.$user.resetPassword({ password: password, token: this.token, mobile: this.mobile }).then(res => {
            if (res.data === 'true') {
                this.status = 'finish';
            }
        }).finally(() => {

            this.ajaxLoading = false;
        });
    }
}

export class ForgotPassword implements ng.IComponentOptions {
    static selector = 'forgotPassword';
    static template = require('./forgot-password.component.html');
    static bindings = {
    };
    static controller = ForgotPasswordController;
}
