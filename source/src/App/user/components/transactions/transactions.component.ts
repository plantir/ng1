import './transactions.component.scss';
import { IUserService } from '../../services/user.service';
import { IUserResource } from '../../factory/user.factory';

class TransactionsController {
    gridActions: any;
    pendingTransaction: any[];
    approveTransaction: any[];
    allTransaction: any[];
    gridOptions: { data: any[]; urlSync: boolean; refresh?: any, getData: any, customFilters?: any, filters?: any };
    orders: any[];
    currentNavItem = 'all';
    constructor(private $userFactory: IUserResource) {
        'ngInject';
    }
    $onInit() {
        this.gridOptions = {
            data: [],
            getData: this.$userFactory.transactions,
            urlSync: false,
        };
    }
    setNav(nav: string) {
        switch (nav) {
            case 'all':
                this.gridOptions.customFilters = [];
                break;
            case 'approve':
                this.gridOptions.customFilters = [`status:1`];
                break;
            case 'pending':
                this.gridOptions.customFilters = [`status:0`];
                break;
        }
        this.gridActions.doCheck();
        this.gridActions.filter();
    }
}

export class TransActions implements ng.IComponentOptions {
    static selector = 'transactions';
    static template = require('./transactions.component.html');
    static bindings = {
    };
    static controller = TransactionsController;
}
