import { IPromise } from 'angular';
import { IMyConstant } from '../../core/core.constant';



export interface I%nameUpper% {
    name?: string;
    email?: string;
    message?: string;
}
export interface I%nameUpper%Short {
    name ?: string;
    email ?: string;
    message ?: string;
}
export interface I%nameUpper%Full extends I%nameUpper%Short {
    name ?: string;
    email ?: string;
    message ?: string;
}
export interface I%nameUpper%Service {
    get(): IPromise<{ message: string; data: I%nameUpper%Full; status: number }>;
    save(data: I%nameUpper%Full): IPromise<{ message: string; I%nameUpper%Full: string; status: number }>;
}
export class %nameUpper%Service {
    static selector = '$%name%';
    constructor(private $http: ng.IHttpService, private $q: ng.IQService, private myConstant: IMyConstant) { }

    async save(data: I%nameUpper%Full) {
        try {
            let response = await this.$http.post(`${this.myConstant.ApiUrl}/%name%`, data);
            return response.data;
        } catch (error) {
            return error;
        }
    }
}
