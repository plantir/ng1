import { ResourceRouting } from '../../Helper/ts/resource_route';

export class Routing extends ResourceRouting {
  constructor($stateProvider: ng.ui.IStateProvider) {
    'ngInject';
    super($stateProvider, '%name%');
  }
}
