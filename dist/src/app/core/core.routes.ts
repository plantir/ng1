declare global {
  interface ISystem {
    import(request: string): Promise<any>;
  }
  var System: ISystem;
}
import { App } from './components/app/app.component';
import { Transition } from '@uirouter/core';
export const routing = ($stateProvider: angular.ui.IStateParamsService, $urlRouterProvider: angular.ui.IUrlRouterProvider) => {
  'ngInject';
  $stateProvider
    .state('app', {
      abstract: true,
      url: '/app',
      component: App.selector
    })
    // .state({
    //   name: 'armin.**',
    //   url: '/armin',
    //   lazyLoad: function (transition: Transition) {
    //     const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
    //     return System.import('../armin/armin.module').then(module => {
    //       $ocLazyLoad.inject(module.moduleName);
    //     });
    //   }
    // });
  $urlRouterProvider.otherwise('/app/contact');
};



