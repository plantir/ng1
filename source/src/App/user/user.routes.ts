import { MyCashineh } from './components/my-cashineh/my-cashineh.component';
import { MyWallet } from './components/my-wallet/my-wallet.component';
import { AccountSettings } from './components/account-settings/account-settings.component';
import { ActiveUser } from './components/active-user/active-user.component';
import { ForgotPassword } from './components/forgot-password/forgot-password.component';
import { ResetPassword } from './components/reset-password/reset-password.component';
import { TransActions } from './components/transactions/transactions.component';
import { Cashout } from './components/cashout/cashout.component';
import { Notification } from './components/notification/notification.component';
import { Gifts } from './components/gifts/gifts.component';


export const routing = ($stateProvider: angular.ui.IStateProvider) => {
    'ngInject';
    $stateProvider
        .state({
            name: 'my-cashineh',
            url: '/my-cashineh',
            component: MyCashineh.selector
        })
        .state({
            name: 'active-user',
            url: '/activeUser?token',
            component: ActiveUser.selector
        })
        .state({
            name: 'forgot-password',
            url: '/forgot-password',
            component: ForgotPassword.selector
        })
        .state({
            name: 'reset-password',
            url: '/reset-password?token&email',
            component: ResetPassword.selector
        })
        .state({
            name: 'my-cashineh.transactions',
            url: '/transactions',
            component: TransActions.selector
        })
        .state({
            name: 'my-cashineh.my-wallet',
            url: '/my-wallet',
            component: MyWallet.selector
        })
        .state({
            name: 'my-cashineh.cashout',
            url: '/cashout',
            component: Cashout.selector
        })
        .state({
            name: 'my-cashineh.gifts',
            url: '/gifts',
            component: Gifts.selector
        })
        .state({
            name: 'my-cashineh.account-settings',
            url: '/account-settings',
            component: AccountSettings.selector
        })
        .state({
            name: 'my-cashineh.notifications',
            url: '/notification',
            component: Notification.selector
        });
};
