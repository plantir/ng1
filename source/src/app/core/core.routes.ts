import { Transition } from '@uirouter/core';
import { NotFound } from './components/404/404.component';
export const routing = (
  $stateProvider: angular.ui.IStateParamsService,
  $urlRouterProvider: angular.ui.IUrlRouterProvider
) => {
  'ngInject';
  $stateProvider
    .state({
      name: 'static',
      abstract: true
    })
    .state({
      name: '404',
      url: '/404',
      component: NotFound.selector
    })
    .state({
      name: 'home.**',
      url: '/',
      lazyLoad: ($transition$: Transition) => {
        const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
        return require.ensure([], () => {
          let module = require('../home/home.module');
          $ocLazyLoad.inject(module.moduleName);
        });
      }
    })
    .state({
      name: 'about-us.**',
      url: '/about-us',
      lazyLoad: ($transition$: Transition) => {
        const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
        return require.ensure([], () => {
          let module = require('../about-us/about-us.module');
          $ocLazyLoad.inject(module.moduleName);
        });
      }
    })
    .state({
      name: 'contact-us.**',
      url: '/contact-us',
      lazyLoad: ($transition$: Transition) => {
        const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
        return require.ensure([], () => {
          let module = require('../contact-us/contact-us.module');
          $ocLazyLoad.inject(module.moduleName);
        });
      }
    })
    .state({
      name: 'faq.**',
      url: '/faq',
      lazyLoad: ($transition$: Transition) => {
        const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
        return require.ensure([], () => {
          let module = require('../faq/faq.module');
          $ocLazyLoad.inject(module.moduleName);
        });
      }
    })
    .state({
      name: 'privacy-policy.**',
      url: '/privacy-policy',
      lazyLoad: ($transition$: Transition) => {
        const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
        return require.ensure([], () => {
          let module = require('../privacy-policy/privacy-policy.module');
          $ocLazyLoad.inject(module.moduleName);
        });
      }
    })
    .state({
      name: 'terms.**',
      url: '/terms',
      lazyLoad: ($transition$: Transition) => {
        const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
        return require.ensure([], () => {
          let module = require('../terms/terms.module');
          $ocLazyLoad.inject(module.moduleName);
        });
      }
    });
  $urlRouterProvider.otherwise('/404');
};
