import { IMyConstant } from '../../core/core.constant';
import { IHttpPromise } from 'angular';

export interface I%nameUpper% {
    id: number;
}

export interface I%nameUpper%Service {
    get(id: number): IHttpPromise<I%nameUpper%>;
    save(data: I%nameUpper%): IHttpPromise<I%nameUpper%>;
}

export class %nameUpper%Service {
    static selector = '$%selectorName%';
    constructor(private $http: ng.IHttpService, private myConstant: IMyConstant) { 
        'ngInject';
    }

    get(id: number) {
        return  this.$http.get(`${this.myConstant.ApiUrl}/%name%/${id}`);
    }
    save(data: I%nameUpper% ) {
        return this.$http.post(`${this.myConstant.ApiUrl}/%name%`, data);
    }
}
