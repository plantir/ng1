import './change-password-modal.component.scss';
import { IUserService } from '../../services/user.service';
import * as md5 from 'md5';
declare const angular: ng.IAngularStatic;
class ChangePasswordModalController {
    data: any;
    constructor(private $user: IUserService, private $mdDialog: ng.material.IDialogService) {
        'ngInject';
    }
    changePassword() {
        let data = angular.copy(this.data);
        data.new_password = md5(data.new_password);
        data.old_password = md5(data.old_password);
        this.$user.changePassword(data).then(res => {
            if (res.data === 'true') {
                this.$mdDialog.show(
                    this.$mdDialog.alert().multiple(true).title('عملیات موفق').textContent('رمز عبور شما با موفقیت تغییر یافت').ok('باشه')
                );
            } else {
                this.$mdDialog.show(
                    this.$mdDialog.alert().multiple(true).title('عملیات ناموفق').textContent('رمز عبور قبلی شما اشتباه است').ok('باشه')
                );
            }
        }).catch(err => {
            this.$mdDialog.show(
                this.$mdDialog.alert().multiple(true).title('عملیات ناموفق').textContent('خطایی در ارتباط با سرور رخ داده است لطفا مجددا تلاش کنید').ok('باشه')
            );
        });
    }
}

export class ChangePasswordModal implements ng.IComponentOptions {
    static selector = 'changePasswordModal';
    static template = require('./change-password-modal.component.html');
    static bindings = {
    };
    static controller = ChangePasswordModalController;
}
