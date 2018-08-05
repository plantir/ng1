import './gifts.component.scss';
import { IUserResource } from '../../factory/user.factory';

class GiftsController {
    name: string = 'gifts';
    gridOptions: any;
    selcetCategory: any;
    categoryList: any;
    category_ajaxLoading: boolean;
    gridActions: any;
    constructor(private $userFactory: IUserResource, private $mdDialog: any, private $q: ng.IQService) {
        'ngInject';
    }

    $onInit() {
        this.gridOptions = {
            data: [],
            getData: this.$userFactory.vouchers,
            urlSync: false
        };
    }
    selectVoucherCategory(item: any) {
        this.selcetCategory = item;
        this.category_ajaxLoading = true;
        this.$userFactory.get_voucher_categories({ voucher_sponser_id: item.voucher_sponser_id }, (res: any) => {
            console.log(res);
            this.categoryList = res;
            this.category_ajaxLoading = false;
        }, (err: any) => {
            this.category_ajaxLoading = false;
        });
    }
    getVoucher() {
        let self = this;
        function a() {
            return self.$q((resolve, reject) => {
                self.$userFactory.set_voucher(self.selcetCategory, (res: any) => {
                    resolve(res);
                }, (err: any) => {
                    reject(err);
                });
            });
        }
        this.$mdDialog.show(this.$mdDialog.myConfirm().doneFN(a)).then((res: any) => {
            self.selcetCategory = null;
            self.categoryList = null;
            self.gridActions.refresh();
        });
        // this.category_ajaxLoading = true;
        // this.$userFactory.set_voucher(this.selcetCategory, (res: any) => {
        //     this.category_ajaxLoading = true;
        //     this.selcetCategory = null;
        //     this.categoryList = null;
        //     this.gridActions.refresh();
        // }, (err: any) => {
        //     this.category_ajaxLoading = true;

        // });
        // this.selcetCategory = item;
    }
}

export class Gifts implements ng.IComponentOptions {
    static selector = 'gifts';
    static template = require('./gifts.component.html');
    static bindings = {
    };
    static controller = GiftsController;
}
