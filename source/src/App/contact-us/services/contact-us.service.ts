import { IPromise } from 'angular';
import { IMyConstant } from '../../core/core.constant';



export interface IContactUs {
    name?: string;
    email?: string;
    message?: string;
    contact?: number;
}

export interface IContactUsService {
    submit(data: IContactUs): IPromise<{ message: string; data: string; status: number }>;
}
export class ContactUsService {
    static selector = '$contactUs';
    constructor(private $http: ng.IHttpService, private $q: ng.IQService, private myConstant: IMyConstant) {
        'ngInject';
    }

    async submit(data: IContactUs) {
        try {
            let response = await this.$http.post(`${this.myConstant.ApiUrl}/contact_us`, data);
            return response.data;
        } catch (error) {
            return error;
        }
    }
}
