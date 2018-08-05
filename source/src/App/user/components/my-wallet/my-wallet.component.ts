import './my-wallet.component.scss';

class MyWalletController {
    name: string = 'my-wallet';
}

export class MyWallet implements ng.IComponentOptions {
    static selector = 'myWallet';
    static template = require('./my-wallet.component.html');
    static bindings = {
    };
    static controller = MyWalletController;
}
