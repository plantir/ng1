import './notification.component.scss';
import { IUserResource } from '../../factory/user.factory';

class NotificationController {
    gridActions: any;
    gridOptions: { data: any[]; urlSync: boolean; refresh?: any, getData: any, customFilters?: any, filters?: any };
    currentNavItem = 'notSeen';
    constructor(private $userFactory: IUserResource) {
        'ngInject';
    }
    $onInit() {
        this.gridOptions = {
            data: [],
            getData: this.$userFactory.notifications,
            urlSync: true,
            customFilters: [`is_seen:0`]
        };
    }
    setNav(nav: string) {
        switch (nav) {
            case 'all':
                this.gridOptions.customFilters = [];
                break;
            case 'seen':
                this.gridOptions.customFilters = [`is_seen:1`];
                break;
            case 'notSeen':
                this.gridOptions.customFilters = [`is_seen:0`];
                break;
        }
        // this.gridActions.filter();
        this.gridActions.doCheck();
        this.gridActions.refresh();
    }
    seenNotification(item: any, withRefresh: boolean = false) {
        if (this.currentNavItem === 'notSeen' && withRefresh === false) {
            this.gridOptions.customFilters = [];
            this.gridActions.doCheck();
        }
        item.is_seen = 1;
        this.$userFactory.seenNotification({}, item).$promise.then(res => {
            this.gridActions.refresh();
        });
    }
}

export class Notification implements ng.IComponentOptions {
    static selector = 'notification';
    static template = require('./notification.component.html');
    static bindings = {
    };
    static controller = NotificationController;
}
