import './cashout.component.scss';
import { IUserService } from '../../services/user.service';

class CashoutController {
    ajaxLoading: boolean = true;
    account_balance: number;
    canCashout: boolean;
    name: string = 'cashout';
    payment = { type: 'card' };
    constructor(private $user: IUserService) {
        'ngInject';
    }
    $onInit() {
        this.$user.ballance().then(res => {
            this.canCashout = res.data.canCashout;
            this.account_balance = res.data.account_balance;
            this.ajaxLoading = false;
        });
    }
}

export class Cashout implements ng.IComponentOptions {
    static selector = 'cashout';
    static template = require('./cashout.component.html');
    static bindings = {
    };
    static controller = CashoutController;
}
