import { Armin } from './armin.component';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
    'ngInject';
    $stateProvider
        .state({
            name: 'armin',
            url: '/armin',
            template: '<div ui-view></div>'
        })
        .state({
            name: 'test',
            parent: 'armin',
            url: '/test',
            component: Armin.selector
        });
};
