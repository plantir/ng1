// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

import 'angular-local-storage';
import { routing } from './user.routes';
import { UserService } from './services/user.service';
import { LoginModal } from './components/login-modal/login-modal.component';
import { MyCashineh } from './components/my-cashineh/my-cashineh.component';
import { MyWallet } from './components/my-wallet/my-wallet.component';
import { AccountSettings } from './components/account-settings/account-settings.component';
import { TransActions } from './components/transactions/transactions.component';
import { ActiveUser } from './components/active-user/active-user.component';
import { ForgotPassword } from './components/forgot-password/forgot-password.component';
import { ResetPassword } from './components/reset-password/reset-password.component';
import { Cashout } from './components/cashout/cashout.component';
import { ChangePasswordModal } from './components/change-password-modal/change-password-modal.component';
import { UserFactory } from './factory/user.factory';
import { RegisterModal } from './components/register-modal/register-modal.component';
import { Notification } from './components/notification/notification.component';
import { Gifts } from './components/gifts/gifts.component';

export const moduleName =
    angular.module('application.user', [
        'ui.router',
        'LocalStorageModule'
    ])
        .component(MyCashineh.selector, MyCashineh)
        .component(Cashout.selector, Cashout)
        .component(MyWallet.selector, MyWallet)
        .component(AccountSettings.selector, AccountSettings)
        .component(TransActions.selector, TransActions)
        .component(ActiveUser.selector, ActiveUser)
        .component(ForgotPassword.selector, ForgotPassword)
        .component(ResetPassword.selector, ResetPassword)
        .component(ChangePasswordModal.selector, ChangePasswordModal)
        .component(LoginModal.selector, LoginModal)
        .component(RegisterModal.selector, RegisterModal)
        .component(Gifts.selector, Gifts)
        .component(Notification.selector, Notification)

        .service(UserService.selector, UserService)
        .factory(UserFactory.selector, UserFactory.resource)
        .config(routing)
        .name;
