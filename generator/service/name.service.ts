import { IPromise } from 'angular';
import { IMyConstant } from '../../core/core.constant';



export interface I%nameUpper% {
    name?: string;
    email?: string;
    message?: string;
}

export interface I%nameUpper%Service {
    get(id:number): IHttpPromise<I%nameUpper%>;
    save(data: I%nameUpper%): IHttpPromise<I%nameUpper%>;
}
export class %nameUpper%Service {
    static selector = '$%name%';
    constructor(private $http: ng.IHttpService, private $q: ng.IQService, private myConstant: IMyConstant) { 
        'ngInject';
    }

    get(id:number) {
        return  this.$http.get(`${this.myConstant.ApiUrl}/%name%/${id}`);
    }
    save(data:I%nameUpper% ) {
        return this.$http.post(`${this.myConstant.ApiUrl}/%name%`, data);
    }
}
