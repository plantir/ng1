export const routing = ($stateProvider: angular.ui.IStateProvider) => {
    'ngInject';
    $stateProvider
        .state({
            name: '%name%',
            url: '/%name%',
            template: '<div ui-view></div>'
        });
};
