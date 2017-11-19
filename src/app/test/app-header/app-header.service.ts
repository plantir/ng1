import { IPromise } from 'angular';
import { IMyConstant } from '../../core/core.constant';



export interface IAppHeader {
    name?: string;
    email?: string;
    message?: string;
}
export interface IAppHeaderShort {
    name ?: string;
    email ?: string;
    message ?: string;
}
export interface IAppHeaderFull extends IAppHeaderShort {
    name ?: string;
    email ?: string;
    message ?: string;
}
export interface IAppHeaderService {
    get(): IPromise<{ message: string; data: IAppHeaderFull; status: number }>;
    save(data: IAppHeaderFull): IPromise<{ message: string; IAppHeaderFull: string; status: number }>;
}
export class AppHeaderService {
    static selector = '$app-header';
    constructor(private $http: ng.IHttpService, private $q: ng.IQService, private myConstant: IMyConstant) { }

    async save(data: IAppHeaderFull) {
        try {
            let response = await this.$http.post(`${this.myConstant.ApiUrl}/app-header`, data);
            return response.data;
        } catch (error) {
            return error;
        }
    }
}
