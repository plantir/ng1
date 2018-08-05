import { IMyConstant } from '../../core/core.constant';
import { IUserFull } from '../services/user.service';

export interface IUser extends ng.resource.IResource<IUser> {
    id: number;
}
interface IToken {
    refreshToken: string;
    token: string;
    type: string;
}
interface IRegister extends ng.resource.IResource<IRegister> {
    status: number;
    user: IUserFull;
    token: IToken;
}

export interface IUserResource extends ng.resource.IResourceClass<IUser> {
    shopping_trips(params: Object, data: Object, success?: Function, error?: Function): IUser;
    vouchers(params: Object, data: Object, success?: Function, error?: Function): IUser;
    get_voucher_categories(params: Object, data: Object, success?: Function, error?: Function): IUser;
    set_voucher(params: Object, data: Object, success?: Function, error?: Function): IUser;
    transactions(params: Object, data: Object, success?: Function, error?: Function): IUser;
    notifications(params: Object, data: Object, success?: Function, error?: Function): IUser;
    seenNotification(params: Object, data: Object, success?: Function, error?: Function): IUser;
    register(params: Object, data: Object, success?: Function, error?: Function): IRegister;
    login(params: Object, data: Object, success?: Function, error?: Function): IRegister;
}

export class UserFactory {
    static selector = '$userFactory';
    static resource($resource: ng.resource.IResourceService, myConstant: IMyConstant): IUserResource {
        'ngInject';
        return <IUserResource>$resource(myConstant.ApiUrl + '/user/:id', { id: '@id' }, {
            query: {
                method: 'GET',
                isArray: false
            },
            shopping_trips: {
                method: 'GET',
                url: myConstant.ApiUrl + '/user/shopping_trips',
                isArray: false
            },
            transactions: {
                method: 'GET',
                url: myConstant.ApiUrl + '/user/transactions',
            },
            notifications: {
                method: 'GET',
                url: myConstant.ApiUrl + '/user/notifications',
            },
            seenNotification: {
                method: 'POST',
                url: myConstant.ApiUrl + '/user/notifications/:id/seen',
                params: { id: '@id' }
            },
            register: {
                method: 'POST',
                url: myConstant.ApiUrl + '/user/signup',
            },
            vouchers: {
                method: 'GET',
                url: myConstant.ApiUrl + '/user/vouchers',
            },
            get_voucher_categories: {
                method: 'GET',
                url: myConstant.ApiUrl + '/user/get_voucher_categories',
                isArray: true
            },
            set_voucher: {
                method: 'POST',
                url: myConstant.ApiUrl + '/user/set_voucher',
            },
            login: {
                method: 'POST',
                url: myConstant.ApiUrl + '/user/login',
            },
            update: {
                method: 'PUT'
            }
        });
    }
}
