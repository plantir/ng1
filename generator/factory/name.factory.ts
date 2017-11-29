import { IMyConstant } from '../../core/core.constant';

export interface I%nameUpper% extends ng.resource.IResource<I%nameUpper%> {
    Id: number;
}
export interface I%nameUpper%Resource extends ng.resource.IResourceClass<I%nameUpper%> {}
export function %nameUpper%_factory($resource: ng.resource.IResourceService, myConstant: IMyConstant): I%nameUpper%Resource {
    'ngInject';
    return <I%nameUpper%Resource>$resource(myConstant.ApiUrl + '%name%', {}, {});
}
