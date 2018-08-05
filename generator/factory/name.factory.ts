import { IMyConstant } from '../../core/core.constant';

export interface I%nameUpper% extends ng.resource.IResource <I%nameUpper%> {
    id: number;
}

export interface I%nameUpper%Resource extends ng.resource.IResourceClass <I%nameUpper%> {
    update(params: Object, data: Object, success?: Function, error?: Function): I%nameUpper%;
}

export class %nameUpper%Factory {
    static selector = '$%nameUpper%';
    static resource($resource: ng.resource.IResourceService, myConstant: IMyConstant): I%nameUpper%Resource {
        'ngInject';
        return <I%nameUpper%Resource> $resource(myConstant.ApiUrl + '/%name%/:id', { id: '@id' }, {
            query: {
                method: 'GET',
                isArray: false
            },
            update: {
                method: 'PUT'
            }
        });
    }
}
