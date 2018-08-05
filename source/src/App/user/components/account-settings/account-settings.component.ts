import './account-settings.component.scss';
import { IUserService, IUserFull } from '../../services/user.service';
import * as moment from 'moment-jalaali';
class AccountSettingsController {
    ajaxLoading: boolean;
    user: IUserFull;
    datepickerConfig = {
        allowFuture: false,
        dropDownYears: 50,
        dateFormat: 'jYYYY/jMM/jDD',
        gregorianDateFormat: 'YYYY/DD/MM',
    };
    constructor(private $user: IUserService, private $mdDialog: ng.material.IDialogService) {
        'ngInject';
    }
    $onInit() {
        this.ajaxLoading = true;
        this.$user.getInfo().then(response => {
            if (response.data.birthDay) {
                response.data.birthDayJ = moment(response.data.birthDay, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD');

            }
            this.user = response.data;
            this.user.sms_enabled = this.user.sms_enabled === 1 ? true : false;
            this.ajaxLoading = false;
        });
    }
    assignImg(param: string, resp: string): void {
        this.user.image = resp;
    }
    removeImg() {
        this.user.image = null;
    }
    save() {
        this.ajaxLoading = true;
        this.$user.saveInfo(this.user).then(Response => {
            this.$mdDialog.show(
                this.$mdDialog.alert()
                    .title('با موفقیت ذخیره شد')
                    .textContent('تبریک می گم تغییرات شما با موفقیت ذخیره شد')
                    .ok('باشه')
            );
        }).finally(() => this.ajaxLoading = false);
    }
    checkNationalCode(code: string) {
        if (!code) {
            return true;
        }
        if (!/^\d{10}$/.test(code)
            || code === '0000000000'
            || code === '1111111111'
            || code === '2222222222'
            || code === '3333333333'
            || code === '4444444444'
            || code === '5555555555'
            || code === '6666666666'
            || code === '7777777777'
            || code === '8888888888'
            || code === '9999999999') {
            return false;
        }
        var check = parseInt(code[9], 0);
        var sum = 0;
        var i;
        for (i = 0; i < 9; ++i) {
            sum += parseInt(code[i], 0) * (10 - i);
        }
        sum %= 11;
        return (sum < 2 && check === sum) || (sum >= 2 && check + sum === 11);
    }
}

export class AccountSettings implements ng.IComponentOptions {
    static selector = 'accountSettings';
    static template = require('./account-settings.component.html');
    static bindings = {
    };
    static controller = AccountSettingsController;
}
